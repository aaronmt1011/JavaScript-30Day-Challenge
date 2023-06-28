// The drawing happens on a context, not the canvas itself
// getContext() creates a 2D plane ('2d') or a 3D plane ('3d') 
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');

// the width of the canvas is now equal to the size of the window page
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// .strokeStyle is used for the color
ctx.strokeStyle = '#BADA55';

// .lineJoin & .lineCap dicates the ending shape of the line (round, square, etc.)
// and how the lines will look when they interact with each other
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// .lineWidth changes width of the line
ctx.lineWidth = 0;

ctx.globalCompositeOperation = 'multiply';



// need isDrawing variable to be false to stop cursor from drawing when we don't
// want it to draw (stop clicking).
// lastX and lastY variable are going to be the starting points for the line and
// should reset after user stops drawing and starts a new drawing.
// hue variable is going to be used as a counter to get a rainbow design for the
// lines.
// direction variable will dictate if line becomes wider or smaller
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// uses event (cursor moving) to draw on context 
function draw(e) {
    if(!isDrawing) return;  // stops drawing when mouse isn't pressed down
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    // beginPath() starts the creation of the line path
    ctx.beginPath();

    // moveTo() is the starting point of the line
    // start from
    ctx.moveTo(lastX, lastY);

    // lineTo() tracks the movement of the cursor to draw line
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
    hue++;
    if(hue >= 360) {
        hue = 0;
    }
    
    // if statement below changes width of line depending on conditions
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    } 

    // if statements below actually change the width of the line based off of
    // whether the direction variable is true or not true
    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

// 4 addEventListener() are used to create drawing.
// 1st addEventListener() tracks if mouse is being clicked on and turns 
// isDrawing to true. Also updates the location of the line to a new area
// to not have one continuous line.

// 2nd addEventListener() creates drawing while mouse is moving
// 3rd addEventListener() tracks if mouse is not being clicked on and turns 
// isDrawing to false
// 4th addEventListener() tracks if mouse is moved off of canvas area and turns 
// isDrawing to false

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);