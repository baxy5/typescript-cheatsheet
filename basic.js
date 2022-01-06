// compile: terminal: - tsc
console.log('Typescript!');
// Typescript can tell you the origin of the error and some solution
// Like:
let order = 'first';
// order.toLowercase() if you miss the type it will give an error and the problem
// with the lower 'c'.
order.toLowerCase();
// Also you can't assign a new value for order
// Like this:
// order = 1; -> it gives an error
// Solution - do not assign value for your variable:
let animal;
// If you don't want to give a value for your variable but you know
// what will it be then you can use:
let computer;
let orders;
