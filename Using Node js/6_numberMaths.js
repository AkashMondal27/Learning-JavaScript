const number = 100;
console.log(number);

const balance = new Number(100);
console.log(balance);

const otherNumber = 261.22142245;

console.log(otherNumber.toFixed(2));
// 261.22

console.log(otherNumber.toPrecision(4));
// 261.2

const hundreds = 100000000;

console.log(hundreds.toLocaleString());
// 100,000,000

console.log(hundreds.toLocaleString("en-IN"));
// 10,00,00,000

console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(4.6));  // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.ceil(4.1));   // 5
console.log(Math.trunc(4.9));  // 4

console.log(Math.abs(-10));    // 10
console.log(Math.pow(2, 3));   // 8
console.log(Math.sqrt(25));    // 5

console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5

console.log(Math.random());    // Random number between 0 and 1
console.log(Math.floor(Math.random()* 10) +1);    // Random number between 1 and 9

const min=10
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)