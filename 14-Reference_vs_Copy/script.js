// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age,age2);  // shows 100, 100 
age = 200;
console.log(age, age2); // shows 200, 100

/*
The reason for 200, 100 instead of 100, 100 is because both variables were
initialized at the same time. This means that age2 is just 100. It will not
become any other if age changes after age2 was initialized.
Works the same way for strings.
*/
let name = 'John';
let name2 = name;
console.log(name, name2);
name = 'Jon';
console.log(name,name2);



// Let's say we have an array
const players = ['Jin', 'Fuu', 'Mikasa', 'Krillin'];

// and we want to make a copy of it.
const team1 = players;
console.log(players, team1);

// You might think we can just do something like this:
//team1[5] = 'Joey';

/*
however what happens when we update that array?
This will not work due to team being an array reference to the players array. 
This means that if team array is changed, the players array will change too.
*/

/*
So, how do we fix this? We use slice to make a copy instead!
.slice() can be used in a similar way to the cut and paste function on a pc
if there is nothing passed through slice(). Team2 becomes a copy of the
players array. This means that team2 is not a reference to the OG array like 
team1 was. Any change that happens to team2 will not effect the players array.
*/
const team2 = players.slice();
team2[4] = 'Joey';
console.log(players, team2);

/*
Another one (*DJ Khaled voice)
.concat() can be used to attach the players array to an empty array ( [] ) 
to create an entirely new array, team3.
*/
const team3 = [].concat(players);
team3[4] = 'Gon';
console.log(players, team2, team3);

/*
Another one (*DJ Khaled voice)
ES6 Spread ( [...] ) can be used to pass the players array into the team4 
array.
*/
const team4 = [...players];
team4[4] = 'Ken';
console.log(players, team2, team3, team4);

/*
Another one (*DJ Khaled voice)
Array.from() can also be used to pass the players array to team5 array.
*/
const team5 = Array.from(players);
team5[4] = 'Yeg';
console.log(players, team2, team3, team4, team5);



// The same thing applies to objects
// with Objects
const person = {
  name: 'John Doe',
  age: 80
};


// And try making a copy:
// const capt = person;
// capt.age = 99;
// console.log(person, capt);
/*
This will not work. The reason is because the capt object is a reference to 
the person object. This means that changing the capt object will also change
the person object.
*/

/*
How do we take a copy instead?
Object.assign() is used on an empty object ( {} ) to overwrite the person object
into the blank object, afterwards a third argument puts in different parameters 
to create the new capt object.
*/
const capt = Object.assign({}, person, {number: 99, name: 'Jon Do'});
console.log(person, capt);


// We did see the object spread come to ES6
const capt1 = {...person};
console.log(person, capt1);


/*
Things to note - this is only 1 level deep - both for Arrays and Objects. lodash 
has a cloneDeep method, but you should think twice before using it.
*/
const dog1 = {
  name:'Mugen',
  age: 10,
  food: {
    meat: 'chicken',
    veggies: 'none',
    fruit: 'depends'
  }
}

console.log(dog1);

/*
This will only work for the 1st level. It will not work on the food object inside
of the dog object.
*/
const dog2 = Object.assign({}, dog1);
dog2.name = 'Ein';
console.log(dog1, dog2);

/*
Will not work for 2nd level stuff. The food object for dog2 becomes a reference
to the food object for dog1. Aka assigning 'beef' changes the meat for each dog
to just beef instead of keeping dog1 with 'chicken'.
*/
dog2.food.meat = 'Beef';
console.log(dog1, dog2);