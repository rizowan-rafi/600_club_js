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

/*
Loops

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


