let points = {
    "Вася": 200,
    "Петя": 300,
    "Даша": 250,
    "Андрей": 150,
    "Сергей": 450,
};

// let result = points.split(',').join('');

let sum = Object.values(points).reduce((a, b) => a + b);

let max = Object.entries(points).sort().slice(-2);
let min = Object.entries(points).sort().reverse().slice(-2);



alert(`Максимальная оценка: ${max} Минимальная оценка: ${min} Сумма ${sum}`);
