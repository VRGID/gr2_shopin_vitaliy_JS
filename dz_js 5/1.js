let max = prompt('Введите максимальное число');
let min = prompt('Введите минимальное число');

max = +(max);
min = +(min);

function random(max, min) {
  if ( isNaN(min) || isNaN(max) ) {
    alert('Введенное значение не число');
    return null;
  }

  let result = Math.round(Math.random() * (max - min) + min);

return result;

}

let result = random(min,max)

if (result !== null) {
  alert(`Ваше число от ${min} до ${max}: ${result}`)
}
