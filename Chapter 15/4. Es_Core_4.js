// == vs ===
//Q1
if(true == 1)
    console.log('same')
else
    console.log('different')

//Q2
const o1 = {}
const o2 = {}
console.log(o1 === o2) // no they are not same.as the reference/ memory location is different.in non-primitive types reference / memory location is compared not the values.

//Q3
const array = [1,2,3]
const array2 = array
console.log(array === array2) // yes they are same

//Q4
function isEqual(a, b) { 
    return a == b;
}

console.log(isEqual(10, true)) 

//Q5
console.log(''==false) //true

//Q6
console.log(null === undefined) //false

//Q7
console.log(1 == '1') // true

/*
type coercion
1. first check the two valuse are in same type or not. 
2. if they are is same type,then check the value is equal or not.
3. if they are not in same type, then convert one of them into another type and then compare.
4. for example, 1=='1' here the '1' will convert into number . '1' will converted to number 1. as 1 equal to 1. then 1 is equal to '1'
*/


