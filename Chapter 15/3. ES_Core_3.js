// truthy , falsy, not(!) , double not(!!)

//Q1
if ('false') { // yes, it works like true
    console.log('true');
}

//Q2
if ({}) {
    console.log('truthy');
}
else
    console.log('falsy');


//Q3
if ([]) {
    console.log('truthy');
}
else
    console.log('falsy');

//Q4
console.log(!![]) // true
