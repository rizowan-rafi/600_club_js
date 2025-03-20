//Q1
const book = {
    title: 'himu',
    author: 'Humayon Ahmed',
    pages: 100,
    price: 250,
}
console.log(Object.keys(book));
console.log(Object.values(book));

//Q2
const article = {
    title: 'Learning JS',
    category: 'Programming'
}

if ('author' in article) { 
    console.log(article.author);
}
else
    console.log('No author found');

//Q3
const laptop = {
    brand: 'Dell',
    model: 'Inspiron',
    price: 45000
}
for (let key in laptop) { 
    console.log(key, laptop[key]);
}

//Q4
const phone = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    price: 85000
}

const keys = Object.keys(phone);
for (let key of keys) { 
    console.log(key,phone[key]);
}

//Q5
const bike = {
    brand: 'Hero',
    price: 120000,
    model: 'Splendor'
}
const bikeValues = Object.values(bike);
console.log(bikeValues);

//Q6
const books = {
    book1: 'Harry Potter',
    book2: 'The Hobbit',
    book3: 'Game of Thrones',
}
for (let key in books) {
    console.log(books[key]);
}

//Q7
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
}

let sum = 0;
for (let key in numbers) {
    sum += numbers[key];
}
console.log(sum)

//Q8
const player = {
    name: 'Messi',
    team: 'Argentina',
    goals: 91,
}
const playerValues = Object.values(player);
console.log(playerValues);

//Q9
const building = {
    floors: 10,
    address: {
        street: 'Main Road',
        city: "Dhaka"
    },
    type: 'Commercial'
}
for (let key in building) {
    console.log(key, building[key]);
}
    