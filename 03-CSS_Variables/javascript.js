// .querySelectorAll() gets all of the inputs from div class controls and
// puts them into inputs variable
const inputs = document.querySelectorAll('.controls input');



function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// below checks if sliders were moved and then starts handleUpdate() function
// .forEach goes through each of nodes on the inputs nodelist while the 
// .addEventListener() is used to see if the sliders have changed for any of
// nodes on the inputs nodelist and changes them after slider stops.
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// below .forEach is same as above. The .addEventListener() below is used to
// start handleUpdate() function anytime the slider is moved in general
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

