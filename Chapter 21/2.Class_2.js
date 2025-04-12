// instance method in class
//Q1
class Hotel{
    constructor(name,rooms,costOfNight) {
        this.name = name
        this.rooms = rooms
        this.costOfNight = costOfNight
    }
    getName() {
        return this.name
    }
}

const hotel = new Hotel('Delight',50,1000)
console.log(hotel)
console.log(hotel.getName())

//Q2
class Employee{
    constructor(name, rank, salary) {
        this.name = name
        this.rank = rank
        this.salary = salary
    }
    getSalary() {
        return this.salary
    }
}
const employee = new Employee('John','Manager',1000000)
console.log(employee)
console.log(employee.getSalary())

//Q3
class Library {
    constructor() {
        this.books = []
    }
    addBook(book) {
        this.books.push(book)
    }
    hasBook(book) {
        return this.books.includes(book)
    }
}

const library = new Library()
library.addBook('Harry Potter')
console.log(library)
console.log(library.hasBook('js'))
console.log(library.hasBook('Harry Potter'))

//Q4
class ShoppingCart{
    constructor() {
        this.products = []
        this.totalPrice = 0
    }
    addToCart(name, price) {
        this.products.push(name)
        this.totalPrice+=price
    }
    getTotalPrice() {
        return this.totalPrice
    }
}

const shoppingCart = new ShoppingCart()
shoppingCart.addToCart('mobile',50000)
shoppingCart.addToCart('laptop',150000)
console.log(shoppingCart)
console.log(shoppingCart.getTotalPrice())
