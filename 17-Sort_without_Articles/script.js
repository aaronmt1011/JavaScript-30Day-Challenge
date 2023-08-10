const musicians = ['Bob Marley', 'Pete Seeger', 'Nina Simone', 
    'Rage Against the Machine', 'Gil Scott-Heron', 'Billy Holiday', 
    'A Tribe Called Quest', 'Rebel Diaz', 'Queen Latifah', 'The Clash'];



/* 
strip() uses RegEx to replace a, the, & an with a blank space, then trimming
it using .trim().
*/
function strip(muse) {
    return muse.replace(/^(a |the |an )/i, '').trim();
}



/*
sortedMusicians var uses .sort() to arrange the array based off of alphabetical
order.
*/
/*
const sortedMusicians = musicians.sort((a, b) => {
    //strip() function is used here to 'ignore' a, an, & the in the musicicans 
    // names.
    
    if (strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    }
});
*/

/* The code above can be shortened by using the ternary operator */
/*
const sortedMusicians = musicians.sort((a, b) => {
    return strip(a) > strip(b) ? 1 : -1;
});
*/

/* The code above can be shortened even further into just 1 line*/
const sortedMusicians = musicians.sort((a, b) => strip(a) > strip(b) ? 1 : -1);



/* 
New sortedMusicians array needs to be placed on the #musicians unordered list. 

Used .map() to put each part ofthe sortedMusicians array into the list area
on the main page. 

Also used .join() due to .innerHTML translating anything in it into a string.
This means that if .join() was not there, the commas that separated each array
index will also be displayed in the list itself, but will appear in the top-left
corner of each list item. Using .join('') forces the commas to be removed by
joining each array index into a long string.
*/
document.querySelector('#musicians').innerHTML = 
    sortedMusicians
        .map(musicians => `<li>${musicians}</li>`)
        .join('');