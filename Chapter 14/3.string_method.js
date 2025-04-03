//Q1
const s1 = 'Raju,Rana,Hasan,Kabir,Mahi'
const arr1 = s1.split(',')
console.log(arr1)

//Q2
const arr2 = [...arr1]
const s2 = arr2.join(',')
console.log(s2)

//Q3
const s3 = 'function if else while'
const arr3 = s3.split(' ')
console.log(arr3)

//Q4
const language = ['JavaScript','Python','Java']
const languageString = language.join(';')
console.log(languageString)

//Q5
const loops = "for,while,for-in,for-of,do-while"
const loopArr = loops.split(',')
console.log(loopArr)

//Q6
let s4 = ' console log debug '
s4 = s4.trim()
console.log(s4)

//Q7
const str1 = 'push'
const str2 = 'pop'
const str3 = 'shift'
const str4 = 'unshift'
const str5 = str1.concat(str2, str3,str4)
console.log(str5)

//Q8
const str6 = 'Hello JavaScript Developers'
const ss = str6.slice(6,16)
console.log(ss)

//Q9
const str7 = 'Code more learn more'
const ss1 = str7.substring(10,16)
console.log(ss1)
