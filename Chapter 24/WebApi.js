//Q1
/*
local Storage can store data in browser even if we close the browser or tab
Session Storage can store data in browser when the browser or tab is open.when the browser or tab is closed,the data is removed

*/

//Q2
localStorage.setItem('mode', 'dark')
let mode = localStorage.getItem('mode')
localStorage.setItem('mode','light')

//Q3
sessionStorage.setItem('userToken','abcd1234')
let userToken = sessionStorage.getItem('userToken')
console.log(userToken)

//Q4
localStorage.setItem('userName','Alex')
localStorage.removeItem('userName')

//Q5
history.go(-2)