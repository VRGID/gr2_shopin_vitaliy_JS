const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_day_diff(d1, d2) {
if (d1 instanceof Date && d2 instanceof Date) {
  let ms_day_dif = d1.getTime() - d2.getTime();
  let result = Math.trunc(ms_day_dif / MS_DAY);
  return result;
}
return null;
}

let d1 = new Date('2010-01-20')
let d2 = new Date('2010-01-15')

console.log(get_day_diff(d1, d2));
