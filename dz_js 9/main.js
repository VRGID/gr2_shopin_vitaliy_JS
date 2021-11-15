//-----------------------------Голубые--------------------------------
function blocks(squareBlue) {
let square = document.createElement('div');
square.style.height = '70px';
square.style.width = '70px';
square.style.margin = '10px';
square.style.background = '#00bfff';
return square;
}
// -----------------------------Зеленые-----------------------------
function blocks2(squareGreen) {
  for (let i = 0; i < squareGreen; i++) {
let square2 = document.querySelectorAll('div')[i];
square2.style.height = '10px';
square2.style.width = '10px';
square2.style.margin = '10px';
square2.style.background = '#6f00cc';
}
}
// ---------------------------Квадрат и Треиугольник----------------------
function blocks3(squareRedAndTringle) {
  for (let i = 0; i < squareRedAndTringle; i++) {
let square3 = document.querySelectorAll('div')[i];
if (i % 15 === 0) {
square3.style.background = 'linear-gradient(to right bottom, transparent 48%,#78866b 50%) left / 50.25% 100% no-repeat,linear-gradient(to left bottom,transparent 48%, #78866b 50%) right / 50.25% 100% no-repeat';
square3.style.fontSize = '5px';
} else {
if ((i + 1) % 3 === 0)
square3.style.background = '#FF0000';
if (i < 5 + 1)
square3.style.background = 'yellow';
}
}
}
// -----------------------------Удаляем Красные-----------------------------
function removeBlock() {
    let dalete = document.querySelectorAll('div');
    for (let i = 0; i < dalete.length; i++) {
      if ((i + 1) % 3 === 0) {
        dalete[i].remove();}
    }
}
// ----------------------------Вывод--------------------------------
for (let i = 0; i < 1000; i++) {
document.body.appendChild(blocks());
}
// ---------------------------Таймер--------------------------------

setTimeout(blocks, 2000, 1000);
setTimeout(blocks2, 4000, 1000);
setTimeout(blocks3, 6000, 1000);
setTimeout(removeBlock, 8000, 1000);
