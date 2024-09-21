let titleProject
let screenPrice = 20000
let allServicePrices = 0
let fullPrice
let servicePercentPrice
let services = {
    первый: {
        name: null,
        price: null
    },
    второй: {
        name: null,
        price: null
    }
}
function getFullPrice() {
    return allServicePrices + screenPrice
}

function getServicePercentPrices() {
    return Math.round(fullPrice * 0.9)
}

function getTitle() {
    let title = prompt('Введите название проекта')
    title = title.trimStart()

    if (title.length > 0) {
        let first = title[0].toUpperCase()
        let last = title.slice(1).toLowerCase()
        return first + last
    }
}

function getRollbackMessage() {
    console.log('Стоимость всего проекта:', fullPrice)
    console.log('Название проекта:', titleProject)
    console.log('Стоимость проекта с учётом скидки подрядчику:', servicePercentPrice)

    if (servicePercentPrice >= 50000) {
        console.log ('Ваша скидка составит 10%')
    } else if (servicePercentPrice >= 20000) {
        console.log ('Ваша скидка составит 5%')
    } else if (servicePercentPrice >= 0) {
        console.log ('Ваша скидка составит 0%')
    } else {
        console.log ('Что-то пошло не так')
    }
}

let checkIsNumber = function (number) {
    return Number.isFinite(Number.parseFloat(number))
}

let getPrice = function(price)
{
    while (price !== null && !checkIsNumber(price)) {
        price = prompt('Введите цену за услугу')
    }

    return Number.parseFloat(price)
}

let servicesFilling = function() {
for (let key in services) {
    services[key].name = prompt(`Какой ${key} сервис нужен?`);
    services[key].price = getPrice();
    allServicePrices += services[key].price
}
}

let askAndCalculate = function() {
    //Ask
    titleProject = getTitle()
    servicesFilling()
    
    //Calculate
    fullPrice = getFullPrice()
    servicePercentPrice = getServicePercentPrices()
}

askAndCalculate()
getRollbackMessage()