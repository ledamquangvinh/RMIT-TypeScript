/**
 * define main function of module 
 */

// import * from './demo23.module.lib'
import sayHelo, { PI, Shape, double } from "./demo23.module.lib";

sayHelo();
console.log(`PI is ${PI}`);
console.log(`Double value of 1: ${double(1)}`)

const shape : Shape = new Shape('Green')
console.log(shape.color);