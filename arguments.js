function sum(a, b, c) {
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(4, 2, 4, 5, 8, 7, 3, 6);
// console.log(total);
console.log(sum.length);