// inheritance
//Q1
/*
inheritance is a concept in class where we create a parent class which has all the common properties and method and the parent class is inherited by the child class and get all the common properties and method
it is necessary to reduce the repetitive code.
*/

//Q2
/*
we use extends keyword to make relation with parent class and child class like class childClass extends parentClass{}
to call the parent class constructor use super keyword
*/

//Q3

class Vehicle{
    constructor(forWhich, numberOfWheel, capacity, cost) {
        this.forWhich = forWhich
        this.numberOfWheel = numberOfWheel
        this.capacity = capacity
        this.cost = cost
    }
}
class Bus extends Vehicle {
    constructor(forWhich,numberOfWheel,capacity,cost,isBus) {
        super(forWhich,numberOfWheel,capacity,cost)
        this.isBus = isBus
    }
}
class Truck extends Vehicle {
    constructor(forWhich,numberOfWheel,capacity,cost,isTruck) {
        super(forWhich,numberOfWheel,capacity,cost)
        this.isTruck = isTruck

    }
}
class Bike extends Vehicle {
    constructor(forWhich,numberOfWheel,capacity,cost,isBike) {
        super(forWhich,numberOfWheel,capacity,cost)
        this.isBike = isBike

    }
}
const bike = new Bike('Road',2,3,100000,true)
const bus = new Bus('Road',4,50,1000000,true)
const truck = new Truck('Road',4,4,2000000,true)
console.log(bike,bus,truck)

//Q3
class ABF{
    constructor(name,living, canFly, eating) {
        this.name= name
        this.living = living
        this.canFly = canFly
        this.eating =eating
    }
}
class Animal extends ABF{
    constructor(name,living,canFly,canSwim,eating,isBig){
        super(name,living,canFly,eating)
        this.canSwim = canSwim
        this.isBig = isBig
    }
}
class Bird extends ABF{
    constructor(name,living,canFly,canSwim,eating,isBig){
        super(name,living, canFly, eating)
        this.canSwim = canSwim
        this.isBig = isBig
    }
}
class Fish extends ABF{
    constructor(name,living,canFly,canSwim,eating,isBig){
        super(name,living, canFly, eating)
        this.canSwim = canSwim
        this.isBig = isBig
    }
}

const animal= new Animal('Tiger','Land',false,true,'flesh',true)
const bird= new Bird('haming bard','sky',true,false,'small insect',false)
const fish= new Fish('Whale','water',false,true,'fish',true)

console.log(animal, bird, fish)

//Q5

class Furniture{
    constructor(madeOf, noOfLeg, use) {
        this.madeOf = madeOf
        this.noOfLeg = noOfLeg
        this.use = use
    }
}
class Chair extends Furniture{
    constructor(madeOf, noOfLeg, use, isChair) {
        super(madeOf,noOfLeg,use)
        this.isChair = isChair
    }
}

class Table extends Furniture{
    constructor(madeOf, noOfLeg, use, isTable) {
        super(madeOf,noOfLeg,use)
        this.isTable = isTable
    }
}

const chair = new Chair('wood',4,'to sit',true)
const table = new Table('wood',4,'to read',true)
console.log(chair,table)

//Q6
class Animal1 {
    constructor(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }


}

class Dog extends Animal1 {
    constructor(name, age, sound, breed, isTrained) {
        super(name, age, sound);
        this.breed = breed;
        this.isTrained = isTrained;
    }
}

class Cat extends Animal1 {
    constructor(name, age, sound, color, likesToClimb) {
        super(name, age, sound);
        this.color = color;
        this.likesToClimb = likesToClimb;
    }
}

class Parrot extends Animal1 {
    constructor(name, age, sound, canTalk, wingSpan) {
        super(name, age, sound);
        this.canTalk = canTalk;
        this.wingSpan = wingSpan;
    }
}

const dog = new Dog("Buddy", 3, "Woof", "Labrador", true);
const cat = new Cat("Whiskers", 2, "Meow", "White", true);
const parrot = new Parrot("Polly", 1, "Squawk", true, "25cm");

console.log(dog, cat, parrot)

// Q7
/*
DRY means don't repeat yourself. it is principle that states that avoid writing reparative/duplicate code in our project
*/
// example
console.log('hello parrot')
console.log('hello dog')
console.log('hello cat')
// here we write same console log every time.rather we can build a function that avoid the duplicate code
function greet(name) {
    console.log(`hello ${name}`)
}
greet('parrot')
greet('dog')
greet('cat')

