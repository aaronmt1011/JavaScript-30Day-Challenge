// var endpoint is used to gather content from url listed
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// Cities array will have the data gathered from above put here 
let cities = [];
// const cities = [];

// fetch() is used to return a promise (raw data). .then() is used to format a
// function to convert the raw data into a json format. .json() is then used to
// convert the blob promise into a json file. .then() is used again to console.log()
// the new data array.
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities = data);
    // .then(data => cities.push(...data)); can be used instead to make cities
    // array a const array instead of a let array

// findMatches() is used to find the matching word for whatever is input into
// search bar
function findMatches(wordToMatch, cities) {
    // filter() is used to filter searches down to terms that use searched term
    return cities.filter(place => {
        // RegExp() is used on wordToMatch with 'gi' flag
        // g flag: global flag, will look through entire string for searched term
        // i flag: is insensitive flage, will match regardless of upper/lowercase
        const regex = new RegExp(wordToMatch, 'gi');

        // below uses the city and state object from the cities with match()
        // to see if search term matches with any of the indexes from the 
        // object parts of the cities array 
        return place.city.match(regex) || place.state.match(regex);
    });
}


// displayMatchers() is used to find display the possible matches below the input
function displayMatches() {
    // matchArray var used findMatches() function to search for parts of items
    // from the cities array and places them into matchArray array
    const matchArray = findMatches(this.value, cities);

    // html var uses .map() to go through every index of matchArray array and to
    // use the arrow function to help with the layout of possible terms below
    // input term. .join() is then used (due to .map() returning an array) to 
    // return possible strings as a string instead of multiple items from array.
    const html = matchArray.map(place => {
        return `
            <li>
                <span class ="name">${place.city}, ${place.state}</span>
                <span class ="population">${place.population}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// .addEventListener() is used with the 'change' event to show matches after 
// clicking away from search bar.
searchInput.addEventListener('change', displayMatches);

// .addEventListener() is used with the 'keyup' event to show matches after
// keys are done being pressed
searchInput.addEventListener('keyup', displayMatches);