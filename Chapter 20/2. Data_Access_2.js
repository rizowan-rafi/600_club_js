// nullish coalescing, optional chaining
//Q1
let x = null
console.log(x??=75)

//Q2
const product = {name:'laptop',price:50000}
product.stock = product?.stock ?? 0
console.log(product)

//Q3
const productDetail = {name:'mb',price:1000,discount:0}
productDetail.discount = productDetail.discount || 10
console.log(productDetail)

//Q4
const vehicle = { name: 'motor bike' }
const isEngine = vehicle?.engine ?? 'Engine info missing'
console.log(isEngine)

// Q5
const restaurant = { name: 'kacchi vai' }
const isMenu = restaurant?.menu ?? 'Menu not available'
console.log(isMenu)

//Q6
const profile = {name:'rafi'}
const isTwitter = profile?.social?.twitter ?? 'Twitter handle not available'
console.log(isTwitter)