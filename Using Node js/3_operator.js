
// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b);  // Addition → 13
console.log(a - b);  // Subtraction → 7
console.log(a * b);  // Multiplication → 30
console.log(a / b);  // Division → 3.333...
console.log(a % b);  // Modulus → 1
console.log(a ** b); // Exponentiation → 1000


// 2. Assignment Operators
let x = 10;

x += 5; 
console.log(x); // 15

x -= 3; 
console.log(x); // 12

x *= 2; 
console.log(x); // 24

x /= 4;
console.log(x); // 6


// 3. Comparison Operators
let num1 = 10;
let num2 = 5;

console.log(num1 == num2);   
console.log(num1 === num2);  
console.log(num1 != num2);   
console.log(num1 !== num2);  
console.log(num1 > num2);    
console.log(num1 < num2);    
console.log(num1 >= num2);   
console.log(num1 <= num2);   


// 4. Logical Operators
let age = 25;

console.log(age >= 18 && age <= 60);
// AND → true

console.log(age < 18 || age > 60);
// OR → false

console.log(!(age >= 18));
// NOT → false


// 5. Increment and Decrement Operators
let count = 5;

console.log(++count); // Prefix Increment → 6
console.log(count++); // Postfix Increment → 6
console.log(count);   // 7

console.log(--count); // Prefix Decrement → 6
console.log(count--); // Postfix Decrement → 6
console.log(count);   // 5


// 6. Ternary Operator
let marks = 75;

let result = marks >= 40 ? "Pass" : "Fail";

console.log(result);
// Pass


// 7. typeof Operator
let name = "Akash";
let number = 100;


