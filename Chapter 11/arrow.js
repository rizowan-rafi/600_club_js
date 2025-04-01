//Q1
const firstIndex = arr => arr[0]
console.log(firstIndex([111,2,3]))

//Q2
const multipleOfThree = (a, b, c) => a * b * c;

console.log(multipleOfThree(3, 4, 5))

//Q3
const unknown = () => 'unknown';

console.log(unknown())

//Q4
const money = m => m.money / 5;

console.log(money({ name: 'rafi', money: 500 }))

//Q5
const sumOfFirstLast = arr => arr[0] + arr[arr.length - 1];

console.log(sumOfFirstLast([1, 2, 3, 4, 5]))

//Q6'
const sum = (a = 10, b = 5) => a + b;

console.log(sum(20, 15))