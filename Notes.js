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
    // array function mostly use for callback and simple functions and array method like map and filter. it doesn't have this keyword on it's own inherited from parent scope and also doesn't have argument or constructor

   

    
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

/*
Asynchronous JS
1. JavaScript is a single-threaded language.it works synchronously.means it works line by line.it can only do one task at a time.
2. setTimeout vs setInterval --> asynchronous task in synchronous js
    * setTimeout(callback,delay) --> it will wait for the specified milliseconds and then execute the function once.here delay is not mandatory.if not given it will take 0 milliseconds to execute
    * setInterval(callback,delay) --> it will execute the function repeatedly at specified milliseconds.
    * both are used to run a function after a specified time. but setInterval will keep running until clearInterval() is called.
    * setTimeout(() => { console.log('after 2 seconds') }, 2000)
    * setInterval(() => { console.log('after every 3 seconds') }, 3000)
    * setInterval() return a intervalId. to stop setInterval() --> clearInterval(intervalId) 
    * setTimeout(() => { clearInterval(intervalId) }, 10000) // to stop interval after 10 seconds

3. how single threaded javascript handle asynchronous tasks
    call stack --> LIFO and execute synchronous tasks
    web APIs --> it is built-in JavaScript objects or methods that provide functionality that JavaScript doesn't have built-in. like DOM manipulation, AJAX, setTimeout, setInterval, etc.
    callback queue --> FIFO and execute asynchronous tasks. it will put the callback function into callback queue when it is ready to execute.
    event loop --> it checks the call stack is empty or not. if not it will wait until call stack is empty. then it will check the callback queue. if callback queue is not empty it will execute the first task from callback queue.

4. characteristics of js
    * single threaded
    * High abstraction
    * Dynamically typed
    * prototype-based
    * multi-paradigm
    * JIT compiler
    * Garbage collection
   
*/

/*
JSON FETCH PROMISE
    1. JSON --> Javascript Object Notation
        * to convert object to JSON --> JSON.stringify(obj_Name)
        * to convert JSON to object --> JSON.parse(JSON_Data)
        * JSON key and value have to be in double quotes.there is no function in json data but object has.
        * JSON is a way to send data in an organized and readable format.
    
    2. Promises
        * Promise is an object that represents the eventual completion or failure of an asynchronous operation.
       * Promise has 3 state --> pending,resolve,reject
       * create a new Promise --> new Promise((resolve,reject)=>{if promise fulfilled then resolve() else reject()})
       * after creating the Promise, it will return a promise object.there are 3 method to catch it. 1. .then() --> when promise is resolved, 2. .catch() --> when promise is rejected, 3. finally() --> it will run whenever promise resolves or rejects. they are callback function
       * promise is used to get data from the server asynchronously.as it can take some time or data fetch can be failed.
       * Promise.all([p1,p2,p3]) --> if all the promises are fulfilled,then it will return all the resolved as an array
    
    3. Fetch
       * fetch(url) --> it is used to fetch data from the server. it returns promise.
       * fetch(url).then(response=>response.json()) --> it will parse the response and return as json object.
       * api --> it is a way to communicate with two different software
       * url --> it is address to find some resource from the server
       * fetch(url).then(res=>res.json()).then(data=>do work with data).catch((err)=> console.log(err)).finally()
       * promise vs fetch --> promise is used to do asynchronous task whether fetch is used to get data from server or post data to server but fetch return a promise also.
    
    4. CRUD --> create,read,update,delete
      * create(POST) --> fetch(url, {method: 'POST', body: JSON.stringify(data),headers:{'Content-type':'application/json'},}) --> to post /add data to server
      * read(GET) --> fetch(url) => to get data from server and show it to user
      * update(PUT/PATCH) --> fetch(url, {method: 'PUT', body: JSON.stringify(data),headers:{'Content-type':'application/json'},}) => to update the entire data.if the data is not there,then it will create one.have to be an id in the url like users/1 which specify the content
      * update(PUT/PATCH) --> fetch(url, {method: 'PATCH', body: JSON.stringify(data),headers:{'Content-type':'application/json'},}) => to update the portion of data.have to be an id in the url like users/1 which specify the content
      * delete(DELETE) --> fetch(url, {method: 'DELETE'}) => to delete data from database.have to be an id in the url like users/1 which specify the content
      * here get,post,delete,put,patch is called HTTP method
      * after do these methods, it return a promise which can be caught by .then(),.catch() and .finally()
    
    5. try-catch-finally
      * try --> block of code where we can throw an error.if an error occurs in try block, it will be caught by catch block.
      * catch --> block of code where we catch the error. it will be executed if an error occurs in try block.
      * finally --> block of code which will always run whenever it gives an error or not
      * throw new Error(err)
        try{
            // code that might throw an error
            throw new Error('Some error occurred'); // optional
        }catch(err){
            // code to handle the error
            console.log(err.message);
        }finally{ // optional
          // code to run no matter what
            console.log('This code will always run');
        }
    
    6. async await
    async --> it is keyword that makes function asynchronous
    await --> it is keyword that makes function wait until promise is resolved
    * it is useful to fetch data from the server
    * it is more efficient ways than fetch
    * when you do asynchronous task one by one than we have to write callback function one into another which is look like a pyramid. this is called callback hell or pyramid of doom.
    * to resolve callback hell, we can use async-await instead of fetch and .then() method
    
    async function test(p){
        try{
            let data = await fetch(p); // fetch data from server
            let jsonData = await data.json(); // parse the response

            do work like await and another
        }
        catch(err){
            console.log(err)
        }
    }
    test('https://jsonplaceholder.typicode.com/posts/1'); // calling the function with the url to fetch data from server

*/

