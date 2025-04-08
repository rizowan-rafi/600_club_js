//Q1
let a = 59
console.log(++a) // 60 
console.log(a++) // 60
console.log(a) // 61

//Q2
let oranges = 100
oranges/=15
console.log(oranges)

//Q3
let mango = 20
mango &&= 10
console.log(mango) // 10 as if mango is truthy then mango&&= 10 will show the value next to that which is 10

//Q4
let bananas = 50
bananas*=4

//Q5
let graphs = 19
graphs ||= 10 // it will show 19 as ||= show variable value if the variable's value is truthy else show the other value
console.log(graphs)

//Q6
let apples = 50;
apples -= 10 

//Q7
let price = undefined
price ||= 90
console.log(price) // 90 as price's value is falsy

//Q8
let tomato = 0
tomato &&= 5 // the output will be 0.&&= shows variable's value if the value is falsy and here tomato's value is 0 which is falsy

//Q9
let apples1 = 15
apples %= 6 // the output will be 4 as apples%=6 means apples = apples %6 or 15 % 6 = 4.
console.log(apples)