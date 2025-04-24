// MFS
const userDatabase = (function () {
    const users = [];
    const transactionHistory = [];
    let processingFee = 0;
    return {
        registerUser: function (name, pin) {
            if (!name || !pin)
                return 'please give name and pin'
            if (typeof pin !== "number" || pin.toString().length != 4)
                return 'pin must be number and at least has 4 digits'
            const newUser = {
                id: users.length + 1,
                name: name,
                pin: pin,
                balance: 0,
            }
            users.push(newUser)
            return true;
        },
        loginUser: function (name, pin) {
            if (!name || !pin)
                return 'please give name and pin'
            const user = users.find(u => u.name === name)
            if (!user)
                return false;
            if (user.pin !== pin)
                return false
            return true
        },
        addMoney: function (name, pin, amount) {
            if (!name || !pin || !amount)
                return 'please give name and pin and amount'
            if (this.loginUser(name, pin)) {
                const user = users.findIndex(u => u.name === name)
                users[user].balance += amount;
                const transaction = {
                    method: 'Add Money',
                    accName: name,
                    amount: amount,
                    balance: users[user].balance
                }
                transactionHistory.push(transaction)
                return `${amount} taka has been added to ${users[user].name} account.Your current balance: ${users[user].balance}`


            }
            return `sorry,the amount can't be added to your account.your money has been refunded`

        },
        checkBalance: function (name, pin) {
            if (!name || !pin)
                return 'please give name and pin'
            if (this.loginUser(name, pin)) {
                const user = users.findIndex(u => u.name === name)
                return users[user].balance;
            }
            return `you don't have access to know the balance of the account`
        },
        sendMoney: function (senderName, senderPin, receiverName, amount) {
            if (!this.loginUser(senderName, senderPin))
                return `you don't have access to send money`
            const user = users.findIndex(u => u.name === senderName)
            if (users[user].balance < amount+15)
                return `you don't have sufficient money`
            const receiverUser = users.findIndex(u => u.name === receiverName)
            if (receiverUser === -1)
                return `can't find the receiver`;
            users[user].balance -= (amount+15)
            users[receiverUser].balance += amount
            processingFee+=15
            const transaction = {
                method: 'Send Money',
                senderName: senderName,
                receiverName: receiverName,
                amount: amount
            }
            transactionHistory.push(transaction)
            return `send money successful`
        },
        // transaction:function (){
        // console.log(transactionHistory);
        // }

    }
})();
console.log(userDatabase.registerUser('rafi',1234))
console.log(userDatabase.registerUser('rafa',1245))
console.log(userDatabase.loginUser('rafa', 1245))
console.log(userDatabase.addMoney('rafi',1234,500))
console.log(userDatabase.checkBalance('rafi',1234))
console.log(userDatabase.sendMoney('rafi',1234,'rafa',300))
console.log(userDatabase.checkBalance('rafi', 1234))
console.log(userDatabase.checkBalance('rafa', 1245))
// userDatabase.transaction()


