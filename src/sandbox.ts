/* const addition = (x: number, y: number) => {
    console.log(x + y);
}

addition(2, 3) */


// explicit types
/* let character: string;
let age: number;
let isLoggedIn: boolean; */



// arrays
/* let ninjas: string[] = [];

ninjas = [10,20]
ninjas = ["asd", "asd"];
ninjas.push("shaun")
*/


// union types
/* let mixed: (string | number)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);

let uid : string | number ;
uid = "123"
uid = 123
*/


// objects
/* let ninjaOne: object;
ninjaOne = { name: "bakos", age: 20 }

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
} */


// Dynamic types
/* let age: any = 25;
let age = "asd";

let mixed: any[] = [];

mixed.push(5)
mixed.push("asd") */

let a: number = 5;
let b: number = 5;

console.log(a + b)