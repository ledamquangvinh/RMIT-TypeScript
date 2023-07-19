/**
 * Unknown Type in TypeScript
 */

//unknown 
let not_sure : unknown      = 3;
console.log("not_sure: ", not_sure, typeof(not_sure));

not_sure                    = "Hello world";
console.log("not_sure: ", not_sure, typeof(not_sure));

not_sure                    = true;
console.log("not_sure: ", not_sure, typeof(not_sure));

// special case of unknown type

let maybe : unknown = true;
// const num : number    = maybe; 
//we cannot assign unknown to number type because 'maybe' have content "true"(boolean type)

if(maybe === true) {
    const value_boolean : boolean = maybe;
    console.log("value = ", value_boolean, typeof(value_boolean));
}

maybe = "helloworld123"
if(typeof(maybe) === 'string'){
    const value_string : string = maybe;
    console.log("value = ", value_string, typeof(value_string));
}