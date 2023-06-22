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

// need isDrawing variable to be false to stop cursor from drawing when we don't
// want it to draw (stop clicking)
let isDrawing = false;

// lastX and lastY are going tb be the starting points for the line
// Should reset after user stops drawing and starts a new drawing.
let lastX = 0;
let lastY = 0;


// uses event (cursor moving) to draw on context 
function draw(e) {
    if(!isDrawing) return;  // stops drawing when mouse isn't pressed down
    console.log(e);
}

// 4 addEventListener() are used to create drawing.
// 1st addEventListener() creates drawing while mouse is moving
// 2nd addEventListener() tracks if mouse is being clicked on and turns 
// isDrawing to true
// 3rd addEventListener() tracks if mouse is not being clicked on and turns 
// isDrawing to false
// 4th addEventListener() tracks if mouse is moved off of canvas area and turns 
// isDrawing to false
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);