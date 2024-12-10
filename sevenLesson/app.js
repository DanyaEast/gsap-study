let fist
let min = 0
let max = 100
let triesAmount = 3
let tryNum = [0,0,0]

let checkIsNumber = function (number) {
if (Number.isFinite(Number.parseFloat(number))) {
return Number.parseFloat(number)
} else if (number == null) {return null} else {return false}
}

function randomGenerate () {
return Math.floor(Math.random() * (max - min) + min)
}


const gameBotFunction = function () {
    let mysteryNumber = randomGenerate()

    for (let i = 0; i < triesAmount; i++) {
        tryNum[i] =  checkIsNumber(prompt(`Попытка: ${i + 1}, Введите число от 0 до 100`))
        if (tryNum[i] == null) {return alert("Вы завершили игру")}
        while (tryNum[i] == false) {
            tryNum[i] =  checkIsNumber(prompt("Число введено некорректно"))
            if (tryNum[i] == null) {return alert("Вы завершили игру")}
        }
        if (tryNum[i] == mysteryNumber) {
            let cont = confirm("Отлично! Вы победили! Хотите начать заново?")
            if (cont) {return gameBotFunction()
            } else {return alert("Вы завершили игру")}
        } 
        
    }
    let cont = confirm("Вы проиграли :( , ваши попытки " + tryNum[0] + ", " + tryNum[1] + ", " + tryNum[2] + " оказались не верны. Правильный ответ " + mysteryNumber + ". Хотите попробовать ещё раз?")
    if (cont) {return gameBotFunction()
    } else {return alert("Вы завершили игру")}
}

gameBotFunction()