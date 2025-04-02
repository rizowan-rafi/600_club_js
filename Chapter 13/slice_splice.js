//Q1
const fruits = ['Apple','Banana','Cherry','Date']
const selectedFruits = fruits.slice(1,3)
console.log(selectedFruits)

//Q2
const cars = ['Tesla','BMW','Toyota','Ford']
const selectedCars = cars.slice(0,2)
console.log(selectedCars)

//Q3
const movieList = ['Inception','Titanic','Joker','Avatar','Interstellar']
const deletedMovieList = movieList.splice(2,2,'Batman','Superman')
console.log(movieList, deletedMovieList)

//Q4
const players = ['Messi','Ronaldo','Neymer','Mbappe']
players.splice(2,1,'Halland')
console.log(players)