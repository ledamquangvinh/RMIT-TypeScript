"use strict";
class Circle {
    _name = "no-name";
    constructor(name) {
        if (name !== undefined) {
            this._name = name;
        }
    }
    draw(size) {
        console.log(`${this._name} is drawing with size ${size}`);
    }
}
const circle = new Circle("The Ring");
circle.draw(100);
//# sourceMappingURL=demo19.oop.heritage.js.map