// Q1
const age = 18;
let height = 70;

if (age > 18 && height > 60)
    console.log('he will carry the car')
else
    console.log('he will sit in the car')

// Q2
const mathMark = 80;
const englishMark = 80;

if (mathMark > 80 || englishMark > 85) {
    console.log('he will get a admission')
}
else
    console.log('he will get marriage')

// Q3
const result = 5;
const familyIncome = 9000;
if (result === 5 && familyIncome < 10000) {
    console.log('he will get a scholarship')
}
else
    console.log('he wil have to pay tuition fee')

// Q4
const workerAge = 18;
const workExperience = 2;

if (workerAge < 30 && workExperience > 2) {
    console.log('he will be able to attend the job exam')
}
else
    console.log('he will not be able to attend the job exam')

// Q5
const numberOfEgg = 15;
const isHaveChicken = false;

if (numberOfEgg > 12 || isHaveChicken === false) {
    console.log('I will cook korma')
}
else
    console.log('I will eat bread and banana')

//Q6
const bodyTemperature = 101
const isCough = false
if (bodyTemperature || isCough)
    console.log('I will go to the doctor')
else
    console.log('I will sleep')

//Q7
const attendance = 80
const isHomeworkDone = false

if (attendance > 80 && isHomeworkDone === true) {
    console.log('You will appear in exam')
}
else
    console.log('auto fail')

//Q8
const isCurrent = true;
const isMobileHasCharge = true;

if (!isCurrent && !isMobileHasCharge) {
    console.log('I will study')
}
else
    console.log('I will play games')

//Q9
const shirtPrice = 1000
const isHaveCoupon = true
if (shirtPrice > 1000 && isHaveCoupon)
    console.log('I will give 20 percent discount')
else
    console.log('I will not give any discount')