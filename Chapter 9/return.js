//Q1
function isGreaterThan10(a) {
    if (a > 10)
        return true;
    return false;
}

console.log(isGreaterThan10(15)) 

//Q2
function isDivisibleBy13(a) {
    if (a % 13 === 0)
        return true;
    return false;
}
console.log(isDivisibleBy13(26))

//Q3
function totalBill(r, c, d) {
    return r + c + d;
}
console.log(totalBill(20, 40, 25))

//Q4
function isEligibleForVote(age) {
    if (age >= 18)
        return 'Eligible for Voting';
    return 'Not Eligible';
}

console.log(isEligibleForVote(16))

//Q5
function stringLength(str) { 
    return str.length;
}
console.log(stringLength('hello world'))

//Q6
function meanOfThree(a, b, c) {
    return (a + b + c) / 3;
}
console.log(meanOfThree(20, 30, 40))

//Q7
function isNegative(num) {
    if (num < 0)
        return num * -1;
    return false;
}

console.log(isNegative(-5))
