/**
 * Interface Type
 */

// Type by Interface
let strHello : string = 'Hello World';
console.log(`strHello = ${strHello} - type: ${typeof(strHello)} `)

let nValue = 1.1
console.log(`value: ${nValue} - type: ${typeof(nValue)}`)

//Define object
const user = {
    id: 1,
    name: "Peter"
}

console.log(`User: ${user} - type ${typeof(user)}`);


// Define Product type
interface User {
    id: number
    name: string
    price: number
}

// Define variable u as type Product
const u : User = {
    id      : 1,
    name    : "marry",
    price   : 1000 
}

console.log(`user: ${u} - type: ${typeof(u)}`)
console.log(u)