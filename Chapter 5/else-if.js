//Q1
let friendBill = 2500
if (friendBill >= 6000)
{
    const discount = friendBill/100 * 15
    friendBill -=discount
}
else if (friendBill >= 3000)
{
    const discount = friendBill / 100 * 5
    friendBill-=discount
}
console.log(friendBill)

//Q2
let customerAge = 10;
let customerBill = 1000
if (customerAge < 12)
    customerBill = 0
else if (customerAge >= 60)
    customerBill = customerBill * 0.5

console.log(customerBill)

//Q3
let bankBalance = 5500
if (bankBalance >= 5000)
    console.log('you are rich.marry me')
else if (bankBalance >= 1000)
    console.log('enjoy your life')
else
    console.log('deposit')

// Q4

let studentGrade = 75;
if (studentGrade >= 80)
    console.log('A+')
else if (studentGrade >= 50)
    console.log('Pass')
else
    console.log('fail')

// Q5
let bookPage = 500
if (bookPage >= 500)
    console.log('heart-attack size book')
else if(bookPage>=100)
    console.log('Mid-size book')
else
    console.log('Small book')

//Q6
let temp = 20
if(temp>=20)
    console.log('hot hot')
else if(temp>=0)
    console.log('cool cool')
else
    console.log('Ice')

//Q7
let gameLevel = 40
if(gameLevel>=50)
    console.log('Pro Gamer')
else if(gameLevel>=10)
    console.log("Expert")
else
    console.log('novice')
    