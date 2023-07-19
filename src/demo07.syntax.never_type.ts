/**
 * Never - is return type of Excerption (Return or not Return)
 */

const show_error = (message : string) : never => {
    throw new Error(message);
}

const calculate = () => {
    try{
        show_error("Something is failed");
    } catch (e) {
        console.error(e);
    }
}

calculate();