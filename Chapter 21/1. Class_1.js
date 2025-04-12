// Class and instance
//Q1
/* 
    object is a data type where we can store different type of data using key-value pairs which is called property 
    class is template which is use for building same type of object
*/

//Q2
/*
class instance is the object which is built by the class.
*/

//Q3
class Vehicle{
    constructor(brand, model, price) {
        this.brand = brand
        this.model = model
        this.price = price
    }
}
const bmw = new Vehicle('BMW','X5',100000000)
console.log(bmw)
const tesla = new Vehicle('Tesla','Model 3',40000)
console.log(tesla)

//Q4
class Worker{
    constructor(id, name, hoursWorked) {
        this.id = id
        this.name = name
        this.hoursWorked = hoursWorked
    }
}

const tomCruise = new Worker(101,'Tom Cruise',40)
console.log(tomCruise)

//Q5
class Library{
    constructor(name, books, location) {
        this.name = name
        this.books = books
        this.location = location
    }
}
const centralLibrary = new Library('Central Library',10000,'Dhaka')
console.log(centralLibrary instanceof Library)

//Q6
class Classroom{
    constructor(section, teacher) {
        this.student = []
        this.section = section
        this.teacher = teacher
    }
}
const sectionA = new Classroom('A','Mr Plumber')
console.log(sectionA)

//Q7
class Product{
    constructor(name, category, stock) {
        this.name = name
        this.category = category
        this.stock = stock
    }
}

const mobile = new Product('Mobile','Electronics',50)

//Q8
class Product1{
    constructor(name, category, stock = 0) {
        this.name = name
        this.category = category
        this.stock = stock
    }
}

const mobile1 = new Product1('Mobile', 'Electronics', 50)
const mobile2 = new Product1('Mobile', 'Electronics')
console.log(mobile2)
