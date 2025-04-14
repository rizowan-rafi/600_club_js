// hoisting
//Q1
// totalComment++
// let totalComment = 100
// console.log(totalComment) // ReferenceError: Cannot access 'totalComment' before initialization

//Q2
// views /= 2
// const views=4
// console.log(views) //ReferenceError: Cannot access 'views' before initialization

//Q3
/*
Temporal Dead Zone --> when we declare a let or const variable but not initialize,the variable will hoist in a place which is called temporal dead zone
it is important because 
    * it prevents using variable before they are ready


*/

//Q4
/*
function expression is store in a let or const variable.when we want to use it before declare it will give reference error as the variable is in temporal dead zone during calling the function
*/

//Q5
/*
in var,if var variable hoist at the top but if it is initialize then it shows the value if not it shows undefined
*/
console.log(varValue) // undefined
var varValue = 32;

//Q6
/*
no. in var if the variable is used but not initialize ,the variable will be undefined but in let , the variable will be in temporal deal zone and if we want to use it,it gives reference error
*/

//Q7
console.log(biggerNumber(87, 12))
function biggerNumber(a, b) {
    return a > b ? a : b;
}
/*
we can call the function before declare it because of hoisting. when we call the function,it hoists the function to top of the code.as a result,the function return the value and we get 87.
*/

