/**
 * Void - look like void in C
 */

let val : void = undefined;
console.log("value: ", val, typeof(val));

// val = null; // error because is undefine

function sayHello() : void {
    console.log("Hello world");
}

sayHello();

const sayHi = () : void => {
    console.log("hi everybody");
}

sayHi();
