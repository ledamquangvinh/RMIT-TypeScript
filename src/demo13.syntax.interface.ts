/**
 * Interface in TS 
 */

interface Product {
    id : number;
    name : string;
    price : number;
}

let p : Product = {
    id : 1,
    name : 'iPhone 15',
    price : 999.25
}

console.log(p, typeof(p));

interface MyPoint {
    x   : number;
    y   : number;
    z?  : number
}


const printPoint = (point : MyPoint) : void => {
    if(point.x) { console.log('x = ', point.x )};
    if(point.y) { console.log("y = ", point.y )};
    if(point.z) { console.log('z = ', z)};
}

let my_point : MyPoint = {
    y : 200,
    z : 300,
    x : 100
}

printPoint(my_point);
printPoint({x : 55, z:88} as MyPoint);