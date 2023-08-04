const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

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
    const text = (this.querySelector('[name = item]')).value;
    
    /*
    item obj will be used to place inputted items into (similar to a template)
    */
    const item = {
        // ES6 is used below to shorten - text: 'text' - to just 'text'.
        text,
        done: false
    }
    /*
    'this' is a form element which means it has various functions attached to it.
    .reset() is used to clear the text from the input boxes. It's similar to a
    reset/restart button that is on various forms to just restart the form again.
    */
    
    items.push(item);
    this.reset();
    console.log(item);
}

/* 
Adding a 'submit' instead of a 'click' will enable the .addEventListener to
react to a variety of listeners instead of just 'click'.
*/
addItems.addEventListener('submit', addItem);