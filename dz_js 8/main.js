//-----------------------------Голубые--------------------------------
function blocks(squareBlue) {
let square = document.createElement('div');
square.style.height = '50px';
square.style.width = '50px';
square.style.margin = '10px';
square.style.background = '#00bfff';
return square;
}
// -----------------------------Зеленые-----------------------------
function blocks2(squareGreen) {
  for (let i = 0; i < squareGreen; i++) {
let square2 = document.querySelectorAll('div')[i];
square2.style.height = '100px';
square2.style.width = '100px';
square2.style.margin = '10px';
square2.style.background = 'green';
}
}
// ---------------------------Красный и желтый----------------------
function blocks3(squareYellowAndRed) {
  for (let i = 0; i < squareYellowAndRed; i++) {
let square3 = document.querySelectorAll('div')[i];
square3.style.height = '100px';
square3.style.width = '100px';
square3.style.margin = '10px';
if (i % 3 - 2 === 0) {
square3.style.background = '#FF0000';
} else {
square3.style.background = '#FFFF00';
}
}
}
// ----------------------------Вывод--------------------------------

for (let i = 0; i < 10; i++) {
document.body.appendChild(blocks());
}
// ---------------------------Удаление------------------------------
function removeBlock() {
    let dalete = document.querySelectorAll('div');
    for (let i = 0; i < dalete.length; i++) {
        dalete[i].remove();
    }
}
// ---------------------------Таймер-------------------------------
function background() {
for (let i = 0; i < 1; i++) {
document.body.style.background = 'Black';
}
}
// ---------------------------Фон----------------------------------

setTimeout(blocks, 3000, 10);
setTimeout(blocks2, 6000, 10);
setTimeout(blocks3, 9000, 10);
setTimeout(removeBlock, 12000, 10);
setTimeout(background, 15000, 10);
