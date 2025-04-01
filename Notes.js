/*
let vs const --> block scope
let --> can be reassigned and modified but can't be redeclared
const --> can't reassigned or can't be redeclared or modified 

but for arrays and objects the const can be modified but can't be redeclared or can't be reassigned
like push,pop and changing the value is allowed

*/
// .toFixed() convert number to string when converting.
// any calculation using undefined results in NaN
console.log(12 / undefined)

// Chapter 5 -- conditional

/*
    if(condition){
        //code to execute if condition is true
        }
    else{
        //code to execute if condition is false}
    }
*/
const isCondition = true

if (isCondition) {
    console.log('Condition is true')
}
else {
    console.log('Condition is false')
}

/*
    AND --> &&
    OR --> ||

    if both the condition have to be fulfilled then use AND
    if any of the condition have to be fulfilled then use OR

    if(condition1 && condition2)
    {
    //code to execute if both conditions are true
    }

    if(condition1 || condition2)
    {
    //code to execute if either of the conditions is true
    }
*/

/*
    if(condition1){
        // code to execute if condition1 is true
    }
    else if(condition2){
        // code to execute if condition1 is false and condition2 is true
    }
    else{
        // code to execute if condition1 and condition2 is false
    }
*/

/*
    // Nested if-else --> condition under condition
    if(condition1){
        if(condition2){
            // code to execute if both conditions are true
        }
        else{
            // code to execute if condition2 is false
        }
    }
    else{
        // code to execute if condition1 is false
    }
*/

/*
    logical not --> !
    use for toggling boolean value(true and false)

    ternary condition --> condition ? true : false
*/

// Chapter 6 - Array

/*
 Array declare --> type array_name = [value1,value2,value3]
 Array length --> array_name.length
 Array can be any data type and an single array element can be made of different types
  Accessing array element --> array_name[index]
 Index start from 0
 modify array element --> array_name[index] = new value
 if we want access a index which is not in the array(greater than the array length - 1 or less than 0) then it shows undefined

 to add a element at the end of the array --> array_name.push(element)
 we can add multiple element even an array --> array_name.push(v1,v2,v3)
 push() will return the length of the array after adding an element

 to remove an element from the end of an array --> array_name.pop()
 pop()  will return the last element
 to add a new element at the beginning of an array --> array_name.unshift(element)
 unshift() will return the length of the array after adding an element
 to remove an element from the beginning of an array --> array_name.shift()

 check a value is in the array or not
 1. includes() --> array_name.includes() return true if the value is in the array else return false
 2. indexOf() --> array_name.indexOf(value) return the index of the first occurrence of the value else return -1
 3. lastIndexOf() --> array_name.lastIndexOf(value) return the index of the last occurrence of the value else return -1

 includes() are case sensitive


*/
const a1 = [1, 2, 3, true, 'hello', 4.5]
console.log(a1.length)
console.log(a1[3])
a1[2] = 5
console.log(a1[100]) // undefined
console.log(a1.push(6))
console.log(a1)
console.log(a1.pop())
console.log(a1)

//Chapter 7 - Loops
/*
1. for-of loop --> use for traverse array and string
for(type var_name of array_names){
    // code to execute for each element}

2. while loop
initialize a loop variable
while(loop condition){
    // code to execute while loop condition is true
    // change the value of loop variable
    }

3. for loop
for(declare loop variable;loop condition;change loop variable){
    // code to execute for each iteration until loop condition is false}

4. break and continue
break --> break the loop and stop executing the remaining code inside the loop
continue --> continue the next iteration of the loop without executing the remaining code inside the loop
*/
const a2 = [1, 2, 3, 4, 5]
const s2 = 'hello'
for (let a of a2) {
    console.log(a)
}
for (let s of s2) {
    console.log(s)
}


