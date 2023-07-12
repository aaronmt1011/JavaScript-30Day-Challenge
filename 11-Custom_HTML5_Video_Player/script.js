// vars to grab elements
const player = document.querySelector('.player');
const vid = document.querySelector('.viewer');
const prog = document.querySelector('.progress');
const progBar = document.querySelector('.progress__filled');

const tog = document.querySelector('.toggle');
const skipBut = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
let mousedown = false;

// togglePlay() toggles video to stop or start
function togglePlay() {
    // play/paused are HTMLMediaElement property that affect video elements
    const method = vid.paused ? 'play' : 'pause';
    vid[method]();
}

// updateButton() changes the play button
// this is used because it is bound to the vid var
function updateButton() {
    const icon = this.paused ? '▶' : '⏸';
    tog.textContent = icon;
}

// skip() is used to go forward or to rewind a video
// this function uses "data-skip" from the buttons to determine how far to
// forward or to rewind
function skip() {
    vid.currentTime += parseFloat(this.dataset.skip);
}

// handRangeUpdate() makes the volume and speed ranges match the value itself.
// This allows the value to change the volume/speed property itself.
function handRangeUpdate() {
    vid[this.name] = this.value;
}

// handProgress() makes the progress bar match up to the video
function handProgress() {
    const percent = (vid.currentTime / vid.duration) * 100;

    // flexBasis is the style that will change the width of the progress bar
    progBar.style.flexBasis = `${percent}%`;
}


// scrub() causes the progress bar to affect the video progress based off of
// where user presses or moves to
function scrub(e) {
    // prog.offsetWidth is used to get the full progress bar size
    const scrubTime = (e.offsetX / prog.offsetWidth) * vid.duration;
    vid.currentTime = scrubTime;
}

vid.addEventListener('click', togglePlay);
vid.addEventListener('play', updateButton);
vid.addEventListener('pause', updateButton);
vid.addEventListener('timeupdate', handProgress);

tog.addEventListener('click', togglePlay);
skipBut.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handRangeUpdate));

prog.addEventListener('click', scrub);

// the addEventListener below is a simplified version of the addEventListener below it
// 
prog.addEventListener('mousemove', (e) => mousedown && scrub(e));
/*
prog.addEventListener('mousemove', () => {
    if(mousedown) {
        scrub();
    }
});
*/

prog.addEventListener('mousemove', () => mousedown = true);
prog.addEventListener('mouseup', () => mousedown = false);