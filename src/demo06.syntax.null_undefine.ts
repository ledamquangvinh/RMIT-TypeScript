/**
 * null vs undefine in TS
 */

let a : undefined = undefined;
let b : null = null;

console.log(a, typeof(a));
console.log(b, typeof(b));

// null and undefine only assign for unknown types
let c : unknown = a;
console.log("c", c, typeof(c));

c = b;
console.log("c", c, typeof(c));

// cannot assign null or undefine value for numbers or string
// let d : number = null;              // => Error
// let e : string = undefined;         // => Error



