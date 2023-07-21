"use strict";
const us = {
    id: 1,
    name: "marry",
};
console.log(`us: ${us} - type: ${typeof (us)}`);
console.log(us);
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const st = new Student(1, "Peter");
console.log(`st: ${st} - type: ${typeof (st)}`);
class Car {
    id;
    name;
    color;
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}
class Animal {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const car1 = new Car(1, "SUV", "red");
const car2 = new Car(2, 'Sedan', 'blue');
const animal = new Animal(3, 'Corgi');
console.log(car1);
console.log(car2);
console.log(animal);
class Superman {
    pid;
    name;
    constructor(pid, name) {
        this.pid = pid;
        this.name = name;
    }
}
const mrSuperMan = new Superman(1007, 'Spider-Man');
console.log(mrSuperMan);
//# sourceMappingURL=demo15.oop.basic_class.js.map