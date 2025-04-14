// Q1
const laptop = {brand:'dell',getBrand(){console.log(this.brand)}}
const mobile = {brand:'samsung'}
mobile.getBrand = laptop.getBrand
mobile.getBrand() // it will print mobile brand samsung

//Q2
/*
this runs by analyzing which context the method or object runs.if this is use for a method or function,then it represents that else it represents global object or window.
this will change when we use a method or object this to another method or object then it will represent the second method or object.if it is not used in method or object then it wll represent window or global object
*/

//Q3
const manager = {
    tasks: [],
    assignWord(task) {
        this.tasks.push(task) // is this method this represent the whole object and this.tasks represent the tasks property
        
    }
}

manager.assignWord('task 1')
console.log(manager)