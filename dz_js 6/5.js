function get_day(date) {
  let day_week = ['понедельник', 'вторник',
  'среда', 'четверг', 'пятнца','суббота', 'воскресенье'];

  return day_week[date.getDay()];
}

let date = new Date(1989, 03, 10);


console.log(get_day(date));
