const dogs = [{ name: 'Mugen', age: 4 }, { name: 'Einstein', age: 4 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
console.log('%c I am cool!', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue;');

// warning!
console.warn('DAMN!');

// Error :|
console.error('You fucked up.');

// Info
console.info('I may provide some info here in the future');

// Testing
console.assert(2 === 3, '2 does not equal 3!');

const a = document.querySelector('p');
console.assert(a.classList.contains('something'), 'Nope!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(a);
console.dir(a);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.count(`${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.count(`${dog.name}`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
    console.count(`${dog.name}`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Mugen');
console.count('Einstein');

// timing
console.time('This is only hear to take your time while data is being fetched.');
fetch('https://api.github.com/users/aaronmt1011')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('This is only hear to take your time while data is being fetched.');
        console.log(data);
    });