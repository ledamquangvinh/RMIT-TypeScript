"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demo23_module_lib_1 = require("./demo23.module.lib");
(0, demo23_module_lib_1.default)();
console.log(`PI is ${demo23_module_lib_1.PI}`);
console.log(`Double value of 1: ${(0, demo23_module_lib_1.double)(1)}`);
const shape = new demo23_module_lib_1.Shape('Green');
console.log(shape.color);
//# sourceMappingURL=demo23.module.main.js.map