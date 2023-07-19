/**
 * Optional Property in TS
 */

const Calculate = (a : number, b? : number) : void => {
    console.log('a: ', a);
    if(b !== undefined) {
        console.log('b: ', b);
    }
}

Calculate(10, 20);
Calculate(10);

