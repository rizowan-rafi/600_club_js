// set and map
//Q1
const s1 = new Set([1,2,2,3,4,4,5])
console.log(s1)

//Q2
const s2 = new Set([1,2,3,4,5])
s2.add(10)
s2.add(20)
s2.add(10)
s2.add(30)
console.log(s2)

//Q3
const s3 = new Set([10,20,30])
s3.delete(10)
console.log(s3)

//Q4
const s4 = new Set([1,2,4,5,2,1,5,5])
const arr = [...s4]
console.log(arr)

