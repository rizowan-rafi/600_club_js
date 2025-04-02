//Q1
const numbers = [5,10,15,20,25]
const sum = numbers.reduce((acc,sum)=>acc+sum,0)
console.log(sum)

//Q2
const products = [{ name: 'shampoo', price: 100 }, { name: 'soap', price: 50 }, { name: 'toothpaste', price: 75 }]
const totalPrice = products.reduce((acc,sum)=>acc+sum.price,0)
console.log(totalPrice)

//Q3
const products1 = [{ name: 'Pen', price: 5 }, { name: 'Book', price: 50 }, { name: 'Bag', price: 100 }]
const totalPrice1 = products1.reduce((acc,sum)=>acc+sum.price,0)
console.log(totalPrice1)

//Q4

const numbers1 = [1,2,3,4,5]
const multiple = numbers1.reduce((acc,sum)=>acc*sum,1)
console.log(multiple)

//Q5
const numbers2 = [1000,20,300,40,50]
const a = numbers2.reduce((max, sum) => max < sum ? sum : max, numbers2[0])
console.log(a)

//Q6
const numbers3 = [100, 200, 300, 400]
const sum2 = numbers3.reduce((acc, sum) =>acc+sum, 50)
console.log(sum2)
