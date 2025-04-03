//Q1
const city = 'Chattogram'
console.log(city.indexOf('g'))

//Q2
const division = 'Sylhet'
console.log(division.includes('y'))

//Q3
const name = 'Rifat'
console.log(name[name.length - 1])

//Q4
const language = 'javascript'
console.log(language.indexOf('rip'))

//Q5
const text = 'Immutable'
console.log(text.length)
text[0] = 'A' // can't as string is immutable
// console.log(text) // TypeError: Cannot assign to read only property '0' of string 'Immutable'
