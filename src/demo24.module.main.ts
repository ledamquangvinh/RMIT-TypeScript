/**
 * Define Main function using namesapce module
 */

/// <reference path="demo24.module.namespace.ts">

import { MyLib } from "./demo24.module.namespace";

const fraction : MyLib.Fraction = new MyLib.Fraction(1, 2);
console.log(fraction.toString());
console.log(`PI: ${MyLib.PI}`)
console.log(`triple of 2: ${MyLib.triple(2)}`)