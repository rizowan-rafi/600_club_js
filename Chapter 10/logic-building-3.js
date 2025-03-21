//Q1
function meanOfEvenNumbers(arr) {
    let sum = 0;
    let count = 0;
    for (let i of arr) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    if (count === 0) {
        return "No even numbers found";
    }
    return sum / count;
}

console.log(meanOfEvenNumbers([1, 2, 3, 4, 5, 6])); 
console.log(meanOfEvenNumbers([1,  3, 5])); 

//Q2
function arrayOfOddNumbers(arr) { 
    let oddNumbers = [];
    for (let i of arr) {
        if (i % 2 === 1) {
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}

console.log(arrayOfOddNumbers([1, 2, 3, 4, 5]));

//Q3
function isOddFound(arr) {
    for (let i of arr) {
        if (i % 2 === 1) {
            return 'Odd Numbers found';
        }
    }
    return 'No odd numbers found';
}

console.log(isOddFound([1, 2, 3, 4, 5]));

//Q4
function meanOfOddNumbers(arr) {
    let sum = 0;
    let count = 0;
    for (let i of arr) {
        if (i % 2 === 1) {
            sum += i;
            count++;
        }
    }
    if (count === 0) {
        return "No odd numbers found";
    }
    return parseFloat((sum / count).toFixed(2));
}

console.log(meanOfOddNumbers([1, 2, 3, 4, 5,7,13,99,129]));

//Q5
function oddToEven(arr) {
    let result = [];
    for (let i of arr) {
        if (i % 2 === 1) {
            result.push(i - 1);
        } else {
            result.push(i);
        }
    }
    return result;
}

console.log(oddToEven([1, 2, 3, 4, 5]));