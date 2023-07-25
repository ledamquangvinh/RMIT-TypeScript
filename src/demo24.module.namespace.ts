/**
 * Define namespace for package of module
 */

export namespace MyLib {
    export const PI : number    = 3.14
    export const triple         = (value: number) : number => value * 3

    export class Fraction {
        #num : number = 1
        #dex : number = 1

        constructor(num? : number, dex? : number) {
            if(num !== undefined) {
                this.#num = num
            }

            if(dex !== undefined && dex !== 0) {
                this.#dex = dex
            }
        }

        get num() {
            return this.#num
        }

        get dex() {
            return this.#dex
        }

        set num(value : number) {
            if(value !== undefined) {
                this.#num = value
            }
       
        }

        set dex(value : number) {
            if(value !== undefined)
                this.#dex = value
        }

        public toString() : string {
            return `(${this.#num}) / (${this.#dex})`
        }
    }
}

