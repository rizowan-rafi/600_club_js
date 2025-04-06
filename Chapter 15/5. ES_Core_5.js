//Q1
function greeting(message) {
    message()
}

function sayHello() {
    console.log('Hello World!')
}

greeting(sayHello)

// Q2
function Objectkeys(obj, callback) {
    callback(obj)
}

function objKey(obj) {
    console.log(Object.keys(obj))
}

Objectkeys({ name: 'John', age: 30 }, objKey)

//Q3
function numberProcessor(num, callback) {
    const n = num / 5;
    callback(n)
}
function showNumber(num) {
    console.log(num)
}

numberProcessor(100, showNumber)

// Q4
function bye(handleBye) {
    handleBye()
}

function sayGoodbye() {
    console.log('Goodbye!')
}

bye(sayGoodbye)