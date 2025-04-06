// Date
//Q1
const date = new Date()
console.log(date)

//Q2
const date1 = new Date(2035,6,15,14,45,30)
console.log(date1)

//Q3
const date2 = new Date()
console.log(date2.getFullYear())

//Q4
const date3 = new Date()
date3.setFullYear(2040)
console.log(date3)

//Q5
const date4 = new Date("2029-02-16").getDay()
console.log(date4) // week day
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(dayNames[date4]) // day name
