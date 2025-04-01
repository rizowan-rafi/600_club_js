//Q1
const technologies = ['condition','array','loop']
const technologies1 =['variable',...technologies]
console.log(technologies1)

//Q2
const fruits = ['Apple','Banana','Mango']
const myFruits =[...fruits,'papaya','orange']
console.log(myFruits)

//Q3
const frontEnd = ['JavaScript']
const backEnd = ['Node.js']
const database = ['MongoDB']
const webDev =[...frontEnd,...backEnd,...database]
console.log(webDev)

//Q4
const website = {name:'MySite',type:'e-commerce',status:'active'}
const newSite = { ...website, theme: 'dark' }

console.log(newSite)

//Q5
const young = {name:'Arif',age:30,country:'B Baria'}
const {country,...young1} = young
console.log(young1)

//Q6
const car = {make: 'Toyota',model:'Corolla',year:2020}
const carModel = {...car,year:2032}
console.log(carModel)
