let titleProject = 'ТРЕТИЙ ПРОЕКТ';
let screenPrice = 20000;
let fullPrice = 60000;
let servicePercentPrice
let servicePrice1 = 50000
let servicePrice2 = 20000
let allServicePrices

let getAllServicePrices = function() {
    return servicePrice1 + servicePrice2
}

function getFullPrice() {
    return allServicePrices + screenPrice
}

function getTitle() {
    let first = titleProject[0].toUpperCase()
    let last = titleProject.toLowerCase()
    titleProject = first + last.slice(1)
}

function getServicePercentPrices() {
    return Math.round(fullPrice * 0.9)
}

function getRollbackMessage() {
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

allServicePrices = getAllServicePrices()
console.log('Стоимость всех услуг:', allServicePrices)

fullPrice = getFullPrice()
console.log('Стоимость всего проекта:', fullPrice)

getTitle()
console.log('Название проекта:', titleProject)

servicePercentPrice = getServicePercentPrices()
console.log('Стоимость проекта с учётом скидки подрядчику:', servicePercentPrice)

getRollbackMessage()

