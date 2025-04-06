// regex
//Q1
const sentence = 'I bought an orange'
const newSentence = sentence.replace(/orange/g,'graph')
console.log(newSentence)

//Q2

const text = 'I like to have apple and banana'
const a = /ana/
const isAna = a.test(text)
console.log(isAna)

//Q3

const str = 'I am eating apple.apple is good.apple helps me a lot'
const newStr = str.replace(/apple/g,'JavaScript')
console.log(newStr)
