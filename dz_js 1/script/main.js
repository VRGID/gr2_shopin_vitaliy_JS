const COUNTRY = 'Украина'
const DATE = '03.10.1989';
const MALE = 'Мужчина';
const NAME = 'Виталий';
let  myHeight = '169 см';
let  myWeight = '60 кг';
const HAIR = 'Брюнет';
let myEyes = 'Зеленые (цвет может меняться)';
let myAge = 32;
let myStatus = 'Холост';
let myHobby = 'видеомонтаж, аудиокниги, web-разработка, cпорт, готовка, ничего не деланье и многое другое. ';
let myQuote = '«Кто владеет информацией, тот владеет миром»';
const LINE_BREAK = "\n";
const SMILE = " 😁";

console.log(
    'Страна: ', COUNTRY + LINE_BREAK +
    'Дата рождения: ', DATE + LINE_BREAK + LINE_BREAK +
    'Пол: ', MALE + LINE_BREAK +
    'Имя: ', NAME + LINE_BREAK +
    'Вес: ', myWeight + LINE_BREAK +
    'Рост: ', myHeight + LINE_BREAK +
    'Цвет глаз: ', myEyes + LINE_BREAK +
    'Цвет волос: ', HAIR + LINE_BREAK +
    'Возраст: ', myAge + LINE_BREAK + LINE_BREAK +
    'Семейное положение: ', myStatus + LINE_BREAK + LINE_BREAK +
    'Любимая цитата: ', myQuote + LINE_BREAK + LINE_BREAK +
    'Хобби: ', myHobby
);

window.alert(
    'Страна: ' + COUNTRY + LINE_BREAK +
    'Дата рождения: ' + DATE + LINE_BREAK + LINE_BREAK +
    'Пол: ' + MALE + LINE_BREAK +
    'Имя: ' + NAME + LINE_BREAK +
    'Возраст: ' + myAge + LINE_BREAK + LINE_BREAK +
    'Любимая цитата: ' + myQuote + LINE_BREAK + LINE_BREAK +
    'Хобби: ' + myHobby
);
document.write(
    '<b>Страна:</b> ', COUNTRY + '<br>' +
    '<b>Дата рождения:</b> ', DATE + '<br>' +'<br>'+
    '<b>Пол:</b> ', MALE + '<br>' +
    '<b>Имя:</b> ', NAME + '<br>' +
    '<b>Вес:</b> ', myWeight + '<br>' +
    '<b>Рост:</b> ', myHeight + '<br>' +
    '<b>Цвет глаз:</b> ', myEyes + '<br>' +
    '<b>Цвет волос:</b> ', HAIR + '<br>' +
    '<b>Возраст:</b> ', myAge + '<br>' + '<br>' +
    '<b>Семейное положение:</b> ', myStatus + '<br>' +'<br>'+
    '<b>Любимая цитата:</b> ' + myQuote + SMILE + '<br>' + '<br>' +
    '<b>Хобби:</b> ', myHobby
);

/*
const user = {
    name: 'Виталий',
    date: '03.10.1989'
}
console.log(user);
*/