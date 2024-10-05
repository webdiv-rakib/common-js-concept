// javascript dynamic type language
// Primitive type value
const a = 5
const b = 'Samsu kopai na ekhon ar'
const d = true;

// Non-Primitive type value
const age = [45, 3, 5]
const student = {
    name: 'rakib',
    age: 26
}

let x = 5;
let y = x;
// console.log(x, y);
y = 7;
// console.log(x, y);

let p = { job: 'web developer' };
let q = p;
console.log(p, q);
q.job = 'Front End Developer';
// q = { job: 'Back-End' };
console.log(p, q);

