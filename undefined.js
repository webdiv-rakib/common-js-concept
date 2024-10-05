/**
 * 8 ways to get Undefine
 * 1. variable that is not initialized will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that does not exists on an object will give you undefined
 * 6. accessing array elements outside of the index range will give you undefined
 * 7. deleting an element inside an array
 * 8. set a value directly to undefined
 */

// 1. variable that is not initialized will give undefined
let first;
console.log(first);

// 2. function with no return
function second(a, b) {
    const total = a + b;
}

const result = second();
// console.log(result);

// 3. parameter that is not passed will be undefined
function third(a, b, c, d) {
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}
third(2, 5);

// 4. if return has nothing on the right side will return undefined
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = noNegative(2, 5);
console.log(total);

// 5. property that does not exists on an object will give you undefined
const fifth = { id: 2, name: 'rakib', age: 40 };
console.log(fifth.id, fifth.location);

// 6. accessing array elements outside of the index range will give you undefined
const sixth = [3, 5, 8, 12, 14];
console.log(sixth[1], sixth[200]);

// 7. deleting an element inside an array
const seven = [3, 5, 8, 12, 14];
// you should not do it, Instead use splice
delete seven[1];
console.log(seven);

// 8. set a value directly to undefined
const eight = undefined;

const nine = null;
const data = { results: [], updated: null };

console.log(typeof null);