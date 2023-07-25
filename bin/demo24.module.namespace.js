"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLib = void 0;
var MyLib;
(function (MyLib) {
    MyLib.PI = 3.14;
    MyLib.triple = (value) => value * 3;
    class Fraction {
        #num = 1;
        #dex = 1;
        constructor(num, dex) {
            if (num !== undefined) {
                this.#num = num;
            }
            if (dex !== undefined && dex !== 0) {
                this.#dex = dex;
            }
        }
        get num() {
            return this.#num;
        }
        get dex() {
            return this.#dex;
        }
        set num(value) {
            if (value !== undefined) {
                this.#num = value;
            }
        }
        set dex(value) {
            if (value !== undefined)
                this.#dex = value;
        }
        toString() {
            return `(${this.#num}) / (${this.#dex})`;
        }
    }
    MyLib.Fraction = Fraction;
})(MyLib || (exports.MyLib = MyLib = {}));
//# sourceMappingURL=demo24.module.namespace.js.map