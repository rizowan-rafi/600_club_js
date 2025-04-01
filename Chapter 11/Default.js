// Q1
function sumOfThree(a = 0, b = 0, c = 0){
    return a + b + c;
}

console.log(sumOfThree(10, 20, 30));

//Q2
function depositMoney(amount = 50) {
    return amount;
}
console.log(depositMoney(1000));

//Q3
function bankDetail(name = 'anonymous', amount = 0) {
    return {name: name, amount: amount}
}
const monthlyIncome = bankDetail(undefined,50000)
console.log(bankDetail('rafi', 5000))
console.log(monthlyIncome.name,monthlyIncome.amount)

//Q4
function squareNumber(num = 1) {
    return num * num;
}

console.log(squareNumber(5))

//Q5
function productDetail(name = 'Unknown product', amount = 1) {
    return {name: name, amount: amount}
}

console.log(productDetail('Laptop', 10000))

//Q6
function bookCollection(book = ['JS BOOK']) {
    return book;
}

const favBook = ['first book','second book']
console.log(bookCollection(favBook))

//Q7
function priceDetail(p = { price: 10, quantity: 1 }){
    return p.price * p.quantity;
}

console.log(priceDetail({ price: 15, quantity: 5 }))
console.log(priceDetail())

//Q8
function doubleArray(a = [5, 10, 15]){
    const b = []
    for (i of a) {
        b.push(i * 2);
    }
    return b;
}

console.log(doubleArray([1, 2, 3]))
console.log(doubleArray())

//Q9
function profitCalculator(a = { p: 1000, r: 5 }) {
    return a.p * a.r / 100;
}

console.log(profitCalculator({ p: 1000, r: 20 }))

//Q10
function taxCalculator(a = { salary: 50000, tax: 10 }) {
    const tax = a.salary * a.tax / 100;
    return a.salary - tax;
}

console.log(taxCalculator({ salary: 50000, tax: 20 }))

