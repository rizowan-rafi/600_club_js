// bind,call,apply
//Q1
const team = {name:'bangladesh',players:11,play(){console.log(`${this.name} has ${this.players} players`)}}
team.play()
const tournament = { name: 'world cup', players: 22 }
const tournamentInfo = team.play.bind(tournament)
tournamentInfo()

//Q2
const car = { speed: 120, price: 1000000, drive() { console.log(`this car has ${this.speed} speed and price ${this.price}`)}}
const bike = { speed: 50, price: 400000 }
const truck = { speed: 300, price: 2000000 }
car.drive.call(bike)
car.drive.call(truck)

//Q3
const employee = { name: 'john', role: 'employee', details() { console.log(`${this.name} is ${this.role}`)}}
const manager = { name: 'sara', role: 'manager' }
employee.details()
employee.details.apply(manager)

//Q4
const classroom = {name:'hsc',students:['john','sara','rafi','pavel'],attendance(){console.log(`${this.name} has ${this.students.join(',')}`)}}
classroom.attendance()
const lab = {name:'chemistry lab',students:['rafi','sara','john','abir']}
const labInfo = classroom.attendance.bind(lab)
labInfo()