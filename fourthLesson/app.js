let titleProject = 'Оценка стоимости';
let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
let screenPrice = 20000;
let percentage = 50;
let fullPrice = 60000;
let resposive = true;

titleProject = prompt ('Название проекта?')
screensValue = prompt ('Какие типы экранов?')
resposive = prompt ('Нужен ли респонсивный сайт?')
//Не нашёл как булевое значение в промпте попросить
if (resposive == 'Да') {
    resposive = true
} else {
    resposive = false
}

let service1 = prompt ('Какой сервис нужен?')
let servicePrice1 = +prompt ('Сколько это будет стоить?')
let service2 = prompt ('Какой еще сервис тебе нужен?')
let servicePrice2 = +prompt ('Сколько будет стоить этот второй сервис?')
fullPrice = screenPrice + servicePrice1 + servicePrice2

let servicePercentPrice = Math.round(fullPrice * 0.9)

console.log (servicePercentPrice)

if (servicePercentPrice >= 50000) {
    alert ('Сделаем скидку 10%')
} else if (servicePercentPrice >= 20000) {
    alert ('Cделаем скидку 5%')
} else if (servicePercentPrice >= 0) {
    alert ('Скидка не предусмотрена')
} else {
    alert ('Что-то пошло не так')
}