/*
Access Data
1. how data come ::
    * Array of Objects --> arrName[index].objKey or use loop to access all the data
    * Array in Objects --> objName.arrKey[index].objKey 
    * multi level nested Object --> obj1Key.obj2Key.boj3Key

2.nullish coalescing and optional chaining
    * optional chaining(?) --> objName?. or objName.key1?. use before dot notation.if the property is not exist then this option chaining will stop the process and return undefined else it will not do anything
    * Nullish coalescing(??) --> varName/objKey ?? default value. if the variable or object property is null or undefined , then it will show the default value.
    * OR operator(||) --> varName/objKey || default value. if the variable or object property is falsy value , then it will show the default value.
    * we can use optional chaining and Nullish coalescing together.

3. ++a/--a(pre),a++/a--(post),+=,-=,*=,/=,%=
    &&=(Logical And) --> var/objKey &&= value. if if the variable or object property is truthy , then it will show the  value.else it shows variable or obj property value
    ||=(Logical Or) --> var/objKey ||= value. if if the variable or object property is falsy , then it will show the  value.else it shows variable or obj property value
*/

/*
Class ::
1. class is template which is used to make same type of object.
2. to build a class --> use class keyword like class className {}
3. to create object we need constructor which is a method.constructor is similar to function.it can take parameter,default parameter or no parameter.
    class className{
        constructor(parameters){
        
        }
    }
4. to build a object we need to use new keyword like type objName = new className(parameters).new keyword indicates we need to create a new object.
5. parameters is constructor is optional
6. if the object has property we need this keyword inside parameter --> this.pName = pName.  we use the this keyword inside a constructor to refer to the current instance of the class being created.
    class className{
        constructor(parameters){
        this.keyName = pName 
        }
    }
7. instance --> instance means objects that is created by the class.we can check a object is an instance of a class or not by using --> object instanceof className
8. if we want to add method(function) in object --> functionName(parameter){ do work }.don't add function keyword and write method outside and below the constructor.this type of method is called instance method.
9. to access anything from the construction in method use this keyword 
10. inheritance::
    * parent child relation
    * class childClass extend parentClass
    * where there is many common properties and method in many class. we write a parent class which has all the common properties and method.then we inherit the parent class.the class which inherit parent class is called child class
    * to call the parent class constructor --> super keyword
11. Prototype Chain
    * every object has a internal hidden link which connects it with other object which is called [[Prototype]]
    * we can see the prototype using objName._proto_ or Object.getPrototype(objName)
    * when we try to access any property or method in a object first it search in the object,if it doesn't find it in the object then it search in it's prototype,if it doesn't find it either then it goes upper prototype.this cycle continue until there is no prototype and it becomes null.this is prototype inheritance
    * extends and super do the same thing.it set prototype of parent class in the child class prototype
    * we can customize js build-in method on our own like in prototype there is a function called toString which declaring the object we can set toString as a method in object that it will call this method in object instead of the build in method
    * */


// class
class Player {
    constructor(name, team) {
        this.name = name //this.name = name means: set the property name of the current object(sakib) to the name passed into the constructor.
        this.team = team
    }
    getName() {
        return this.name
    }
}

class PlayerLife extends Player {
    constructor(name, team, networth, favFood) {
        super(name, team)
        this.networth = networth
        this.favFood = favFood
    }
}

const sakib = new Player('Sakib Al Hasan', 'Bangladesh')
// console.log(sakib.name)
console.log(sakib)
console.log(sakib instanceof Player)
console.log(sakib.getName())

const sakibLife = new PlayerLife('Sakib Al Hasan', 'Bangladesh', '100 millon', 'jani na')
console.log(sakibLife)



// prototype
const mouse = {
    name: 'hello mouse',
    toString: function () { return `this is a ${this.name} function` }
}

console.log(Object.getPrototypeOf(mouse))
console.log(mouse.toString())

