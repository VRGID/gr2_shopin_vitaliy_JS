const COUNTER = 10;

let min = 0;
let max = 100;
let attemps = 0;

let result;
do {
  let n = min + (max - min) / 2;
  console.log(max, min,n);
  let answer = confirm(`Ваше число больше ${n}?`);
  attemps = attemps + 1;
  if (answer) {
    min = n;
  } else {
    max = n;
  }
  result = max - min < 1;
} while (!result && attemps < COUNTER);

let result2 = Math.round(min + (max - min) / 2);
alert(`Ваше число ${result2}`);
