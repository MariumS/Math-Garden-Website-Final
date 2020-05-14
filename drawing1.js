
const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#BCFF00';
const LINE_WIDTH = 5;

let lastX = 0;
let lastY = 0;

var canvas;
var ctx;



function prepareCanvas(){
  console.log('Preparing Canvas');

  const canvas = document.querySelector('#draw');
 // could be 3d, if you want to make a video game
 const ctx = canvas.getContext('2d');
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
ctx.strokeStyle = LINE_COLOR;
ctx.lineWidth = LINE_WIDTH;
  //canvas.width = window.innerWidth;
//  canvas.height = window.innerHeight;

  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = LINE_WIDTH;
  ctx.strokeStyle = LINE_COLOR;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e) {
    // stop the function if they are not mouse down
    if(!isDrawing) return;
    //listen for mouse move event
    //console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    console.log('click');

  });


  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false), console.log('mouseup');
  canvas.addEventListener('mouseout', () => isDrawing = false, console.log('mouseout'))


}

function clearCanvas()
{
  const canvas = document.querySelector('#draw');
 // could be 3d, if you want to make a video game
 const ctx = canvas.getContext('2d');
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
}
