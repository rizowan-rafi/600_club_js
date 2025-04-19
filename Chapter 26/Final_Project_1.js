// Shopping cart
let products = [{id:1,name:'Smartphone',price:200,stock:10},{id:2,name:'Laptop',price:800,stock:5}]
let cart = [];
let orders = [];
function addToCart(productId, productQuantity) {
    
    const product = products.find(p => p.id === productId)
    if (!product)
        return 'Product not found'
    const productIndex = products.indexOf(product)
    if(product.stock>=productQuantity)
        products[productIndex].stock -= productQuantity;
    else
        return 'stock not available'
    const productDetails = { pId: productId, pQuantity: productQuantity, price: product.price }
    cart.push(productDetails)
    return `${product.name} added to cart.Quantity:${productQuantity}`
        
    
}
addToCart(2,3) // add to cart
addToCart(1,3) // add to cart


function viewCart() {
    if (!cart.length)
        console.log('no product added to cart')
    let count = 1;
    console.log('Cart Details ::')
    cart.forEach(p => {
        console.log(`${count}. productId: ${p.pId}, productQuantity: ${p.pQuantity}, price: ${p.price}`)
        count++;
    });
}

viewCart() // viewCart

function placeOrder() {
    if (!cart.length)
        return 'Your cart is empty'
    let sum = 0;
    for (const item of cart) {
        sum += item.pQuantity * item.price;
    }
    const orderDetails = { totalPrice: sum }
    orders.push(orderDetails)

    // cart = []
    cart.length=0

    return 'Order placed';
}

console.log(placeOrder()) // Place Order
console.log(cart,orders) // cart and orders array after order completed