//Q1
const product = {name: 'Laptop',price: 50000,brand:'Dell'}
const { brand } = product;
console.log(brand)

//Q2
const item = { name: 'Mobile', price: 20000, phone: 'Samsung' }
const { phone : phone1, price } = item;
console.log(phone1,price)

//Q3
const colors = ['red','blue','green','yellow']
const [col1,col2] = colors
console.log(col1,col2)

//Q4
const number = [1,2,3]
const [,second,]= number
console.log(second)

//Q5
const digits = [2,4,6,8]
const [two, , , eight] = digits
console.log(two,eight)

//Q6
function multiply(a,b) {return [a*3,b*3]}
const [a, b] = multiply(2,3);
console.log(a,b)

//Q7
const person = {name : 'Rahim',city: 'Dhaka'}
const { name : name1, city, phone = 'N/A' } = person
console.log(name1, city, phone)

//Q8
const teacher = {name: 'Maria',profession: 'Teacher'}
const { name, profession: job } = teacher;
console.log(name, job)