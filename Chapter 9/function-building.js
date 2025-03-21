//Q1
function isLengthEven(arr) {
    if (arr.length % 2 === 0)
        return 'Even';
    return "Odd";
}
console.log(isLengthEven([10,20,30]))

//Q2
function firstCharacter(str) {
    return str[0];
}
console.log(firstCharacter('rafix'));

//Q3
function isGreaterThen10(num) {
    if (num > 10)
        return num / 10;
    return num * 10;
}

console.log(isGreaterThen10(5));

//Q4
function sumOfFirstTwo(arr) { 
    return arr[0] + arr[1];
}

console.log(sumOfFirstTwo([10,20,30,40]));

//Q5
function isPositive(n) {
    if (n > 0) return n * 2;
    return n * 3;
}

console.log(isPositive(-5));

//Q6
function biggerName(str1, str2) {
    if (str1.length > str2.length) return true;
    return false;
}
 
console.log(biggerName('John', 'Janee'));

//Q7
function multiplyIf100(a, b) {
    const s = a * b;
    return s > 100 ? s / 2 : s;
}

console.log(multiplyIf100(10, 50));
