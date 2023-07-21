/**
 * Composing Type
 */

// Union
type Flag   = true | false
type Option = 1 | 2 | 3

let first_flag : Flag = true
console.log(`first flag: ${first_flag} - type: ${typeof(first_flag)}`)

first_flag = false
console.log(`first_flag: ${first_flag} type - ${first_flag}`)

// first_flag = "hello" => String cannot assigned to flag

let opt : Option = 2
console.log(`opt: ${opt} - type: ${typeof(opt)}`);

const getLength = (obj: string | string[]) => obj.length

console.log(getLength('Hello World'))
console.log(getLength(["hello world", "Peter", "Marry and Tom"]))

// Generic
type NumArray = Array<number>
const arr_num : NumArray = [1, 2, 3];
console.log(arr_num)

// Stuctural Type system

interface MyPoint {
    x   : number
    y   : number
}

const logMyPoint = (p : MyPoint) => {
    console.log(p)
}

const point = {x: 100, y: 200}
logMyPoint(point)

class SuperPoint {
    x   : number
    y   : number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

const new_point = new SuperPoint(45, 88)
logMyPoint(new_point)