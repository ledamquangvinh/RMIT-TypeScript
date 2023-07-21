"use strict";
class Person {
    name;
}
const person = new Person();
console.log(person);
person.name = "Henry";
console.log(person);
class School {
    name = "RMIT";
    constructor(name) {
        if (name !== undefined) {
            this.name = name;
        }
    }
    err() {
        console.log("Cannot access readonly property");
    }
}
const sc = new School();
console.log(sc);
const sc_2 = new School("MiT");
console.log(sc_2);
class Point_2D {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
const point_1 = new Point_2D();
console.log(point_1);
const point_2 = new Point_2D(3, 4);
console.log(point_2);
//# sourceMappingURL=demo17.oop.class.js.map