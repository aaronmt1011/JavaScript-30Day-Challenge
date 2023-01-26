// .querySelector is used to grab these divs and to put them into dif variables
const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// setDate() is used to change the time on the clock
function setDate() {
    // variable now grabs the current date - which also includes current time
    const now = new Date();



    // second part of clock
    // .getSeconds() is used to get current seconds
    const sec = now.getSeconds();
    // variable secDegrees uses sec above to help with determining where
    // the second hand should be on a clock (uses + 90 due to original rotation
    // having 90degs on it to make it point towards 12:00)
    const secDegrees = ((sec/60) * 360) + 90;
    // .style.transform rotates the secHand (div) to match up with how it would
    // it would look like on a regular clock
    secHand.style.transform = `rotate(${secDegrees}deg)`;



    // minute part of clock
    // .getMinutes() is used to get current seconds
    const mins = now.getMinutes();
    // variable minsDegree uses mins above to help with determining where
    // the minute hand should be on a clock (uses + 90 due to original rotation
    // having 90degs on it to make it point towards 12:00)
    const minsDegree = ((mins/60) * 360) + 90;
    // .style.transform rotates the minHand (div) to match up with how it would
    // it would look like on a regular clock
    minHand.style.transform = `rotate(${minsDegree}deg)`;



    // hour part of clock
    // .getHours() is used to get current seconds
    const hour = now.getHours();
    // variable hourDegrees uses hour above to help with determining where
    // the hour hand should be on a clock (uses + 90 due to original rotation
    // having 90degs on it to make it point towards 12:00)
    const hourDegrees = ((hour/12) * 360) + 90;
    // .style.transform rotates the hourHand (div) to match up with how it would
    // it would look like on a regular clock
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// setInterval() sets intervals to a second with casues setDate() to function
setInterval(setDate, 1000);