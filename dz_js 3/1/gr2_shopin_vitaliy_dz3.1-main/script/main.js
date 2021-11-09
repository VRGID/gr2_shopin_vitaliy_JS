let n = prompt('Введите максимальное число', '0');
let n2 = prompt('Введите минимальное число', '0');

n = Number(n);
n2 = Number(n2);


let s = n - n2; // Отрезок

let result = 0;
for (let i = s; i < n2; i += 6) {
  console.log(i);
result = result + 1;
}


alert(`
  Отрезок из введенных чисел ${s}
  Результат ${result}
  `);
