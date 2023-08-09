const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

/* 
JSON.parse(localStorage.getItem('items')) is used to get the items array from
the localStorage first. If nothing is there then it gets a blank array.
*/
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    /*
    e.preventDefault() is used to stop the page from refreshing everytime an
    input is submitted.
    */
    e.preventDefault();

    /*
    'this.querySelector' can be used over 'document.querySelector' becuase 'this'
    will refer to the inputted object. .value is used to get the user inputted 
    value.
    */
    const text = (this.querySelector('[name=item]')).value;
    
    /*
    item obj will be used to place inputted items into (similar to a template)
    */
    const item = {
        // ES6 is used below to shorten - text: 'text' - to just 'text'.
        text,
        done: false
    };


    // use .push to push new item objs into items array.
    items.push(item);

    // use populateList function to pass through items and itemsList for list
    populateList(items, itemsList);


    /*
    adding anything besides a string to a localStorage turns the it into a 
    string because localStorage cannot handle anything but strings.
    */
    // localStorage.setItem('items', items);
    

    /* 
    To fix problem, we have to convert items into a string using 
    JSON.stringify. JSON.stringify converts anything in it into a long string. 
    To find proof that items is converted to a long string, type up various
    dishes and add them. Then go to dev tools and head straight to the console
    tab. Open that badboy up and type in localStorage.getItem('items') to see
    a nice long string reproduced. This string can be converted back into an
    array of object but it requres using JSON.parse(localStorage.getItem()).
    */
    localStorage.setItem('items', JSON.stringify(items));


    /*
    'this' is a form element which means it has various functions attached to it.
    .reset() is used to clear the text from the input boxes. It's similar to a
    reset/restart button that is on various forms to just restart the form again.
    */
    this.reset();
}


/*
Function populateList() is going to place newly created items on a the list
above the add item button.
plates is used in place of the items array from above to work with any scenario.
platesList is used as a new element for the items to be added too.

** This type of function may come in handy in the future!!! **

*/
function populateList(plates = [], platesList) {

    /*
    The following can be broken down into a couple of steps:
        1) Loops through every object in the plates array using map
        2) return a nice message
        3) use join('') to make array become a long string because .map() 
            returns an array which isn't necessary because innerHTML 
            will return strings, not arrays. 
    */
    platesList.innerHTML = plates.map((plate, i) => {
        
        /*
        used data-index=${i} to link the input and the label together.
        cannot use check="false" because it will still check everything. Having
        any attribute of check will cause it to be checked. Have to use ternary
        operator to get through this.
        */
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" 
                    ${plate.done ? 'checked' : ''}/>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}


/* 
toggleDone() is going to keep track of the checkmarks to keep items checked, even
if user reloads the page.
*/
function toggleDone(e) {
    
    /* 
    Have to use .target.matches() due to the itemsList.addEventListener() targeting
    every part of the list area. Need to listen for the click of the checkmarks and
    nothing else.
    */
    if(!e.target.matches('input')) return;

    /*
    element var is used to get the target of the click
    */
    const element = e.target;

    /*
    index var will use the checkbox 'data-index=${i}' to keep track of which 
    item was checked.
    */
    const index = element.dataset.index;

    /*
    The item object property 'done: false' will be toggled to true (if false) or
    to false (if true). 
    */
    items[index].done = !items[index].done;

    /*
    Call this string again to store the checked items into the localStorage
    */
    localStorage.setItem('items', JSON.stringify(items));

    /*
    populateList() will be used to update the page and to make sure this function
    works, even if user reloads page after checking each mark.
    */
    populateList(items, itemsList);
}


/*
If we tried to use the following code, it will not work properly. This is due to
the items not existing since populateList() has not run yet. Even if we placed 
populateList() above this code, it will not work properly. Everything will covered,
including the input box and the button.
*/
// const checkBoxes = document.querySelectorAll('input');
// checkBoxes.forEach(input => input.addEventListener('click', () => alert('hi')));



/* 
Adding a 'submit' instead of a 'click' will enable the .addEventListener to
react to a variety of listeners instead of just 'click'.
*/
addItems.addEventListener('submit', addItem);

/*
This will be used to check for any clicks that happen inside of the plates 
unordered list.
*/
itemsList.addEventListener('click', toggleDone);

/*
use populateList function to pass through items and itemsList for list. Having 
this function here and using localStorage (with JSON functions) helps keep the
list on the site, even if user reloads the page.
*/
populateList(items, itemsList);