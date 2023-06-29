// checkboxes variable is used to gather all the checkbox into one nodelist
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');


// lastCheck variable is used to keep track of the last clicked checkbox as the
// the starting point for the group select
let lastCheck;


// handleCheck() function does multiple things:
//      - Deterimes if user is checking vs unchecking, will only work if checking 
//      - Uses if statement to see if shift was pressed down
//      - if shift is pressed down, the last checked item will be used as the
//          starting point and the next pressed item will be used as the final
//          point for the group select. The items in-between will cause the inBetween
//          variable to become true which will check the checkboxes.
//      - if shift is not pressed down then group selector will not work.
function handleCheck(e) {
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            // the if statement below checks if the conditions for the "in-between"
            // checkboxes are fulfilled and causes inBetween variable to become
            // true which starts the if statement below. When the if statement comes
            // across the lastCheck checkbox, it'll turn inBetween to false, wihch
            // stops the next checkboxes from being checked.
            if(checkbox === this || checkbox === lastCheck) {
                inBetween = !inBetween; 
            }

            // the if statement below controls the checking of the "in-between" 
            // checkboxes
            if(inBetween) {
                checkbox.checked = true;
            };
        });
    }
    lastCheck = this;
}


// addEventListener() is used to see if any of the checkboxes have been clicked
checkboxes.forEach(checkbox => checkbox.addEventListener(
    'click', handleCheck));