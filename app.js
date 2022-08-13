const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext("2d");

ctx.rect(50, 50, 50, 50);
ctx.stroke();