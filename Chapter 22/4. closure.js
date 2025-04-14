// closure
//Q1
/*
closure is the ability to access the outer scope variable of an function after calling the function.it is helpful for private variable and state management
*/

//Q2
function fridgeTracker() {
    let fridgeOpenCount = 0;
    return function () {
        fridgeOpenCount++;
        return fridgeOpenCount
    }
}

const rafiOpenFridge = fridgeTracker()
console.log(rafiOpenFridge())
console.log(rafiOpenFridge())
const rafaOpenFridge = fridgeTracker()
console.log(rafaOpenFridge())
console.log(rafaOpenFridge())

// Q3
function taskTracker(){
    let finishedTask = 0
    return function () {
        finishedTask++;
        return finishedTask
    }

}

const me = taskTracker()
console.log(me())

