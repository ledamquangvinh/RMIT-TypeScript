/**
 * Static in Class
 */

class MyShape {
    static #count           : number = 0 // '#' is private can only access inside class
    private static _color   : string = 'no-color'
    public static num              : number = 999
    
    
    public static print_count = () : void => {
        console.log(MyShape.#count)
    }

    public static print_color = () : void => {
        console.log(MyShape._color)
    }

    public static print_num = () : void =>  console.log(MyShape.num)
}


console.log(MyShape.num)
MyShape.num = 1000
MyShape.print_count()
MyShape.print_color()
MyShape.print_num()