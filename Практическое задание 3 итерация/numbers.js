const num = 42 // int
const mun = 42.42 //float
const pow = 10e3
console.log(Number.MAX_SAFE_INTEGER) // MAX возможное число типа number
console.log(Number.MIN_SAFE_INTEGER) // MIN возможное число типа number
console.log(Number.MAX_VALUE) // MAX возможное число типа number
console.log(Number.MIN_VALUE) // MIN возможное число типа number
console.log('2/0 ',2/0) // бесконечность
console.log(Number.NaN) // Not A Number
console.log(typeof NaN) // NaN - числовой тип данных
console.log(Number.isNaN(num)) // проверка того, что num не NaN
console.log(Number.isNaN(17)) // проверка того, что 17 не NaN
console.log(Number.isFinite(42)) // проверка того, что num не бесконечно

const stingInt = '42'
const stringFloat = '42.42'
console.log(stingInt + 2) // при сложении строки с int получится строка
console.log(stringFloat + 2) // при сложении строки с int получится строка
console.log(Number.parseInt(stingInt) + 2) // при сложении строки с числом получится число кек
console.log(Number.parseFloat(stringFloat) + 2) // при сложении строки с числом получится число кек, но с типом Float
console.log(+stringFloat + 2) // упрощённый вариант сложения строки с числом float
console.log(+stingInt + 2) // упрощённый вариант сложения строки с числом int
console.log(0.4 + 0.6) // получится 0.600000000000001 -_-
console.log((0.4 + 0.6).toFixed(3)) // 3 знака после запятой, но мы получаем строку
console.log(+(0.4 + 0.6).toFixed(3)) //         \
//                                               |тоже самое что и выше, но получаем число parseFloat или + получаем int
console.log(parseFloat(0.4 + 0.6).toFixed(3))// /

//BigInt
console.log(typeof 24234234234234234234n)




