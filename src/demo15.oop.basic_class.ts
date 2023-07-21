/**
 * Class vs Interface
 */

//define Interface
interface MyUser {
    id  : number
    name: string
}

const us : MyUser = {
    id      : 1,
    name    : "marry",
}

console.log(`us: ${us} - type: ${typeof(us)}`)
console.log(us);

// define class
class Student {
    id : number
    name : string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}

const st : Student = new Student(1, "Peter")
console.log(`st: ${st} - type: ${typeof(st)}`)

// class implement from interface
interface Obj {
    id  : number
    name: string
}

class Car implements Obj {
    id      : number
    name    : string
    color   : string
    
    constructor(id: number, name: string, color: string) {
        this.id = id
        this.name = name
        this.color = color
    }
}

class Animal implements Obj {
    id      : number
    name    : string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

const car1      : Car = new Car(1, "SUV", "red")
const car2      : Car = new Car(2, 'Sedan', 'blue')
const animal    : Animal = new Animal(3, 'Corgi')

console.log(car1)
console.log(car2)
console.log(animal)

// Define object with interface but use pattern of Object Class
interface Person {
    pid     : number
    name    : string
}

class Superman {
    pid     : number
    name    : string

    constructor(pid: number, name: string) {
        this.pid = pid
        this.name = name
    }
}

const mrSuperMan : Person = new Superman(1007, 'Spider-Man')
console.log(mrSuperMan)