/**
 * Base Type of TypeScript
 */

// Boolean 
console.clear();
let is_Done : boolean = false;
console.log(`is_done = ${is_Done} - ${typeof(is_Done)}`);

// Number
let decimal : number = 6;           // integer
let hex     : number = 0xf000d;     // hexa
let bin     : number = 0b10101;     // binary
let octal   : number = 0o744;       // octal

console.log(`Decimal    = ${decimal} - ${typeof(decimal)}`);
console.log(`hex        = ${hex} - ${typeof(hex)}`);
console.log(`bin        = ${bin} - ${typeof(bin)}`);
console.log(`octal      = ${octal} - ${typeof(octal)}`);

let big     : bigint = 100n
console.log(`Big int    = ${big} - ${typeof(big)}`);

//String 
let color   : string = "light blue"
color                = "dark red"
console.log(`Color      = ${color} - ${typeof(color)}`)




