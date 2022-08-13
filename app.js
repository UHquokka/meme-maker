const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext("2d");

/*사람 만들기*/
ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(400, 200, 15, 100);
ctx.fillRect(260, 200, 100, 200);

ctx.arc(300, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(270, 100, 10, Math.PI, 2 * Math.PI);
ctx.arc(310, 100, 10, Math.PI, 2 * Math.PI);
ctx.fill();
