// vars to grab elements
const player = document.querySelector('.player');
const vid = document.querySelector('.viewer');
const prog = document.querySelector('.progress');
const progBar = document.querySelector('.progress__filled');

const tog = document.querySelector('.toggle');
const skipBut = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

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


vid.addEventListener('click', togglePlay);
vid.addEventListener('play', updateButton);
vid.addEventListener('pause', updateButton);

tog.addEventListener('click', togglePlay);
skipBut.forEach(button => button.addEventListener('click', skip));