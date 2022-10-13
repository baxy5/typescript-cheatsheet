"use strict";
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
/* let a: number = 5;
let b: number = 5;

console.log(a + b) */
// Functions
/* let greet: Function;

greet = () => {
    console.log("hello world");
}

greet(); */
/* const addition = (a: number, b: number) => {
    console.log(a + b);
}

addition(5, "asd") */
// optional = ?
/* const multi = (a: number, b: number, c?: number | string) => {
    console.log(a * b);
    console.log(c)
}

multi(5, 4, "Maja") */
// default value
/* const add = (a: number, b: number, c: number | string = 3) => {
    console.log(a + b)
    console.log(c)
}

add(34, 55) */
// become the type
/* let plus = (a: number, b: number) => {
    return a + b;
}

let asd = plus(5, 5) */
// return type declare
const add = (a, b) => {
    return a + b;
};
const result = add(5, 10);
console.log(result);
console.log(typeof (result));
