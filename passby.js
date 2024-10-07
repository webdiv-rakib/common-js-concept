// primitive type are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 25;
    const result = a * b;
    return result;
}
const output = multiply(num1, num2);
console.log(output);

// object and array are pass by reference
let student1 = { name: 'Jalim', partner: 'Borsha' };
let student2 = { name: 'Raj', partner: 'Shanti' };
function makeMovie(couple1, couple2) {
    couple1.name = 'Ononto';
    couple2.partner = 'Mim';
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);