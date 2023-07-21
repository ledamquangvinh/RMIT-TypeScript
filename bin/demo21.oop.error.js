"use strict";
class MsgError extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, MsgError.prototype);
    }
    print = () => { return `=> Error: ${this.message} `; };
}
const msgError = new MsgError('Cannot create instant');
console.error(msgError.print());
//# sourceMappingURL=demo21.oop.error.js.map