let search = prompt("Введите искомое значение", "");
let string = prompt("Введите строку", "");

function search_string(search, string) {

    if (string.indexOf(search) !== -1) {
        return true;
    } else {
        return false;
    }
}

alert(search_string(search, string));