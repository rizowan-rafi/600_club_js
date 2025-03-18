//Q1
const isInvited = true
const moneyAmount = 1000
if (isInvited)
{
    console.log('i will go to birthday party')
    if (moneyAmount > 1000)
        console.log('i will buy gift')
    else
        console.log('i will go empty hand')

}
else
    console.log('blacklist from friend list')

//Q2
const isHaveTea = true
const isHaveBiscuit = true
if (isHaveTea)
{
    
    if (isHaveBiscuit)
        console.log('have biscuit and prepare tea')
    else
        console.log('prepare only tea')
}
else
    console.log('watch star jalsha')

//Q3
const isHaveAccount = true
const isHaveSubcription = true
if (isHaveAccount)
    if (isHaveSubcription)
        console.log('watch premium')
    else
        console.log('watch free version')

//Q4
const isHaveFood = true
const isFoodAppWorking = true
if (isHaveFood)
    console.log('warm the food')
else
{
    if (isFoodAppWorking) {
        console.log('order food')
    }
    else {
        console.log('stay fasted')
    }
}

//Q5
const guestNumber = 500
const isAllGuestHaveGift = true
if(guestNumber>=100)
    if (isAllGuestHaveGift)
        console.log("let's party all night")
    else
        console.log("I will party with myself")