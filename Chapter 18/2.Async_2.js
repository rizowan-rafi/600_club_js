// setTimeout, setInterval
//Q1
setTimeout(() => {
    console.log('I wasted 3 seconds of my life by looking at screen and doing nothing')
}, 3000)

//Q2
let num = 131;
setInterval(() => { console.log(num); num += 2; }, 2000)

//Q3
let count = 0;
const id = setInterval(() => { 
    count += 1;
    console.log('I am learning javascript')
    if (count === 6)
        clearInterval(id)
}, 2000)

//Q4
// if we skip the delay or second parameter in setTimeout(), it will take 0 microseconds by default.