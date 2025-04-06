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
    * using as function argument --> we can use it when the function parameter is in object or array. when object we can simply use key_name : value . by this we can give argument without the order of parameters
    * skipping value in array destruction --> use , like [,second,,forth] = array_name

6. Rest Operator
    * Rest parameter -->...rest_parameter is used when we don't know how many arguments a function will receive.
    * spread operator -->...spread_operator is used when we want to expand an array or object into multiple arguments or elements.
    * to keep multiple arguments,properties or element of function,object or array
    * also useful when we don't know how many arguments,properties or element is in the function,object or array
    * also useful when destructing value from array

7. Spread operator
    * spread operator -->...spread_operator is used when we want to expand an array or object into multiple arguments or elements.
    * spread operator is used to copy array or object into new array or object.
    * to have max number from some parameter Math.max(param1, param2,)
    * to get max number from array Math.max(...arr)
    * to merge array or object into new array or object
    * to add new element when copying from array or object
    * to direct copy a array into another array , it has some referenced issue to solve it use spread operator

8. import and export
    * import --> to import function, variable, class, or module from another file.
    * export --> to export function, variable, class, or module to another file.
    * to export something from a file or module use export keyword
    * to import that use { } and destruction to import that
    * use default export keyword to export thing by default. it will no need destruction and we can use any name to import that but one module or file can have only one default export
    * we can change the export component by using as keyword like sum as add
    * package.json --> {"type":"module"}

9. Array Method
    * map --> create a new array by performing a transformation on each element of the original array.it works with every element of the array and return a new array
    * filter --> create a new array with all elements that pass the condition implemented by the provided function.it will work on every element of the array and check the condition. all the elements that fulfill the condition form the array and return a new array. if no element fulfills the condition then it returns empty array
    * forEach --> it will work on every element of the array but doesn't return anything
    * find --> it will work on every element of the array and return the first element that fulfills the condition.if no element fulfills the condition then it returns undefined
    * findIndex --> it will work on every element of the array and return the first element's index that fulfills the condition.if no element fulfills the condition then it returns -1
    * some --> it will work on every element of the array and check the condition.if any of the element passes the condition,it return true else false
    * every --> it will work on every element of the array and check the condition.if all the element pass the condition then it returns true else false
    * flat --> to convert a nested array to a single flatten array.return an array
    * reduce --> it will reduce all the elements of the array into a single value.
                arrName.reduce((accumulator,currentValue) => doSomeWork,intialValue)
                here (accumulator,currentValue) => doSomeWork is a callback function
    * sort --> it will sort the elements of the array in ascending order. it will return a new array.but it will sort using string which is not compatible for numbers
                to sort the elements use a callback function called compare function
                compareFunction should return -1, 0, or 1. if -1 then a comes before b, if 0 then a equals b, if 1 then a comes after b
                sort acceding way --> arrName.sort((a,b)=>a-b)
                sort descending way --> arrName.sort((a,b)=>b-a)
    * reverse --> arrName.reverse() to reverse the array.
    * concat --> to merge two or more arrays or objects. it will return a new array.
    * slice --> using this we can slice any numbers of elements from an array. it will return a new array with the slice elements and main array will not change
                arrName.slice(initialIndex, lastIndex+1)
    * splice --> using this we can delete any number of elements from an array from any position and add elements on that position but it will return array of deleted element and main array will be changed
                arrName.splice(initialIndex, number of elements to delete from that index, the elements that i want to add on that index)
    three parameter in array method --> array/object_name.method(element,index,full_array/full_object)
    like numbers.map(number,index,numbers)

    String Methods
    * charAt --> it will return the character at the specified index in the string.
    * String is immutable and array is mutable.both are case sensitive. we can't change a string after declaration it but we can redeclare the string and we can change array elements.
    * String is like array in many ways like strName.length, strName[index],strName.includes(char),strName.indexOf(char),strName.charAt(index)
    * to convert lower case --> strName.toLowerCase() and upper case --> strName.toUpperCase()
    * to remove whitespace --> strName.trim()
    * to have a substring from a string --> strName.slice(initialIndex,lastIndex+1)
    * to have a substring from a string --> strName.substring(initialIndex,lastIndex+1)
    * to convert string to array --> strName.split(how we want to split the string)
    * to convert array to string --> arrName.join(how we want to join the array)
    * to concat the string --> str1Name.concat(str2Name) or str1Name + str2Name + str3Name
    * substring vs slice --> parameter swapping(if start>end substring swap them but slice give empty string) and handling negative index(substring treats as 0 index but slice counts from the end of the string)
    * to repeat a string many times --> strName.repeat(how many times to repeat)
    * to convert any data type to string --> varName.toString()
    * to replace any part of a string with anything(first occurrence) --> strName.replace(what to replace,what to place instead of that).return a new string
    * to replace any part of a string with anything(all occurrence) --> strName.replaceAll(what to replace,what to place instead of that).return a new string
    * to reverse a string -->
            Method 1 : 
            const reverse = ""
            const str = 'hello world
            for(const i of str){
                reverse = i + reverse
            }
            
            Method 2 :
            const reverse = str.split('').reverse().join('')

