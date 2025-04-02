// map,filter,find,findIndex,three parameter
//Q1
const snacksPrice = [30,45,20,60,10]
const updatedPrice = snacksPrice.map(snack => snack + 13)
console.log(updatedPrice)

//Q2
const players = ['Messi','Maradona','Pele','Zidane','Ronaldo']
const updatedPlayers = players.filter(player => player.length > 5)
console.log(updatedPlayers)

//Q3
const numbers = [10,15,20,25,30,35]
const firstNumber = numbers.find(number => number>20)
console.log(firstNumber)

//Q4
const heights = [65,70,68,72,68,73]
const height69 = heights.filter(height => height > 69)
console.log(height69)

//Q5
const numbers1 = [7,10,15,20,25,30]
const updatednumbers1 = numbers1.map(number => number / 3)
console.log(updatednumbers1)

//Q6
const friends = ['Leonardo','Brad Pitt','Kate Winslet','Audrey Hepburn','Johnny Depp']
const undefinedFriends = friends.map(friend =>friend[2])
console.log(undefinedFriends)

//Q7
const people = ['Tom','Harry','Sam','Jack']
const manWithH = people.find(man => man[0]==='H')
console.log(manWithH)

//Q8
const arr = [1,2,3,4,5]
arr.forEach(a => console.log(a));

//Q9
const animal = ['cow','goat','sheep','horse']
animal.forEach(a=>console.log(a))