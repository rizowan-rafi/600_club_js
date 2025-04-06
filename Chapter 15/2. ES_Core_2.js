// null and undefined
//Q1
let s;
console.log(s)

//Q2
function sum(a, b) { 
    const sum = a + b;
}

console.log(sum(10, 20))

//Q3
const arr = [10,20,30,40,50]
delete arr[2]
console.log(arr[2])

//Q4
function sum1(a, b, c) { 
    sum = a + b + c;
    console.log(a, b, c, sum);
}

sum1(10, 20)

//Q5
const student = {name:'serious sajib',roll:1, marks: 99}
console.log(student.marks) // we will get 99.as marks: 99 is a property of student object.
