//Q1
const headphone = {
    brand: 'Sony',
    color: 'red',
    price: 3000,
}
Object.freeze(headphone)
headphone.type = 'neckband'
console.log(headphone)

//Q2
const player = {
    name: 'Messi',
    goals: 800,
    club: 'Inter Miami'
}
Object.freeze(player)
player.age = 31
console.log(player)

//Q3
const book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    pages: 500,
}
Object.seal(book)
book.author = 'Rowling'
console.log(book)

//Q4
const gadget = {
    name: 'iPhone',
    price: 120000,
    color: 'black',
}
delete gadget.price
console.log(gadget)

//Q5
const animal = {
    name: 'Tiger',
    location: 'Sundarban'
}
Object.freeze(animal)

//Q6
const food = {
    name: 'Pizza',
    price: 500,
    size: 'Large'
}
Object.seal(food)