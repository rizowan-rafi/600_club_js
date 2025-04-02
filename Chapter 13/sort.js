//Q1
const numbers = [50,12,25,8,15]
const sortNumbers = numbers.sort((a, b) =>a-b)
console.log(sortNumbers)

//Q2
const numbers1 = [13,2,45,9,6]
const sortNumbers1 = numbers1.sort((a, b) => b - a)
console.log(sortNumbers1)

//Q3
const friends = [{ name: 'Ali', age: 29 }, { name: 'Sara', age: 22 }, { name: 'Tariq', age: 35 }]
const sortFriends = friends.sort((a, b) => a.age - b.age)
console.log(sortFriends)

//Q4
const names = ['nabil','zubayer','sarwar','delwar']
const sortNames = names.sort()
console.log(sortNames)