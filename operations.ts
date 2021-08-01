let myName: string;
let myAge: number;
let yourAge: string;

myName = "Janos";
myAge = 19;
yourAge = "20";

// This will give an error: 
// Operator '>' cannot be applied to types 'string' and 'number'.

/* if(yourAge > myAge){
    console.log('Idösebb vagy');
} */

// Solution
if(Number(yourAge) > myAge){
    console.log('Idösebb vagy');
}
