// fetch
//Q1
/*
after get data from fetch function we have to do response.json() because fetch return the data in json format. to convert json data to js object we use response.json() which return js object.
*/

//Q2
/*
for sending HTTP request means to get data from a server or to post data to a server.
*/

//Q3
/*
fetch is used to specifically sending HTTP request wheres promise is used to do asynchronous tasks.
*/

//Q4
const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => response.json())
    // .then(data => console.log(JSONs.stringify(data)))
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

//Q5
const url1 = 'https://jsonplaceholder.typicode.com/users/1'
fetch(url1)
    .then(response => response.json())

    // .then(data => console.log(JSONs.stringify(data)))

    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

