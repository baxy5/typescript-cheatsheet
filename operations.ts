let myName: string;
let myAge: number;
let yourAge: string;
let randomArray: string[] = ["Janos", "Marton", "Bela"];

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

let oArray = randomArray.filter(o => {
    if(o.includes('o')){
        return o;
    }
})

console.log(oArray);

let mappedArray = randomArray.map(nameArray => {
    return nameArray.replace('o', 'u');
})

console.log(mappedArray);

let mappedArraySecond = randomArray.map(nameArray => {
    if(nameArray.includes('o')){
        return nameArray.replace('o', 'u');
    } else{
        return nameArray = "NONE";
    }
})

console.log(mappedArraySecond);
