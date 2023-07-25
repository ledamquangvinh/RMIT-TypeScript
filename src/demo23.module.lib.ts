/**
 * Define Module with name Lib 
 */

export default function sayHelo() {
    console.log('Hello World')
}

export const PI = 3.14

export const double = (value: number) : number => value * 2

export class Shape {
    #color : string = 'no-color'
    constructor(color: string) {
        if(color !== undefined) {
            this.#color = color
        }
    }

    get color() {
        return this.#color
    }

    set color(value : string) {
        if(value !== undefined) {
            this.#color = value
        }
    }
}