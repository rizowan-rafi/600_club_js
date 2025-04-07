// try-catch-finally
//Q1
try{
const jsonData = { product: 'Date', price: 450 }
// const jsonData = '{ "product": "Date", "price": 450 }'
    const json = JSON.parse(jsonData)
    console.log(json)
}
catch(error){
    console.log('Invalid JSON format')
}

//Q2
function validateInput(email) {
    try {
        if (!email.includes('@')) {
            throw new Error('Invalid email format')
        }
    }
    catch (error) {
        console.log(error.message)
    }
}
validateInput('email')

//Q3
try {
    const jsonData1 = { role: 'CEO', weeklyHours: 1000 }
    const json1 = JSON.parse(jsonData1)
}
catch (error) { 
    console.log('Invalid JSON format')
}
finally {
    console.log('Week is over')
}

//Q4
function stringOnlyParser(str) {
    try {
        if (str === null || str === undefined || str === '') {
            throw new Error('Input must be a string')
        }
    }
    catch (error) {
        console.log(error.message)
    }
}
stringOnlyParser('')

//Q5
try {
    console.log('Deleting account')
}
catch {
    console.log('Failed to delete account')
}
finally {
    console.log('Account deletion attempt finished')
}


