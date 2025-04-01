//Q1
const product = {name: 'Laptop',price:50000,brand:'Dell'}
const {name,...products} = product
console.log(products)

//Q2
const project = {id: 101,title:'Web App',budget:3000,client:'Tech Corp'}

const {title,...projects} = project

console.log(projects)

//Q3
const programmer = {name:'Sophia',language: 'Javascript',experience: 5,specialty:'Frontend',tools: 'React'}
const { language, specialty, ...details } = programmer
console.log(details)

//Q4
const arr = [10,20,3,30,300,3000]
const [, , ...arr1] = arr

console.log(arr1)

//Q5
function sum(a, b, ...c) {
    let sum = 0
    for (i of c) {
        sum += i;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5))

//Q6
function mean(...a) {
    let sum = 0
    for (let i of a) {
        sum += i;
    }
    return sum / a.length;
}

console.log(mean(1, 2, 3, 4, 5))