// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// .some() checks to see if there is at least one part of array that matches
// .every() checks to see if every part of array fits description





// Array.prototype.some() // is at least one person 19 or older?
/*
// .some() is used on the function to see if there is someone who matches task
const isAdult = people.some(function(person) {

    // currentYear var gets the current date by using new Date() function along
    // with .getFullYear() to get just the year
    const currentYear = (new Date()).getFullYear();

    // if is used to see if there is someone who is older than 19
    if(currentYear - person.year >= 19) {
        return true;
    } 
});

// The code above can be simplified. The bottom is an example of this
const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});
*/

// Can be simplified even further.
const isAdult = people.some(person => 
        ((new Date()).getFullYear()) - person.year >= 19);
console.log({isAdult});





// Array.prototype.every() // is everyone 19 or older?
// Can use same code as above, just have to replace .some and add new var name.
// .every is used to see if all people are 19 or older. Should be false due to
// one person (Lux) being only 8 years old (current year: 2023).
const allAdults = people.every(person => 
        ((new Date()).getFullYear()) - person.year >= 19);
console.log({allAdults});




// Array.prototype.find()
// Find returns just the one part of array that you are looking for
// find the comment with the ID of 823423. Should be with text: "Super good".
/*
const comment = comments.find(function(comment) {
    if(comment.id === 823423) {
        return true;
    }
});
*/

// Below uses arrow function to shorten above code to one line. Don't necessarily 
// need to write out full if condition since we only care about it being true.
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);





// Array.prototype.findIndex()
// .findIndex() is used to find an array index.

// Find the comment with this ID 823423

// .findIndex() is used below to find array index that has the 
// same object id number - 823423. Should be array index [1].
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);



// delete the comment with the ID of 823423
// can use .splice function to remove this part of the array index
/*
comments.splice(index, 1);
console.table(comments);
*/

// Can also build a new array by using slice to combine parts of old array
// into new array. We also have to pass old array into new array by using the
// spread operator (...).
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];
console.table(newComments);