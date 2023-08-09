const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e) {
    
    /*
    This below:
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    is the same as the code below. The code below uses ES6 to shorten up the 
    code to 1 line.

    Gives the width and height of the of the .hero element.
    */
    const { offsetWidth: width, offsetHeight: height } = hero;

    /* 
    x and y var are the offsetX and offsetY of the mouse target. Used let instead
    of const because the x and y var will be reassigned soon.
    */
    let { offsetX: x, offsetY: y } = e;

    /*
    the if statement is used to see if user has moved over the hero text then 
    adds extra pixels from the e.target.offsetLeft (to x) and the 
    e.target.offsetTop (to y).
    */
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    /*
    xWalk var keeps track of the users mouse position for x axis and converts
    the position to a number between 0 to 100; 

    The math has 2 parts to it:
    1) (x / width * walk) keeps track of the current position of the mouse and 
        divides it by (width * walk) to get the position based off of 0 to 100.
    
    2) (walk / 2) is then subtracted from the above to get the position to be
        between -50 to 50.

    
    yWalk follows a similar logic as xWalk, just on the y axis instead.
    */
    const xWalk = ((x / width * walk) - (walk / 2)).toFixed(2);
    const yWalk = ((y / height * walk) - (walk / 2)).toFixed(2);
    
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(175, 0, 255, 0.8),
    ${xWalk * 4}px ${yWalk * 4}px 0 rgba(255, 202, 0, 0.8),
    ${xWalk * -2}px ${yWalk}px 0 rgba(0, 198, 211, 0.8),
    ${xWalk}px ${yWalk * -2}px 0 rgba(69, 243, 5, 0.8),
    ${xWalk * -2}px ${yWalk * -2}px 0 rgba(186, 0, 0, 0.8),
    ${xWalk * -4}px ${yWalk * -4}px 0 rgba(120, 0, 118, 0.8)
    `
}

hero.addEventListener('mousemove', shadow);