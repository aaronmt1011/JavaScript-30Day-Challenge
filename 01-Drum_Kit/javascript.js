// playSound() uses the .addEventListener to play sound paired with key
function playSound(e) {
    // querySelector finds the data-key number (e) by using the JS event keycode
    // that is attached to each key then puts it into audio variable.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;  // stops here

    // putting .currentTime to 0 rewinds to the start of the audio. .play()
    // will play out the full audio sound, so if audio is 3 seconds, then you
    // will have to wait for those 3 secs before you can play another sound.
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


// removeTransition() removes the transition effects from the keys
function removeTransition(e) {
    // skips function if it doesn't have the propertyName "transform"
    if(e.propertyName !== 'transform') return; 

    // .classList.remove() allows us to stop the transition effects and returns
    // it to 'normal' settings
    e.target.classList.remove('playing');
}


// .querySelectorAll() puts all .key class divs into keys array
const keys = Array.from(document.querySelectorAll('.key'));


// .forEach allows us to go through the keys array. Alos used arrow function to
// create an .addEventListener() that looks for key that has finished their 
// transition, then starts the removeTransition() function to return to normal.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// .addEventListener() listens for keydown event, then starts playSound()
window.addEventListener('keydown', playSound);