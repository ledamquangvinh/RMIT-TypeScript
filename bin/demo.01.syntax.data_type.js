"use strict";
console.clear();
let is_Done = false;
console.log(`is_done = ${is_Done} - ${typeof (is_Done)}`);
let decimal = 6;
let hex = 0xf000d;
let bin = 0b10101;
let octal = 0o744;
console.log(`Decimal    = ${decimal} - ${typeof (decimal)}`);
console.log(`hex        = ${hex} - ${typeof (hex)}`);
console.log(`bin        = ${bin} - ${typeof (bin)}`);
console.log(`octal      = ${octal} - ${typeof (octal)}`);
let big = 100n;
console.log(`Big int    = ${big} - ${typeof (big)}`);
let color = "light blue";
color = "dark red";
console.log(`Color      = ${color} - ${typeof (color)}`);
//# sourceMappingURL=demo.01.syntax.data_type.js.map