*/
console.log(`the sum of 2 + 3 is ${2 + 3}`)
const user = { name: 'John', age: 23 }
const home = `person: ${user.name},page: ${user.age}`
console.log(home)

// Destruction
const user1 = { name: 'John', age: 35, hobby: 'swimming' }
const { name, age, hobby: passion, profession = 'N/A' } = user1
console.log(name, age, passion, profession)
const userArray1 = [1, 2, 3, 4, 5]
const [a, b] = userArray1
console.log(a, b)
const [a11, , c11, , e11] = userArray1
console.log(a11, c11, e11)

function userProfile({ name, age, hobby, profession }) {
    console.log(`I am ${name} and ${age} years old.I am a ${profession} and my hobby is ${hobby}`)

}

userProfile({ age: 35, profession: 'teacher', name: 'John', hobby: 'Fishing' })

function sumAandB([a, b]) {
    console.log(a + b)
}
sumAandB([5, 10])

// Rest operator
const rest = [1, 2, 3, 4, 5, 6, 7, 7]
const [r1, r2, ...r3] = rest
console.log(r3)

const restObj = { name: 'John', age: 34, height: 150, weight: 90, profession: 'teacher' }
const { name: ro1, age: ro2, ...ro3 } = restObj
console.log(ro3)

const spread = [...rest, 8, 9]
console.log(spread)

const spreadObj = { ...restObj, hobby: 'gardening' }

console.log(spreadObj)
const mergeArray = [...rest, ...spread]
console.log(mergeArray)

//Array Method

const numbers = [1, 2, 3, 4, 5]
const numbersMap = numbers.map(number => console.log(number * 2))
const numbersFilter = numbers.filter(number => number % 2 === 0)
numbers.forEach(number => console.log(number))
console.log(numbers.find(number => number === 3))

const numbersParameter = numbers.map((number, index, numbers) => { return `${number} is in ${index} index and ${numbers.length} length` })
console.log(numbersParameter)

console.log(numbers.some(number => number > 3))
console.log(numbers.every(number => number > 3))

const nested = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]
const single = nested.flat(3)
console.log(single)

// String method

const str = 'Hello World'
console.log(str.charAt(3))
console.log(str[3])
console.log(str)
console.log(str.includes('World'))
console.log(str.indexOf('World'))
// str = 'people'  // redeclaration the string is allowed
// console.log(str)
// str[1] = 'h' // changing the string is not allowed
// console.log(str)

let reverse = '';
for (let i of str)
    reverse = i + reverse

console.log(reverse)

const reverse1 = str.split('').reverse().join('')
console.log(reverse1)

/*
JS Core Concept

1. Dynamic typing language
    * JavaScript is dynamically typed language. This means that a variable can hold a value of any type during its lifetime.it will detect the type by checking it's value.that's why it is also called loosely typed language. 
    * example: let name = 'John'; name = 23; // it will be fine
    * demerits --> sometimes it is hard to debug the code 
    * merits --> easy to write code.

2. primitive vs non-primitive data types
    * Primitive data types: string, number, boolean. 
    * Non-primitive data types: object, function, array.
    * primitive data type pass the copy of the value in function but non-primitive data type pass the reference/memory address of the value in function.that's why primitive data type is called pass by value and non-primitive data type is called pass by reference
    * if we copy a primitive data type variable value to another variable. it will give the copy of the variable value.both of their memory location will be different
    * if we copy a non-primitive data type variable value to another variable.(without spread operator ...) it will give the reference/memory address of the variable value.both of their memory location will be same.as a result if you change any of the variable content both of the variable will be changed.

3. null and undefined
    * when undefined :: it is a value in JavaScript that represents the absence of any value.
    * when null :: it is a value in JavaScript that represents the intentional absence of any  value.
    * when the undefined value is occurs
        # when we declare a variable with assigning any value
        # when we don't return any value from a function
        # when we passed less argument than the parameter
        # when we try to access a property of an object which is not present
        # when we use return statement but doesn't return anything
        # when we try to access a object property which is not available
        # when we try to access index which is not available in array
        # when we delete an element from array
        # we can also assign a variable undefined
    
    * null vs undefined
        # null and undefined both represents the absent of value but null is intentional and undefined is indicator given by the system.
        # null's type object and undefined's type undefined

4. truthy vs falsy
    * Truthy values: true, non-zero number, non-empty string, non-empty array, non-empty object, non-null boolean value.
    * Falsy values: false, 0, ''(empty string), undefined, null, NaN.
    * not(!) vs double not(!!) --> not(!) is used to check if a value is falsy or not.double not(!!) is used the check a value's boolean value

5. ==(check only value using type coercion) vs ===(check both value and type)
    * Nan == Nan is false
    * when non-primitive == primitive. it convert non-primitive to primitive using toString() then compare value
    * when non-primitive == non-primitive. it doesn't compare value.rather it compares reference. if the reference/memory location is same then true,else false
    * when type coercion [],{} becomes false

6. Callback functions
    * a function that is passed as an argument to another function and is called (invoked) when that function is finished executing.
    * example: setTimeout(), setInterval(), forEach(), map(), filter(), reduce(), Promise.resolve().then()
    * it is function under a function . which will execute after the first function do some work

7. Scope
    * code block --> if there is one or many line code inside second bracket ({ }) then it is called code block. {code}
    * global scope --> if we access a code or variable from anywhere(any function or block) in the code then it is global scope
    * function scope --> we can access only in a function block like parameter and variable declare inside the function
    * block scope --> we can access in a block . that's mean {  code block }.like loop,condition or function
    * lexical scope --> inner block can access outer block code and variables. but outer block can't access inner block code and variables
    * scope chain --> when we want to access a code or variable, it will use scope chain to find it.first it searches the code or variables in inner block/scope, then outer block/scope,then global scope/block
*/

