//Q1
const player = {
    name: 'Vinicious Jr',
    age: 25,
    position: 'forward',
    team: 'Real Madrid',
    goals: 30,
    sport: 'football',
}
console.log(player.team)

//Q2
const laptop = {
    make: 'apple',
    model: 'macbook pro',
    year: 2021,
    color: 'black',
    screenSize: '15 inches',
    processor: 'i5',
    memory: '8GB'
}
console.log(laptop.screenSize)

//Q3
const favPlace = {
    name: "Cox's Bazar",
    distance: '400km',
    popularity: 'high',
}
console.log(favPlace['popularity'])

//Q4
const phone = {
    brand: 'Nokia',
    color: 'black',
    price: 5000
}
console.log(phone['price'])

//Q5
const library = {
    name: 'Public Library',
    location: 'Dhaka',
    books: 5000,
}
console.log(library.location)

//Q6
const movie = {
    name: 'Inception',
    director: 'Nolan',
    year: 2010,
    genre: 'Action, Adventure, Crime',
    rating: 9,
}
console.log(movie['rating'])

//Q7
const college = {
    name: 'ndc',
    established: 1949,
    groups: ['science','arts','commerce'],
}

console.log(college.groups[1])

//Q8
const family = {
    father: {
        name: 'Md Asaduzzaman',
        age: 45,
        occupation: 'Teacher',
    },
    mother: {
        name: 'Nazma Lipi',
        age: 40,
        occupation: 'Teacher',
    }
}
const fatherAge = family.father.age;
const motherAge = family.mother.age;
console.log(fatherAge+motherAge)