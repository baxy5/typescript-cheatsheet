function myNameFiveTimes(name, count) {
    for (let i = 0; i < count; i++) {
        console.log(`My name is ${name}`);
    }
}
myNameFiveTimes("Bakos", 5);
function anAnimal(name) {
    return name;
}
const kugya = anAnimal("kuga");
console.log(kugya);
function reverse(items) {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
let sample = [1, 2, 3];
let reveresd = reverse(sample);
console.log(reveresd);
