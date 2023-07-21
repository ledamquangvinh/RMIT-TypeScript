/**
 * Class heritage
 */

interface Shape {
    _name : string  // define property
    draw(size: number): void    //define prototype
}

class Circle implements Shape {
    _name: string = "no-name"; // redefine propety
    constructor(name? : string) {
        if(name !== undefined) {
            this._name = name;
        }
    }
    draw(size: number): void {
        console.log(`${this._name} is drawing with size ${size}`)
    }
}

const circle = new Circle("The Ring");
circle.draw(100);