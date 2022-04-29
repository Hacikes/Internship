//const v1 = 'MUN'
//let num = 23 // var лучше не испольовать
//console.log(v1)
//console.log(num)
//console.log(num + ' ' + v1 + ' ' + 'Цифры') //Можно складывать строки
//console.log(++num) // И хреначить таким образом инкремент
//console.log(num++) // --
//console.log(num)
//console.log(--num)
// >= <= < > == ===
// Типы данных
let num = 23
console.log(typeof num)  // Выводит тип данных num

//Условные операторы
// Для сравнения лучше всего использовать ===
// === Проверяет значение по типу данных и по значению
// == Проверяет значение подстраивая тип данных автоматом
// Нужно в случае сравнения разных типов данных
if (num === 23) {
    console.log('hello') // else не ялвляется обязательным
} else {
    console.log('Hello')
}
const num1 = 1
const num2 = '1'
console.log(num1 == num2)
console.log(num1 === num2)

// if можно писать в одну строчку
const isReady = true
isReady ? console.log('hello') : console.log('Hello')

// И && ИЛИ || НЕ !

// Функции
function f1(year) {
    return 2021 - year
}
const myAge = f1(2000)

console.log(myAge)
function f2(name, year){
    const age = f1(year)
    console.log( name + age)
}
f2('Ruslan ', 2000)

//Массивы
const cars = ['Mazda', 'Audi', 'BMW'] // Лучше объявлять массив как в этой строке
const cars2 = new Array('Mazda', 'Audi', 'BMW') // Чем в этой
console.log(cars)
console.log(cars2)
console.log(cars[0]) // Обращение к 0 элементу массива
cars2[0] = 'Porsche' // Замена 0 элемента массива
console.log(cars2)
cars2[cars2.length] = 'Mazda ' //добавляется в конец массива ещё один элемент 'Mazda'
console.log(cars2)

//Циклы
const cars3 = ['Mazda', 'Audi', 'BMW']
// Выводит машины в цикле
//for (let i = 0; i < cars3.length; i++) {
//    const car = cars3[i]
//    console.log(car)
//}
//другой вариант этого цикла в одну строчку
for (let car of cars3) {
    console.log(car)
}

//Объекты
const person = {
    firstName: 'Ruslan',
    lastName: 'P.',
    year: 2000,
    languages: ['Ru', 'En']

}
console.log(person) // Можно выводить объект так
console.log(person.firstName) // Можно выводить значение по ключу в объекте
console.log(person['lastName']) // Или так
const key = 'languages' // Можно записать ключ:значение в переменную
console.log(person[key]) // И вызвать её
person.qa = true // Можно добавить ключ:значение
console.log(person) // И получим