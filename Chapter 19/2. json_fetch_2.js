// promise
//Q1
const user = ['a', 'b', 'c', 'd', 'e',]
const userAvailable = true;
const Promise1 = new Promise((resolve, reject) => {
    if (userAvailable) {
        resolve(user);
    }
    else {
        reject('User data is not available');
    }
}
)
Promise1
    .then((users) => console.log(users))
    .catch((err) => console.log(err))

//Q2
const amount = 100;
const Promise2 = new Promise((resolve, reject) => {
    if (amount > 0) {
        resolve(`amount : ${amount}. payment successfully `);
    }
    else {
        reject('Insufficient funds');
    }
})
Promise2
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err))

//Q3
function sendEmail(email) {
    const validEmail = [
        "rafi.dev@gmail.com",
        "ayesha.rahman@yahoo.com",
        "john_doe123@hotmail.com",
        "sadia.khan@outlook.com",
        "tanvir.hasan@ruet.ac.bd"
    ];
    new Promise((resolve, reject) => {
        if (validEmail.includes(email)) {
            resolve(`Email from Nigerian prince`);
        }
        else {
            reject('Lets Dance in the spam folder');
        }
    })
        .then((msg) => console.log(msg))
        .catch((err) => console.log(err))
}

sendEmail("sadia.khan@outlook.com");
sendEmail("sadia.khan@look.com");