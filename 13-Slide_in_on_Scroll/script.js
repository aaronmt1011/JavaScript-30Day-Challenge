// sliderImgs is all the images
const sliderImgs = document.querySelectorAll('.images');


// debounce() runs the function, with a 20 ms pause before it can run again.
// This is due to the amount of times the function will be called when the user
// scrolls through the page (w/o debounce(), it will activate 30-50 times by
// the time the user scrolls down the page).
function debounce(func, wait = 20, immediate = true) {
  var timeout;

  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}


// checkSlide(e) checks if user moved page up or down
function checkSlide(e) {
  sliderImgs.forEach(slideImg => {

    // slideInAt var is going to give out the pixels of the images when user
    // scrolls over halfway through page.
    // window.scrollY is used to give out the pixes of how far the page has
    // been scrolled down from top of browser.
    // window.innerHeight gives out the pixels from the bottom of the browser.
    // slideImg.height is used to get image measurements and then to minus it
    // from the (window.scrollY + window.innerHeight) to be able to get the
    // image to slide in from the bottom.
    // The end measurement is then divided by 2 to get to be able to get the
    // image to slide in at the middle.
    const imgSlide = (window.scrollY + window.innerHeight) - slideImg.height / 2;
    
    // imgBot is used to get slide image out of view once it gets towards top
    // of the windows pages.
    // slideImg.offsetTop tells us how far down the image is from the top of 
    // the windows page.
    // slideImg.height gives the image height measurements due to 
    // slideImg.offsetTop only giving out the measurement from top of windows
    // page to top of image. Does not account for the image size itself.
    const imgBot = slideImg.offsetTop + slideImg.height;

    // Checks to see if the imgSlide is bigger than slideImg.offsetTop.
    const isHalfShown = imgSlide > slideImg.offsetTop;

    // Checks to see if image is scrolled past.
    const isNotScrolledPast = window.scrollY < imgBot;

    // If image is half shown and user has not scrolled past image then the 
    // .active class is added to the images. If false then images will fade
    // away from the windows page so the effect can be activated again once
    // user scrolls up.
    if(isHalfShown && isNotScrolledPast) {
      slideImg.classList.add('active');
    } else { 
      slideImg.classList.remove('active');
    }
  });
}


// debounce() wraps around checkSlide() to make sure the checkSlide() doesn't
// keep running while user scrolls
window.addEventListener('scroll', debounce(checkSlide));