const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// .strokeStyle is used for the color
ctx.strokeStyle = '#BADA55';

// .lineJoin & .lineCap
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;