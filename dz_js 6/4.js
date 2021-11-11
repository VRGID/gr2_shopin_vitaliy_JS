const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;
const MS_WEEK = MS_DAY * 7;

let today = new Date();

let year = today.getFullYear();

let date1 = new Date('`${year}`,11,31');
let date2 = new Date('`${year}`,10,09');
let result = date1 - date2;
console.log(`${result / MS_DAY} дня до нового года`);
