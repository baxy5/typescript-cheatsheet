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
/* const add = (a: number, b: number): number => {
    return a + b;
}
const result = add(5, 10)
console.log(result)
console.log(typeof (result)) */

// type aliases
/* type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum }

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

logDetails(2131321312, "Maja")

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello!`)
} */

// function signatures
// ex 1
let greet: (a: string, b: string) => void
// let greet: void
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

//ex2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === "add") {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}
