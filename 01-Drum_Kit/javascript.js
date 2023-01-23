// used .addEventListener() to hear when a key is pressed, then runs function
window.addEventListener('keydown', function(e) {
    // querySelector finds the data-key number (e) by using the JS event keycode
    // that is attached to each key then puts it into audio variable.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audio) return;  // stops here

    // putting .currentTime to 0 rewinds to the start of the audio. .play()
    // will play out the full audio sound, so if audio is 3 seconds, then you
    // will have to wait for those 3 secs before you can play another sound.
    audio.currentTime = 0;
    audio.play();
});