//Q1
let myMoney = 50
let myFrinedMoney = '50'
console.log(myMoney == myFrinedMoney)
console.log(myMoney === myFrinedMoney)

//Q2
// as 'Javascript' and "JavaScript" both represent strings and the word is same. so == and === show true
console.log("Javascript" == 'Javascript')
console.log("Javascript" === 'Javascript')

//Q3
// the output is true as == only checks the value not the types. here 25 and '25' is same value
console.log(25 == '25')

// the output is false as === checks the value as well as the types. here 25 and '25' is same value but they are in different types
console.log(25 === '25')

//Q4
console.log("apple" == "apple") // true 
console.log("apple" === "apple") // true

//Q5
console.log('test' == "TEST") // false
console.log('test' === "TEST") //false

// Q6
let variableX = 15
let variableY = '20'
console.log(variableX!=variableY) // true
console.log(variableX !== variableY) // true

//Q7
let variableA = 'hello'
let variableB = 'Hello'
console.log(variableA == variableB) // false
console.log(variableA === variableB) //false
