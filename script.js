function drawcurve1()
{
  const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//let cw = canvas.width = 536;
//let ch = canvas.height = 100;
   
ctx.beginPath();
ctx.moveTo(0,28)
ctx.bezierCurveTo(0,28,31,7,70,8);
ctx.bezierCurveTo(109,9,313,99,425,90);
ctx.bezierCurveTo(516,82.5,536,55,536,55);
ctx.stroke();
}

function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);


    
  }
}
// starting point
draw();
drawcurve1();
