/**
 * Inherit in class
*/

class Animals {
    _name : string = 'no-name'
    constructor(name?: string){
        if(name !== undefined){
            this._name = name
        }
    }

    // define getter setter
    get name() { return this._name}
    set name(value: string) {
        if(value !== undefined) {
            this._name = value
        }
    }
}

class Dog extends Animals {
    _color: string = 'no-color'
    constructor(name?: string, color? : string) {
        super()
        if(color !== undefined) {
            this._color = color
        }
    }

    get color() { return this._color }
    set color(value: string) {
        if(value !== undefined) {
            this._color = value
        }
    }
}

const dog_1 : Dog = new Dog();
console.log(dog_1)

const dog_2 : Dog = new Dog('Corgi', 'Yellow white')
console.log(dog_2)

dog_2.name = 'Pug'
console.log(dog_2)