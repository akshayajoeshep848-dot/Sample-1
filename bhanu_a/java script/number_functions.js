// toFixed(num) -> output string


let a = 10.234;
let d =37.234;
let b = a.toFixed(2);
let c = d.toFixed(10);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(c * b);

// isNaN
// Number.isInteger(number)
// Number.MAX_VALUE(a, b)
// Number.MIN_VALUE(a, b)

console.log(Number.isInteger(a));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);