// Chapter 8 - Object
/*
    Object --> Object can be used to store multiple types of data
    type object_name = {
        key: value
    }
    here the value can be any data type . even array and object.

    to access object properties
    1. dot notation --> object_name.key
    2. bracket notation --> object_name['key'] here the key must inside single or double quotation
    when the key has special character,space or store in a variable then use bracket notation

    to modify object property
    object_name.key = new_value
    object_name['key'] = new_value

    to add new property to an object
    object_name.new_key = new_value
    object_name['new_key'] = new_value

    to delete property from an object
    delete object_name.key
    delete object_name['key']

    Object.keys() --> return an array of all the keys of an object
    Object.values() --> return an array of all the values of an object
    Object.entries() --> return an 2d array of all the key-value pairs of an object

    to check a key is in the object or not
    'key' in object_name

    to check a key is it's own property or child property
    object_name.hasOwnProperty('key')



    Object.keys() are case sensitive
    Object.values() and Object.entries() are not case sensitive

    // traverse through object
    for (let key of Object.keys(object_name)) { // after using Object.keys()
        console.log(key, object_name[key])
    }
    for (let [key, value] of Object.entries(object_name)) {
        console.log(key, value)
    }
    for (let key in object_name) { // used to traverse objects
        console.log(key, object_name[key])
    }
    
    // seal vs freeze
    // seal object --> prevent adding new properties, deleting existing properties, but changing existing property values is allowed
    Object.seal(object_name)
    // freeze object --> prevent adding new properties, deleting existing properties, changing existing property values
    Object.freeze(object_name)
    
    
*/

// Chapter 9 - Functions
/*
    Function declaration --> function function_name(parameters){
        // code to execute
    }

    Function expression --> const function_name = function(parameters){
        // code to execute
    }
    
    array function
    const array_function = (parameter) => {
        // code to execute
    }
    if the array function is one line then the return keyword doesn't need to return anything.but if it is multiline then use bracket and use return keyword to return something
    const array_function_one_line = (parameter) => do work
    for object in one line
    const array_function_one_line = (parameter) =>({key: value}) have to use first bracket
    // array function mostly use for callback and simple functions and array method like map and filter. it doesn't this keyword on it's own inherited from parent scope and also doesn't have argument or constructor

   

    
    to return something from function --> return value; value can be any data type even array and object
    if a function has not return keyword --> then it returns undefined
    
    Function call --> function_name(arguments) ( outside the function )
    parameters and arguments can be any data type even array and object
    Function hoisting --> function declaration is hoisted to the top of the script, function expression is not hoisted
    Function arguments --> arguments object is an array-like object that contains the values of the arguments passed to a function

    if the function has 2 parameters but we give 4 arguments when calling function then it takes first two argument and to work with all the four arguments we can use arguments.

    // default parameters --> where we set a default parameter in case the function doesn't have any arguments
    function add(num1 = 0, num2 = 0) {
        return num1 + num2
    }
    console.log(add(10, 5)) // 15
    console.log(add()) // 0
*/

function swapNumber(num1, num2) {
    const temp = num1
    num1 = num2
    num2 = temp
    return [num1, num2];
}
console.log(swapNumber(7, 10))

/* 
ES6
1.  use let and const instead of var

2.  default parameters

3.  template literals --> `string ${expression}` here `` is called backtick. we can use it for multiline string.
    we can call function , use ternary for condition, can work with array and object and we can also write html template using template literals

4. arrow functions

5. Destruction
    * Object Destruction --> type {key_name1, key_name2} = object_name. 
                            if i want to change key name when destruction use : --> key_name1 : new_key_name
    * Array Destruction --> type [value1, value2] = array_name.
    * function Destruction --> if we return function value in array or object, we can destruct the value using array and object destruction like const [a,b] = sum(2,3)
    * we can put default values when destruction using = --> key_name = default value
    * using as function argument --> we can use it when the function parameter is in object or array. when object we can simpley use key_name : value . by this we can give argument without the order of parameters
    * skipping value in array destruction --> use , like [,second,,forth] = array_name

6.

*/
console.log(`the sum of 2 + 3 is ${2 + 3}`)
const user = { name: 'John', age: 23 }
const home = `person: ${user.name},page: ${user.age}`
console.log(home)

// Destruction
const user1 = {name: 'John', age: 35,hobby : 'swimming' }
const { name, age, hobby: passion, profession= 'N/A'} = user1
console.log(name, age, passion,profession)
const userArray1 = [1,2,3,4,5]
const [a,b] = userArray1
console.log(a, b)
const [a11, , c11, , e11] = userArray1
console.log(a11,c11,e11)

function userProfile({ name, age, hobby, profession }) {
    console.log(`I am ${name} and ${age} years old.I am a ${profession} and my hobby is ${hobby}`)

}

userProfile({age:35,profession:'teacher',name: 'John',hobby: 'Fishing'})

function sumAandB([a, b]){
    console.log(a+b)
}
sumAandB([5, 10])





