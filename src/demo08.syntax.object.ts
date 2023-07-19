/**
 * Object in TS
 */

let obj : object | null = {
    id    : 1,
    name  : 'product',
    price : 199
}

console.log("Object: ", obj, typeof(obj));

obj = null;
console.log("Object: ", obj, typeof(obj));

obj = { value : 1000 };
console.log("Object: ", obj, typeof(obj));