// primitive non-primitive and dynamic types language
//Q1
let num = 15
let copy = num
copy = 25
console.log(num,copy) // different number

//Q2
const arr = [1,2,3]
const arr1 = arr
arr1.push(88)
console.log(arr, arr1) // same values

//Q3
const language = {name: 'JS',age:30}
const newVersion = language
newVersion.location = 'Browser'
console.log(language, newVersion) // same values




