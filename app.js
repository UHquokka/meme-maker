const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext("2d");

ctx.rect(50, 50, 50, 50);
ctx.rect(100, 100, 50, 50);
ctx.rect(150, 150, 50, 50);

ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.rect(200, 200, 50, 50);
ctx.rect(250, 250, 50, 50);
ctx.strokeStyle = "gold"
ctx.stroke();
