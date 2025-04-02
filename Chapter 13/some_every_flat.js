//Q1
const numbers = [ 1,2,50,40,60,77,888,34,12,45]
const isHundred = numbers.some(number=>number>100)
console.log(isHundred)

//Q2
const numbers1 = [1, 2, 50, 40, 60, 77, 888, 34, 12, 45]
// const numbers1 = [5,10,15]
const isDivisibleByFive = numbers1.every(number=>number%5===0)
console.log(isDivisibleByFive)

//Q3
const words = ['hey','hello','world','yes','bye']
const isHello = words.some(word => word === 'hello')
console.log(isHello)

//Q4
const ages = [23,45,56,67,12,34,78]
const isEighteen = ages.every(age => age>18)
console.log(isEighteen)

