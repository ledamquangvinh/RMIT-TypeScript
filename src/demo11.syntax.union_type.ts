/**
 * Union Type in TS
 */

const printObj = (obj : number | string) : void => {
    if(typeof obj === 'string') {
        console.log(obj.toUpperCase());
    }
    else {
        console.log(obj);
    }
}

printObj(100);
printObj('hello world');

// Compare Array(String) to String

const getName = (name : string[] | string) : void => {
    if(Array.isArray(name)) {
        console.log(`Is Array: ${name}`);
    }
    else {
        console.log("name: ", name);
    }
}

getName(['hello', 'world', 'Peter', 'Marry']);
getName("LDQVINH");