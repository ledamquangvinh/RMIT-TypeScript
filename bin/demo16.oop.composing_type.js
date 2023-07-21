"use strict";
let first_flag = true;
console.log(`first flag: ${first_flag} - type: ${typeof (first_flag)}`);
first_flag = false;
console.log(`first_flag: ${first_flag} type - ${first_flag}`);
let opt = 2;
console.log(`opt: ${opt} - type: ${typeof (opt)}`);
const getLength = (obj) => obj.length;
console.log(getLength('Hello World'));
console.log(getLength(["hello world", "Peter", "Marry and Tom"]));
const arr_num = [1, 2, 3];
console.log(arr_num);
const logMyPoint = (p) => {
    console.log(p);
};
const point = { x: 100, y: 200 };
logMyPoint(point);
class SuperPoint {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const new_point = new SuperPoint(45, 88);
logMyPoint(new_point);
//# sourceMappingURL=demo16.oop.composing_type.js.map