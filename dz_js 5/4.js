str = prompt("Введите строку");


function up_first(str) {
  if (!str) return str;

return str[0].toUpperCase() + str.slice(1). toLowerCase () ;

}

alert( up_first(str) );
