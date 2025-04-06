// scope 
//Q1
let taxRate = 15

function calculateTax(amount) {
    return amount * (taxRate / 100)
}

//Q2
function secret() {
    let insideSecret = 'internal secret hiding place'
}
// console.log(insideSecret) // ReferenceError: insideSecret is not defined

//Q3
if (true) {
    let temperature = 98.5
}
// console.log(temperature) // ReferenceError: temperature is not defined

//Q4
function schoolDetails() {
    let schoolName = 'JZS'
    function displaySchoolName() { 
        console.log(schoolName)
    }
    displaySchoolName()
}

schoolDetails()
