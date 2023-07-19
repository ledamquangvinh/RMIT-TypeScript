/**
 * Any type: unknown type of object
 */

let number : any = 1;
console.log("value: ", number, typeof(number));

number = "hello world";
console.log("value: ", number, typeof(number));

let s : string = number;
console.log("value: ", s, typeof(s));

number = 111;
s = number.toString();
console.log(s, typeof(s));

s = number;
console.log(s, typeof(s));