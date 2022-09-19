const name = 'Ruslan'
const age = 20
const output1 = 'Hello! My name ' + name + 'and I\'m ' + age + ' years old.'
const output2 = `Hello! My name ${name} and Im ${age} years old.` // ещё один способ конкатенации строки с переменными, так же можно прописывать функции
console.log(output1)
console.log(output2)

const output3  = `
    <div>This is div</div>
    <p> This is p</p>
`
console.log(output3) // Можно в этих кавычка передавать не экранируя

console.log(name.toUpperCase()) // Делает все символы в верхнем регистре
console.log(name.toLowerCase()) // // Делает все символы в нижнем регистре
console.log(name.indexOf('lan')) // ищет в строке символы в заданном порядке, счёт начинается с 0. Если на выводе -1, то совпадений не нашлось
console.log(name.startsWith('Rus')) // ищет строки начинающиеся с заданного порядка символа. Возвращает true или false. Регистр учитывается
console.log(name.toLowerCase().startsWith('Rus')) // ищет строки начинающиеся с заданного порядка символа. Возвращает true или false. Регистр не учитывается
console.log(name.endsWith('lan')) // ищет строки заканчивающиеся на заданный порядок символов. Возвращает true или false. Регистр учитывается
console.log(name.repeat(3)) // Возвращает строку заданное количество раз
const string = '         Space    Namespace     '
console.log(string)
console.log(string.trim())  // Удаляет все пробелы слева и справа от строки
console.log(string.trimLeft()) // Удаляет все пробелы слева
console.log(string.trimRight()) // Удаляет все пробелы справа

function logPerson1(s, name, age) {
    console.log(s, name, age)
    return 'Info about person'
}

// Все действия ниже необходимы, чтобы можно было добавить условия в функциях, гык, пока не разобрался до конца

// outputfunc1 преобразует параметры в массив
const outputfunc1 = logPerson1`Name: ${name} , Age: ${age}`
console.log(outputfunc1)

// outputfunc2 преобразует ответ в массив, но выводит и массив и строку
function logPerson2(s, name, age) {
    if (age < 0) {
    age = 'Ещё не родился'
    }
    console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const outputfunc2 = logPerson2`Name: ${name}, Age: ${age}`
console.log(outputfunc2)