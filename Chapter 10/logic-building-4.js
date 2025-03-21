//Q1
function duplicateDetector(arr) {
    let newArr = [];
    for (let i of arr) {
        // if (newArr.indexOf(i) === -1) {
        //     newArr.push(i);
        // }
        if (!newArr.includes(i)) {
            newArr.push(i);
        }
    }
    return newArr;
}

let arr = [1, 5, 61, 5, 87, 7, 5, 81, 61];

console.log(duplicateDetector(arr));
