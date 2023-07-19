/**
 * Array in TypeScript
 */

// Array
let arr         : number[] = [1, 2, 3, 4, 5];
console.log(`array          = `, arr, typeof(arr));

let arrList     : Array<number> = [9, 8, 7 ,6, 5];
console.log("array list     = ", arrList, typeof(arrList));

let arrString   : Array<string> = ['Peter', 'Marry', 'Henry', 'Jerry'];
console.log("Array string:  =", arrString, typeof(arrString));

// Tuple
let student : [number, string];
student = [1, "Peter"];
console.log("Student = ", student);
console.log("ID : ", student[0]);
console.log("Name: ", student[1]);
console.log("First character of student: ", student[1][0]);
console.log("Sub-string of student name: ", student[1].substring(1));

// Enum
enum Color {Red, Green, Blue};
let c_1 : Color = Color.Red;
let c_2 : Color = Color.Blue;

console.log(`Color 1 = ${c_1} and Color 2 = ${c_2}`);

enum Size {
    small   = 30,
    medium  = 50,
    large   = 100
}

let product : Size = Size.medium
console.log("Type of the product: ", product);

let name_of_Size = Size[50]
console.log("Name of size 50 is", name_of_Size);
