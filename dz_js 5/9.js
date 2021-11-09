string = prompt("Введите слова требующие сортировки");

function get_order(string) {

return string.split(' ').sort().join(" ");

}

alert(get_order(string));
