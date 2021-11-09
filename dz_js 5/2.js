let string = prompt('Введите слово');
let symbol = prompt('Введите символ');

let result = 0;

function count_symbol( symbol, string ) {

for (let i = 0; i <= count_symbol.length -1; i++) {
let element = count_symbol[i];
  if (element === symbol); {
  result++;
  }
}
  return result;
}

console.log(count_symbol( symbol, string ))
