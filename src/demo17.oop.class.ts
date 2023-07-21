/**
 * Class in TS
 */

// Define a class without constructor

class Person {
    name! : string;     // optional type
}

const person : Person = new Person()
console.log(person)
person.name = "Henry"
console.log(person)

// Read Only

class School {
    readonly name: string = "RMIT"
    // only user constructor to initial assign value to readonly property
    constructor(name? : string){
        if(name !== undefined) {
            this.name = name
        }
    }

    err() {
        console.log("Cannot access readonly property")
    }
}

const sc : School = new School()
console.log(sc)
const sc_2 : School = new School("MiT")
console.log(sc_2)

// Constructors

class Point_2D {
    x : number
    y : number

    constructor(x: number = 0, y: number = 0) {
        this.x = x
        this.y = y
    }
}
const point_1 : Point_2D = new Point_2D()
console.log(point_1)
const point_2 : Point_2D = new Point_2D(3, 4)
console.log(point_2)