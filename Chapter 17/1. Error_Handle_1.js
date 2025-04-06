// type validation
//Q1
function firstChar(str) { 
    if (typeof str !== 'string')
        return 'please enter a string';
    return str[0];
}

console.log(firstChar(123));
console.log(firstChar('banana'));

//Q2
function lastElement(arr) { 
    if (!Array.isArray(arr))
        return 'please enter an array';
    return arr[arr.length - 1];
}

console.log(lastElement([1,2,3,4,5]));
console.log(lastElement({ 1: 'hello', 2: 'world' }));

//Q3
function getArea(l, w) {
    if (typeof l!== 'number' || typeof w!== 'number')
        return 'please enter numbers';
    return l * w;
}

console.log(getArea(5, 10));
console.log(getArea(5, '10'));