// Callback function

const add = (a, b, callback) => {
    const result = a + b
    callback(result)
}

function printResult(value) { // this is callback function
    console.log(`The result is ${value}`)
}

add(5, 10, printResult)

// scope
let global = 23; // global scope as it can accessible by any block or anywhere in the code

function outerFunction() {
    let outer = 45; // function scope as it can accessible only inside the function
    function innerFunction() {
        let inner = 67; // block scope as it can accessible only inside the block
        console.log(global) // 23 // it used scope chain to find global
        console.log(outer) // 45 // it used scope chain to find outer
        console.log(inner) // 67 // here inner is only accessible by innerFunction but not outerFunction but outer can accessible by both innerFunction and outerFunction. this is lexical scope
    }
}

/*
Build in Object and Method
1. Type Constructor 
    * string to number --> Number(string) / +string
    * number to string --> String(num) / num + ''
    * to boolean --> Boolean(value)
    * Function contructor --> new Function(parameter, code)
    * object constructor --> new Object()

2. build in Math method
    * Math.min(a,b,c,d)
    * Math.max(a,b,c,d)
    * Math.PI
    * Math.abs(a)
    * Math.round(a) --> nearest integer
    * Math.floor(a)
    * Math.ceil(a)
    * Math.random() --> between 0 and 1
    * Math.random() * (a-b)+b --> between a and b where a>b (floor)
    * Math.floor(Math.random() * (max - min + 1)) + min --> between a(exclusive) and b(inclusive) where a>b(integer)
    * Math.random() < 0.5 --> to generate random boolean(true or false)

3. build in Date method
    * new Date() --> it is a object
    * new Date(year, month, date, hours, minutes, seconds, milliseconds)
    * new Date().getFullYear()  new Date().getMonth()  new Date().Day()  new Date().Hours()  new Date().Minutes()  new Date().Seconds()
    * we can set by setFullYear() setMonth() setDate(). also hours,minutes and seconds
    * to have time difference between 2 date object --> d1-d2 / (1000*60*60*24) . here d1-d2 is in millisecond.
    * new Date().toLocaleString([locales], [options]);

4. Regular Expression(RegEx) --> used to find or replace or check a portion of text in a string
    * /text/ or new RegExp(text)
    * .test(string) --> return true or false to check the text is in the string or not
    * .replace(/word to replace/g,work that will in the replacement)
    * .match(string) --> return the match part or null
    * 

5. Set
    * new Set([1,2,3,3,4,5]) --> it will remove duplicate values and keep only one copy of each value
    * new Set().add(value) --> to add value in set
    * new Set().delete(value) --> remove value
    * new Set().has(value) --> to check if value is in the set
    * [... new Set([a,c,d,e,f,g,h,i,j,])] --> to remove duplicate from array
    * .size --> to have the size of the set
    * it works with values not index

6. Map
    * new Map([[key1, value1], [key2, value2],...])
    . new Map().set(key, value)
    . new Map().get(key) --> to get value
    . new Map().delete(key) --> to delete 
    . new Map().has(key) --> to check if key is in the map
    * it works with key and value pair
    * .size --> length of the map

*/

/*
Error Handling
1. type validation
    * use typeof for number,string and object and Array.isArray(arrName) for array
2. Types of errors
    * syntax error --> when the syntax is wrong like missing a bracket,colon,comma,spelling mistake,missing initialization in const variable.
    * logical error --> it is a error that the programmer makes when writing the code.it doesn't show on error message.it occurs when your logic isn't correct
    * type error --> when we use a operation which is not built for that type of value like .toUpperCase() is for string . if we use it in number.Or use dot notion in string or number which is used in object.Or call a variable rather that function
    * reference --> when the compiler doesn't find the reference of the variable or code.like if we use a variable in our code which is not defined.then it will give reference error.
    * range error --> when any number exceed it's valid range like .toFixed() can work between 0 to 100. if we give it like .toFixed(101) then it will give range error
*/






