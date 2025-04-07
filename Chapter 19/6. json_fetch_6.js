// async await function
// Q1
/* async-await is used to make a function asynchronous and fetch data from server */

//Q2
const fetchUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2')
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.error('Error:', error)
    }
}
fetchUser()

//Q3
/* when there is asynchronous task one after another,then we have to write callback function one inside another.this things looks like a pyramid.this multiple callback function is called callback hell or pyramid of doom.
it happens when we have to handle a lot of async tasks at a same time.
best way to avoid callback hell is use async-await function.
*/

//Q4
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))

const loadPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.error('Error:', error)
    }
}

loadPosts()

//Q5
async function loadComments() { 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/comments')
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.error('Error:', error)
    }
    finally {
        console.log('Request completed')
    }
}

loadComments()

//Q6
async function loadUser(ID) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ID}`)
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.error('Error:', error)
    }
    
}

loadUser(1)