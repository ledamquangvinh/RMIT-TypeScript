"use strict";
const printObj = (obj) => {
    if (typeof obj === 'string') {
        console.log(obj.toUpperCase());
    }
    else {
        console.log(obj);
    }
};
printObj(100);
printObj('hello world');
const getName = (name) => {
    if (Array.isArray(name)) {
        console.log(`Is Array: ${name}`);
    }
    else {
        console.log("name: ", name);
    }
};
getName(['hello', 'world', 'Peter', 'Marry']);
getName("LDQVINH");
//# sourceMappingURL=demo11.syntax.union_type.js.map