/*
this keyword
    * if we console.log(this) then it show a window object which is global object.global object is a object which holds all the global variable,function and properties.and also it holds how js will run.
    * in object
        # when we write a method in object, we can access the this keyword which indicates the whole object. as it indicate the whole object we can access any property using this.keyName from the method
        # if we write method in arrow function then the this keyword inside the method indicates the global scope not the object block scope.so it will search outside the object not inside
        
    
    * in class
        # when we use this keyword in class it doesn't represent the class rather it represents the object that will be created by the class
    
    * normal function
        # if we use this keyword in function this represents the global object
    
    * constructor function --> it before es6 when class keyword is not there
        function Person(name){
            this.name = name
        }
        const user = new Person('name')
        console.log(user.name)
    
    * Event Listener
        # in event-listener --> this keyword shows the element which will occurs the event like a button
    * if we use "use strict" , then if we use this keyword in global scope/global object then it will be undefined.
    
    * if we want to set a method or function's this keyword value we can use
        # obj1.methodName.bind(objName,p1,p2) --> use to bind your method's this into a another function
        # obj1.methodName.call(objName,p1,p2) --> use to call direct the the method form another object method
        # obj1.methodName.apply(objName,p1,p2) --> use to call direct the the method form another object method
        
    
*/
const student = {
    name: 'rafi',
    roll: `023`,
    calling: function () {
        return this
    },
    falling: function () {
        return this.name
    }
}
console.log(student.calling())
console.log(student.falling())

const teacher = {
    name:'rahim'
}
const teacherName = student.calling.bind(teacher)
console.log(teacherName().name)

console.log(student.calling.call(teacher).name)
console.log(student.calling.apply(teacher).name)

/*
closure::
    * closure is a function defined in a function / the ability to access outer scope variable even after calling the function is called closure
    * it is used for private variable and state management
*/
function taskTracker() {
    let finishedTask = 0 // private variable
    return function () { // state management
        finishedTask++;
        return finishedTask
    }

}

const me = taskTracker()
console.log(me())

/*
Hoisting --> uplifting.it will uplift the function and variable on the top of the code when call it
    * in function with function keyword --> if we call the function before declare it .it will hoist the function on top so the the function will run
    * but we use function expression or arrow function --> it will go to temporal dead zone(TDZ) and give reference error
    * let and const --> same as arrow function.it will go to temporal dead zone and until initializing the let or const variable it will give reference error if we try to use it
    * var --> for var it will give undefined
    * Temporal Dead Zone --> when we declare a let or const variable but not initialize,the variable will hoist in a place which is called temporal dead zone
    * 
*/

/*
JS Tricky Concept::
    1. do-while loop --> first run the code(do) then check the condition(while) and repeat until the condition is false.but the loop run at least one time if the condition is false at first
    do{
        // code block
    }while(condition)

    2. switch case --> if we need to check one variable again and again using if-elseif-else,then we use switch case
    const oneVariable = a;
    switch(oneVariable){
    case value1:
        code block
        break
    case value2:
        code block
        break
    default: // if none of the case is valid
        code block
    }
    
    3. eval(code in string) --> with the help of it we can change a code as we wish
        with(objName){} --> we can set a scope for the objName object where we can access all it's property
        both of them are not recommended to use and considered bad practice
    
    4. js use floating point arithmetic which convert decimal point to binary.
        as a result sometime it gives unexpected value like .1+.2=.300000000000000004
        to avoid this use .toFixed() or .toPrecision()
    
    5. IIFE --> immediately invoked function expression means the function will execute instantly after the declaring it.it is useful when we need to call a function only one time
    (function(parameter){
        // code block
    })(argument)
    if you use more than two iife function in your code use semicolon after each iife function

    6. "use strict" is a keyword in js.which is use for make the code in strict mode which means
        * you can't declare a variable without let or const(without type)
        * can't use duplicate parameter
        * in function if this keyword doesn't mean any object then it becomes undefined.
        * can't use with keyword
    
*/

/*
DOM -- document object model
    * when a html file load in browser,it convert all the html code into a js object which is called DOM
    * document.getElementsByTagName('tagName') --> get all the elements of that tag name in a HTMLCollection(array like object)
    * document.getElementById('IdName')--> get an element of that id
    * document.getElementsByClassName('className') --> get all the elements of that class name in a HTMLCollection(array like object)
    * document.querySelectorAll('.className'/'#idName') --> get all the elements of that class/id name in a NodeList(array like object)
    * document.querySelector('.className'/'#idName') --> get the first element of that className/idName 
*/

/*
* firstChild and childNodes like document.getElementById('IdName').firstChild or document.getElementById('IdName').childNodes
* createElement('tagName'),innerText/innerHTML,querySelector,appendChild(child) 
    const li = document.createElement('li')
    li.innerText = 'hello'
    const ul = document.querySelector('#ul')
    ul.appendChild(li)
* innerText return the text under the element and innerHTML return the elements under the element
* web api --> some functionality that has in browser for web development
    # DOM
    # Local Storage
    # Session Storage
    # Fetch API
    # History API
* event --> button,onclick like <button onclick="functionName()">click me</button>


*/

/*
how js code run --> parsing(abstract syntax tree) -> compilation -> jit compiler -> execution
dev tool --> elements,console,sources,network,performance,application
debug ::
    * use console log around the error line
    * breakpoint
    * debugger
    * callstack

tips to debug::
    * read the error message and try to understand
    * isolate the problem part from the code
    * test in small part
    * use tools like devTools,Breakpoint and callStack
    * read documentation

compiler --> convert the whole code into machine code and then run the code
interpreter --> it coverts the code into machine line by line and run the line immediately
*/

