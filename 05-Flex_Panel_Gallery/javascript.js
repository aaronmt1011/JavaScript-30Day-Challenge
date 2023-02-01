// Var panels is all references to .panel class inside and puts them into a nodelist
const panels = document.querySelectorAll('.panel');

// toggleOpen() is used to attach class open to the modules when clicked
function toggleOpen() {
    this.classList.toggle('open');
}

// toggleActive() is used to toggle .open-active class on clicked img panel
// e is the clicked panel that has been passed by .addEventListener()
function toggleActive(e) {
    console.log(e);

    // if below to see if the class includes flex in propertyName and toggles 
    // open-active, if true
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

// .forEach goes through each of the panels and checks to see if clicked.
// If clicked, it will run the toggleOpen() function
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// .forEach goes through each of the panels and checks to see if they have
// transitioned through the transitioned. 'transitionend' is used to see the
// if class has gone through transition then runs toggleActive() function.
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));