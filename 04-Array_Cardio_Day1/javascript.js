// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];


// Array.prototype.filter()
// .filter() is used to filter arrays based off of conditions and puts remaining
// indexes of old filtered array into a new array

// 1. Filter the list of inventors for those who were born in the 1500's
// Used arrow function to simplify. This will return a boolean of true if both conditions are met
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1600);

// .table on filtered fifteen array can produce a table of indexes
console.table(fifteen);



// Array.prototype.map()
// .map() is used to stamp certain characteristics onto the array and returns
// back array with new characteristics

// 2. Give us an array of the inventors first and last names
// Uses arrow function to .map on inventor array and puts new array into 
// fullNames array
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);



// Array.prototype.sort()
// .sort() is used to compare indexes from an array and puts them higher or
// lower on the indexlist of the array

// 3. Sort the inventors by birthdate, oldest to youngest
// ordered array used .sort() on the inventors array to compare years and
// returns the person with older birth year higher on indexlist
/*
const ordered = inventors.sort(function(a, b) {
  if(a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
*/

// can shorten above code by using a ternary function
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

console.table(ordered);
  


// Array.prototype.reduce()
// .reduce() can be used to condense parts of array index into a singular var

// 4. How many years did all the inventors live all together?
// .reduce() is used on inventors array to return totalYears var with total
// years they all lived .
// Don't forget about the ending zero, otherwise the total is going to remain
// undefined and reduce won't work well
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);


  
// 5. Sort the inventors by years lived
// .sort() is used on inventors array to coompare 2 of indexes and puts them
// higher or lower on indexlist
const oldest = inventors.sort(function(a, b) {
  const lastPerson = a.passed - a.year;
  const nextPerson = b.passed - b.year;
  
  // Code below can be simplified
  /*
  if(lastPerson > nextPerson) {
    return -1;
  } else {
    return 1;
  }
  */

  // Use a ternary operator to simplify above code
  return lastPerson > nextPerson ? -1 : 1;

}); 

console.table(oldest);




// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// The following code should be dont on the link provided.
// Used console inspector to find relevant data for links
// const category = document.querySelector('.mw-category');

// Put all links (a tag) from .mw-category class into links array
// Array.from is used due to .querySelectorAll() returning a nodelist and the
// need to convert it into an array
// const links = Array.from(category.querySelectorAll('a'));

// Could also have converted all links into arrays putting the links straight
// into an array by using array brackets and ...
// ... means all stuff is put in intervals into array index
// const links = [...category.querySelectorAll('a')];


// .map is used on links array to return array with just textContent form a tag
// .filter is used to return array indexes that include 'de' in name
// const de = links
//            .map(link => link.textContent)
//           .filter(streetName => streetName.includes('de'));
// use console.log(de) to see full results after putting the code from above
  

  
// 7. sort Exercise
// Sort the people array alphabetically by last name. Harder due to lack of object
// in the people array.

// .sort() is used on people array to compare each index to each other.
// Each people array index will be sorted into the var lastOne & nextOne.
// Should display the new arranged array in our created alpha array.
const alpha = people.sort((lastOne, nextOne) => {

  // .split() is used to seperate each var (lastOne, nextOne) into seperate var
  // lLast & lFirst for lastOne and nLast & nFirst for nextOne.
  // Only want lLast & nLast due to arranging by last name.
  const [lLast, lFirst] = lastOne.split(', ');
  const [nLast, nFirst] = nextOne.split(', ');

  // Ternary operator is used to compared lLast & nLast from above. They are 
  //  then put higher or lower on the array indexlist.
  return lLast > nLast ? 1 : -1;
});

console.log(alpha);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  
// .reduce() is used on data array to check how much times each occurred.
// Each index is broken down into an and added to object obj.
// This allows us to keep count on each item.

// Each index from the data array is going to be passed through the .reduce()
// and put into the obj var below. The item var will be used as counter.
// This also means we can add as much new indexes to the data array and they
// should all be passed through .reduce(). Remember, start with a blank object.
const transportation = data.reduce(function(obj, item) {

  // The if statement below is used to initialize the count for that item if
  // the item had nothing in it. Only works if item is undefined (no number).
  if(!obj[item]) {
    obj[item] = 0;
  }

  // Gives a counter to the item in the obj and returns it.
  obj[item]++;
  return obj;

// The {} below with nothing in it is the blank object.
}, {});

console.log(transportation);