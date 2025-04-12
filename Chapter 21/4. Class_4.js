// prototype inheritance
//Q1
/*
when we use inheritance in javascript,the child class will have the prototype of the parent class.this is called prototype chaining
*/

//Q2
/*
every object in js has a hidden link which interconnect it with other object which is called prototype.this prototype helps to allow object to inherit method and properties from other object.this system is called prototype inheritance
*/

//Q3
const person = {
    name:'John Cartor'
}
console.log(person._proto_)
console.log(Object.getPrototypeOf(person))
console.log(person.toString())

//Q4
const student = {
    name:'hello'
}
console.log(student.toString())
/*
yes i can use student.toString() even the student object doesn't have toString method because every object has a prototype and in prototype there is a build-in method called toString.when the toString() method cann't be found in student object then the prototype will be searched.as the prototype has toString method it will return it.
*/

