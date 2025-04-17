//Q1
/*
IIFE is function in js that is Runs immediately after being defined.
we use it when we need to run a function only one time
*/

//Q2
(function () {
    console.log('I am isolated from outer scope!')
})();

//Q3
(() => {
    console.log('borrow from arrow')
})();
    
//Q4
        ((temp) => {
    console.log(`the temp in celsius from kelvin is ${(temp-273.15).toFixed(2)}`)
})(300)