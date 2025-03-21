//Q1
function taxCalculator(income) {
    if (income <= 50000) {
        return 10;
    } else if (income <= 100000) {
        return 20;
    } else if (income <= 200000){
        return 30;
    }
    return 40;
}

console.log(taxCalculator(150000));

//Q2
function delivaryCost(num) {
    if (num <= 10)
        return 100;
    else if (num <= 20)
        return 300;
    else if (num <= 50)
        return 1000;
    return 100*num;
}

console.log(delivaryCost(25));

//Q3
function calculateGrade(num) {
    if (num >= 80)
        return "A";
    else if (num >= 70)
        return "B";
    else if (num >= 60)
        return "C";
    else if (num >= 50)
        return "D";
    return "F";
}

console.log(calculateGrade(75));