full_fio = prompt("Введите название файла");

function get_short_fio(full_fio) {
  let str = full_fio.split(' ');
  let short_fio = str[0] + ' ' + str[1].charAt(0) + '. ' + str[2].charAt(0) + '.';

  return short_fio;
}

alert(get_short_fio(full_fio));
