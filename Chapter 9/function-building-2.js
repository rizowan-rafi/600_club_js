//Q1
function oddNumberSum(arr) {
    let sum = 0;
    for (let i of arr) {
        if (i % 2!== 0) {
            sum += i;
        }
    }
    return sum;
}

let arr = [5,15,8,7];
console.log(oddNumberSum(arr));

//Q2
function smallBetweenFirstTwo(arr) { 
    return arr[0] > arr[1] ? arr[1] : arr[0];
}
console.log(smallBetweenFirstTwo(arr));


//Q3
function realAge(age) {
    return age <= 18 ? 18 : age >= 45 ? 45 : age;
}
console.log(realAge(43))

//Q4
function sumOfDivisibleByFour(arr) { 
    let sum = 0;
    for (let i of arr) {
        if (i % 4 === 0) {
            sum += i;
        }
    }
    return sum;
}

let arr1 = [2,4,5,7,8,32,45];

console.log(sumOfDivisibleByFour(arr1));

//Q5
function isTwenty(num) {
    return num < 20 ? num * 2 : num / 20;
}

console.log(isTwenty(150))

//Q6
function sumOfNegNumber(arr) {
    let sum = 0;
    for (let i of arr) {
        if (i < 0) {
            sum += i;
        }
    }
    return sum;
}

let arr2 = [5, -2, 3, -8, 7];

console.log(sumOfNegNumber(arr2));

//Q7
function multiplicationOfDivisibleByThree(arr) {
    let product = 1;
    for (let i of arr) {
        if (i % 3 === 0) {
            product *= i;
        }
    }
    return product;
}


console.log(multiplicationOfDivisibleByThree(arr));