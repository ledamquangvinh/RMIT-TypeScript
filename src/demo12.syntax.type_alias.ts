/**
 * Type Alias in TS
 */

// define the temp type for code - Struct in C/C++

type Point = {
    x       : number;
    y       : number;
    z?      : number;
}

const printCoord = (point : Point) : void => {
    console.log("X = ", point.x);
    console.log("Y = ", point.y);
    if(point.z !== undefined) {
        console.log("Z = ", point.z);
    }
}

printCoord({x : 10, y : 20, z : 30});
printCoord({y : 40, x : 100});
