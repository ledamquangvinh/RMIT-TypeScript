/**
 * Error in class
 */

class MsgError extends Error {
    public constructor (msg : string)   {
        super(msg)

        Object.setPrototypeOf(this, MsgError.prototype)
    }

    public print = () : string => {return `=> Error: ${this.message} `}
}

const msgError : MsgError = new MsgError('Cannot create instant')
console.error(msgError.print());