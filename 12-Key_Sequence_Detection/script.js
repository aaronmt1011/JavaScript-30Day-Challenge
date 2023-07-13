// pressed is used to keep the passcode in an array to be checked later to see
// if it contains the secretCode
const pressed = [];

// secretCode is the passcode that the user types to see some cool stuff
const secretCode = 'cool';

// addEventListener starts after a key has been presed. It will put the keys into
// the pressed array. Splice will then be used to cut the array length to the
// length of the secretCode. The if statement will then be used to check if the
// pressed array matches the secretCode. If its true then something cool happens.
// If false, then nothing happens.
window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)) {
        cornify_add();
    }
    console.log(pressed);
});