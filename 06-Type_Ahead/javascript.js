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


function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp();
        return place.city.match();
    });
}