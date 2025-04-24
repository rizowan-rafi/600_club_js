const restaurants = [
    {
        id: 1,
        name: 'Pizza Place',
        menu:[{name:'Pepperoni Pizza',price:12}]
    },
    {
        id: 2,
        name: 'Sushi House',
        menu:[{name:'Salmon Sushi',price:15}]
    },
]
const orders = [];
const reviews = [];
const discountCodes = { 'SAVE10': 10, 'WELCOME15': 15 };

// FOOD DELIVERY

// task 1
function getFoodPrice(resName, foodName) {
    const restaurant = restaurants.findIndex(n => n.name === resName)
    if (restaurant === -1)
        return 'Restaurant not found';
    const food = restaurants[restaurant].menu.findIndex(n => foodName === n.name)
    if (food === -1)
        return 'Food Item not found';
    return restaurants[restaurant].menu[food].price;
}

console.log(getFoodPrice('Sushi House', 'Salmon Sushi'))

// task2
function placeOrder(cusName, resName, foodName, disCode) {
    let foodPrice = getFoodPrice(resName, foodName)
    if (typeof foodPrice !== "number")
        return 'Food Item not found'
    if (disCode) {
        if (discountCodes[disCode])
            foodPrice = foodPrice - foodPrice * (discountCodes[disCode]/100)
        else
            return 'Coupon Code Invalid'
    }
    const order = {
        id: orders.length + 1,
        name: cusName,
        restaurantName: resName,
        foodName: foodName,
        foodPrice: foodPrice,
        status: 'Pending'
    }
    orders.push(order)
    return `Your Oder is Successfully placed! Order Id: ${orders.length}`
}

console.log(placeOrder('rafi', 'Pizza Place', 'Pepperoni Pizza'))
console.log(placeOrder('rafa', 'Sushi House', 'Salmon Sushi','SAVE10'))
console.log(placeOrder('rafa', 'Sushi House', 'Salmon Sushi','WELCOME15'))
console.log(orders)

// task 3
function resTotalPrice(resName) {
    const order = orders.filter(r => r.restaurantName === resName)
    if (!order.length)
        return 0;
    console.log('price')
    const totalPrice = order.reduce((acc, cur) => acc + cur.foodPrice,0)
    return totalPrice
}

console.log(resTotalPrice('Sushi House'))

// task 4

function submitReview(orderId,resName,rating,res)
{
    const isOrderIdValid = (orderId <= orders.length && orderId>=1);
    const isresNameValid = orders.find(r => r.restaurantName === resName)
    console.log(orders[orderId - 1].restaurantName === resName)
    if (!isOrderIdValid || !isresNameValid || !(orders[orderId - 1].restaurantName === resName)) {
        
        return "please don't give false review"

    }
    if (orders[orderId - 1].restaurantName === resName) {
        if (rating < 0 && rating > 5) {
            return 'rating must be within 0 and 5'
        }
        if (res.length <20)
            return 'review must be at least 20 character long'

        const review = {
            id: reviews.length + 1,
            orderId: orderId,
            restaurantName: resName,
            rating: rating,
            review: res,
        }

        reviews.push(review)
        return `review has been submitted successfully and your review id ${reviews.length}`
    }


}

console.log(submitReview(2, 'Sushi House', 3,'Great app, super helpful!'))
console.log(submitReview(1, 'Pizza Place', 3,'Great app, super helpful!'))
console.log(reviews)