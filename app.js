//캔버스
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
//드로잉 기능
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const modeBtn = document.getElementById("mode-btn");
const eraserBtn = document.getElementById("eraser-btn");
const lineWidth = document.getElementById("line-width");
//드로잉 - 미완성 기능
const hightLight = document.getElementById("height-light");
//기타 기능
const fontSizeInput = document.getElementById("font-size_input");
const fontStyle = document.getElementById("font-style_select");
const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const destroyBtn = document.getElementById("destroy-btn");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;
let isHightLight = false;


function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    isPainting = true;
}
function cancelPainting() {
    isPainting = false;
    ctx.beginPath();
}
function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

function onColorChangeAll(event) {
    const colorPick = event.target.value;
    ctx.lineWidth = colorPick;
    ctx.strokeStyle = colorPick;
    ctx.fillStyle = colorPick;
}

function onModeClick() {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "💧 Fill";
        if (isHightLight) {
            isHightLight = false;
        }
    }
    else {
        isFilling = true;
        isHightLight = false;
        modeBtn.innerText = "🖌 Draw";
    }
}

function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function onDestroyClick() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

}
function onEaraserClick() {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}
function onHightLightClick() {
    isHightLight = true;
    ctx.globalAlpha = 0.03;
    ctx.lineCap = "square";
}
function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}
function onDoubleClick(event) {
    const text = textInput.value;
    if (text !== "") {
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = "68px serif";
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore();
    }
}

function onSaveClick(event) {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDownload.png";
    a.click();
}


canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
//마우스가 캔버스 밖으로 나갔을 때 mouseup이 감지 안되는 것을 방지//
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onColorChangeAll);
color.addEventListener("change", onColorChangeAll);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
hightLight.addEventListener("click", onHightLightClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEaraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);