const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext("2d");

/*집만들기*/
ctx.fillRect(150, 400, 100, 300);
ctx.fillRect(450, 400, 100, 300);

ctx.lineWidth = 2;
ctx.strokeStyle = "brown";
ctx.strokeRect(300, 500, 100, 200);

ctx.fillRect(150, 400, 400, 50);

ctx.moveTo(150, 400);
ctx.lineTo(350, 200);
ctx.lineTo(550, 400);
ctx.fillStyle = "green";
ctx.fill();