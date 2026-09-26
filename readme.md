# JavaScript Notes
# ✅ 1. Basics

## 1. What is JavaScript?

**JavaScript (JS)** is a **high-level, dynamically typed, interpreted programming language** mainly used to make web pages **interactive and dynamic**.

JavaScript can be used for:

* Web development
* Frontend development
* Backend development with Node.js
* Mobile and desktop applications
* APIs and server-side applications

### Example

```js
console.log("Hello, JavaScript!");
```

JavaScript can run directly in a browser and can also run outside the browser using environments such as **Node.js**.


## 2. Variables in JavaScript

A **variable** is a named container used to **store a value in memory** so that the value can be used and modified during program execution.

### Example

```js
let name = "Akash";
let age = 22;

console.log(name);
console.log(age);
```

Here:

* `name` → variable
* `"Akash"` → value
* `age` → variable
* `22` → value



## 3. Variable Declaration in JavaScript

JavaScript provides three keywords for declaring variables:

```js
var
let
const
```

### Example

```js
var city = "Kolkata";
let age = 22;
const country = "India";
```



## 4. Rules for Variable Declaration

There are several rules that must be followed when naming variables in JavaScript.

### Rule 1: A variable name can contain letters

```js
let name = "Akash";
```

### Rule 2: A variable name can contain numbers

Numbers are allowed, but **the name cannot start with a number**.

```js
let user1 = "Akash";   // Valid
let 1user = "Akash";   // Invalid
```

### Rule 3: A variable name can contain `_`

```js
let user_name = "Akash";
```

### Rule 4: A variable name can contain `$`

```js
let $price = 500;
```

### Rule 5: Variable names cannot contain spaces

```js
let firstName = "Akash";    // Valid
let first name = "Akash";   // Invalid
```

Use camelCase instead:

```js
let firstName = "Akash";
let userAge = 22;
```

### Rule 6: JavaScript is case-sensitive

These are different variables:

```js
let name = "Akash";
let Name = "Rahul";
let NAME = "John";
```

### Rule 7: Reserved keywords cannot be used as variable names

JavaScript has reserved keywords such as:

```js
let
const
var
if
else
for
function
return
class
```

You cannot use them as variable names:

```js
let let = 10;   // Invalid
```

### Rule 8: Variable names should be meaningful

Avoid:

```js
let x = 25;
let a = "Akash";
```

Prefer:

```js
let age = 25;
let userName = "Akash";
```

Meaningful names make code easier to understand and maintain.

---

## 5. `var`, `let`, and `const`

| Keyword | Scope          | Reassign | Redeclare |
| ------- | -------------- | -------- | --------- |
| `var`   | Function scope | Yes      | Yes       |
| `let`   | Block scope    | Yes      | No        |
| `const` | Block scope    | No       | No        |

### `var`

```js
var age = 22;

age = 23;       // Allowed
var age = 24;   // Allowed
```

### `let`

```js
let age = 22;

age = 23;       // Allowed
// let age = 24; // Not allowed
```

### `const`

```js
const age = 22;

// age = 23;    // Not allowed
// const age = 24; // Not allowed
```

### Recommended Practice

In modern JavaScript:

* Use `const` by default.
* Use `let` when the value needs to be reassigned.
* Avoid `var` in modern code unless there is a specific reason to use it.


## 6. Declaration vs Initialization

### Declaration

Creating a variable without assigning a value:

```js
let age;
```

### Initialization

Assigning a value to a variable for the first time:

```js
age = 22;
```

### Declaration + Initialization

Both can be done together:

```js
let age = 22;
```



## 7. Reassignment

Reassignment means changing the value stored in a variable.

```js
let age = 22;

age = 23;

console.log(age);
```

Output:

```text
23
```

`let` allows reassignment:

```js
let name = "Akash";
name = "Rahul";
```

`const` does not allow reassignment:

```js
const name = "Akash";

name = "Rahul"; // Error
```



## Quick Interview Definition

> **JavaScript is a high-level, dynamically typed programming language primarily used to build interactive and dynamic web applications.**

> **A variable is a named reference used to store and access a value during program execution.**

### Variable declaration keywords:

```text
var → function-scoped
let → block-scoped, reassignable
const → block-scoped, not reassignable
```
---
# 1️⃣ JavaScript Data Types

JavaScript data types are mainly divided into two categories:

```text
Data Types
│
├── Primitive
│
└── Non-Primitive (Reference)
```

## 1. Primitive Data Types

Primitive values are **simple/basic values**. They are stored and handled as individual values.

### Types of Primitive Data Types

| Data Type     | Example                 |
| ------------- | ----------------------- |
| **String**    | `"Akash"`               |
| **Number**    | `25`, `3.14`            |
| **BigInt**    | `12345678901234567890n` |
| **Boolean**   | `true`, `false`         |
| **Undefined** | `undefined`             |
| **Null**      | `null`                  |
| **Symbol**    | `Symbol("id")`          |

### Example

```js
// String
let name = "Akash";

// Number
let age = 25;

// BigInt
let bigNumber = 12345678901234567890n;

// Boolean
let isStudent = true;

// Undefined
let value;

// Null
let data = null;

// Symbol
let id = Symbol("id");

console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof bigNumber);  // bigint
console.log(typeof isStudent);  // boolean
console.log(typeof value);      // undefined
console.log(typeof data);       // object
console.log(typeof id);         // symbol
```

> **Note:** `typeof null` returns `"object"` because of a historical JavaScript behavior. `null` is still considered a primitive value.



## 2. Non-Primitive (Reference) Data Types

Non-primitive values are **objects/reference values**. They can store multiple values or more complex data.

Common examples:

* **Object**
* **Array**
* **Function**

### Object

```js
let user = {
    name: "Akash",
    age: 25
};

console.log(user.name);
// Akash
```

### Array

```js
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);
// Apple
```

### Function

```js
function greet() {
    console.log("Hello!");
}

greet();
```

## Primitive vs Non-Primitive

| Primitive                         | Non-Primitive                     |
| --------------------------------- | --------------------------------- |
| Stores a simple value             | Stores a reference to a value     |
| Immutable value                   | Objects can be modified           |
| Examples: String, Number, Boolean | Examples: Object, Array, Function |
| Compared mainly by value          | Objects are compared by reference |

### Reference Example

```js
let user1 = {
    name: "Akash"
};

let user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
// Rahul
```

Both `user1` and `user2` refer to the **same object**.

---
# 2️⃣ Type Conversion in JavaScript

## 1. What is Type Conversion?

**Type Conversion** is the process of converting a value from one data type to another data type.

For example, converting a `string` into a `number`:

```js
let age = "33";

let value = Number(age);

console.log(value);
console.log(typeof value);
```

### Output

```text
33
number
```

JavaScript provides several built-in functions for type conversion, such as:

```js
Number()
String()
Boolean()
```

---

## 2. Number Conversion

The `Number()` function converts a value into a **number**.

### Syntax

```js
Number(value)
```

### Example 1: String Number

```js
let age = "33";

let value = Number(age);

console.log(value);
console.log(typeof value);
```

Output:

```text
33
number
```



## 3. String Containing Characters

If a string contains characters that cannot be converted into a valid number, `Number()` returns `NaN`.

```js
let age1 = "33abc";

let value1 = Number(age1);

console.log(value1);
console.log(typeof value1);
```

Output:

```text
NaN
number
```

### Important

`NaN` means **Not a Number**.

Although the value is `NaN`, its JavaScript type is still:

```js
typeof NaN
```

Output:

```text
number
```

---

## 4. Converting `null` to Number

```js
let age2 = null;

let value2 = Number(age2);

console.log(value2);
console.log(typeof value2);
```

Output:

```text
0
number
```

### Why?

JavaScript converts:

```text
null → 0
```

---

## 5. Converting `undefined` to Number

```js
let value = Number(undefined);

console.log(value);
console.log(typeof value);
```

Output:

```text
NaN
number
```

### Conversion

```text
undefined → NaN
```

---

## 6. Converting Boolean to Number

Boolean values can also be converted into numbers.

### `true`

```js
let value = Number(true);

console.log(value);
console.log(typeof value);
```

Output:

```text
1
number
```

### `false`

```js
let value = Number(false);

console.log(value);
console.log(typeof value);
```

Output:

```text
0
number
```

### Conversion

```text
true  → 1
false → 0
```

---

## 7. Number Conversion Table

| Original Value | `Number(value)` | Result Type |
| -------------- | --------------: | ----------- |
| `"33"`         |            `33` | `number`    |
| `"33abc"`      |           `NaN` | `number`    |
| `""`           |             `0` | `number`    |
| `" "`          |             `0` | `number`    |
| `"33.5"`       |          `33.5` | `number`    |
| `null`         |             `0` | `number`    |
| `undefined`    |           `NaN` | `number`    |
| `true`         |             `1` | `number`    |
| `false`        |             `0` | `number`    |
| `NaN`          |           `NaN` | `number`    |

---

## 8. String Conversion

The `String()` function converts a value into a string.


### Syntax

```js
String(value)
```
### Example

```js
let value = 33;

let result = String(value);

console.log(result);
console.log(typeof result);
```

Output:

```text
33
string
```

Notice that `33` is now a **string**, not a number.

---

## 9. String Conversion Examples

```js
String(33);          // "33"
String(true);        // "true"
String(false);       // "false"
String(null);        // "null"
String(undefined);   // "undefined"
```

### Table

| Original Value | `String(value)` | Result Type |
| -------------- | --------------- | ----------- |
| `33`           | `"33"`          | `string`    |
| `33.5`         | `"33.5"`        | `string`    |
| `true`         | `"true"`        | `string`    |
| `false`        | `"false"`       | `string`    |
| `null`         | `"null"`        | `string`    |
| `undefined`    | `"undefined"`   | `string`    |
| `NaN`          | `"NaN"`         | `string`    |

---

## 10. Boolean Conversion

The `Boolean()` function converts a value into either:

```text
true
```

or

```text
false
```

### Syntax

```js
Boolean(value)
```

---

## 11. Truthy and Falsy Values

JavaScript considers some values **falsy**.

When converted using `Boolean()`, they become `false`.

### Falsy Values

```js
Boolean(false);      // false
Boolean(0);          // false
Boolean(-0);         // false
Boolean(0n);         // false
Boolean("");         // false
Boolean(null);       // false
Boolean(undefined);  // false
Boolean(NaN);        // false
```

### Falsy Values Table

| Value       | `Boolean(value)` |
| ----------- | ---------------- |
| `false`     | `false`          |
| `0`         | `false`          |
| `-0`        | `false`          |
| `0n`        | `false`          |
| `""`        | `false`          |
| `null`      | `false`          |
| `undefined` | `false`          |
| `NaN`       | `false`          |



### 12. Truthy Values

Almost every other value is **truthy**.

```js
Boolean("hello");   // true
Boolean("0");       // true
Boolean(1);         // true
Boolean(-1);        // true
Boolean([]);        // true
Boolean({});        // true
```

### Truthy Values Table

| Value          | `Boolean(value)` |
| -------------- | ---------------- |
| `"hello"`      | `true`           |
| `"0"`          | `true`           |
| `" "`          | `true`           |
| `1`            | `true`           |
| `-1`           | `true`           |
| `[]`           | `true`           |
| `{}`           | `true`           |
| `function(){}` | `true`           |

### Important

An empty string is falsy:

```js
Boolean(""); // false
```

But an empty array and empty object are truthy:

```js
Boolean([]); // true
Boolean({}); // true
```

---

## 13. Boolean Conversion Table

| Original Value | `Boolean(value)` | Result  |
| -------------- | ---------------- | ------- |
| `true`         | `true`           | `true`  |
| `false`        | `false`          | `false` |
| `1`            | `true`           | `true`  |
| `0`            | `false`          | `false` |
| `-1`           | `true`           | `true`  |
| `"hello"`      | `true`           | `true`  |
| `""`           | `false`          | `false` |
| `"0"`          | `true`           | `true`  |
| `null`         | `false`          | `false` |
| `undefined`    | `false`          | `false` |
| `NaN`          | `false`          | `false` |
| `[]`           | `true`           | `true`  |
| `{}`           | `true`           | `true`  |

---

## 14. Complete Type Conversion Table

| Value       | To Number | To String           | To Boolean |
| ----------- | --------: | ------------------- | ---------: |
| `"33"`      |      `33` | `"33"`              |     `true` |
| `"33abc"`   |     `NaN` | `"33abc"`           |     `true` |
| `""`        |       `0` | `""`                |    `false` |
| `" "`       |       `0` | `" "`               |     `true` |
| `true`      |       `1` | `"true"`            |     `true` |
| `false`     |       `0` | `"false"`           |    `false` |
| `null`      |       `0` | `"null"`            |    `false` |
| `undefined` |     `NaN` | `"undefined"`       |    `false` |
| `0`         |       `0` | `"0"`               |    `false` |
| `1`         |       `1` | `"1"`               |     `true` |
| `NaN`       |     `NaN` | `"NaN"`             |    `false` |
| `[]`        |       `0` | `""`                |     `true` |
| `{}`        |     `NaN` | `"[object Object]"` |     `true` |

---

## 15. Explicit vs Implicit Type Conversion

## Explicit Type Conversion

When the developer manually converts a value using functions such as:

```js
Number()
String()
Boolean()
```

Example:

```js
let age = "22";

let result = Number(age);

console.log(result);
```

This is called **explicit type conversion**.



## Implicit Type Conversion

JavaScript can automatically convert types during an operation.

Example:

```js
let result = "10" + 5;

console.log(result);
```

Output:

```text
105
```

Here, JavaScript converts `5` into a string and performs string concatenation.

Another example:

```js
let result = "10" - 5;

console.log(result);
```

Output:

```text
5
```

Here, JavaScript converts `"10"` into a number.



## 16. Explicit vs Implicit Conversion

| Type     | Meaning                                    | Example        |
| -------- | ------------------------------------------ | -------------- |
| Explicit | Developer manually converts the type       | `Number("10")` |
| Implicit | JavaScript automatically converts the type | `"10" - 5`     |




## Quick Interview Definition

> **Type conversion in JavaScript is the process of converting a value from one data type to another, either explicitly by the developer or implicitly by JavaScript during an operation.**

### Main conversion functions

```text
Number()  → converts a value to Number
String()  → converts a value to String
Boolean() → converts a value to Boolean
```
---
# 3️⃣ What is an Operator in JavaScript?

An **operator** is a special symbol or keyword used to **perform an operation on one or more values (operands)**.

### Example

```js
let a = 10;
let b = 5;

let result = a + b;

console.log(result); // 15
```

Here:

* `a` and `b` → **Operands**
* `+` → **Operator**
* `a + b` → **Expression**
* `15` → **Result**



## Types of Operators in JavaScript

JavaScript operators can be broadly classified as:

| Type                     | Examples                           | Purpose                                   |                              |                               |
| ------------------------ | ---------------------------------- | ----------------------------------------- | ---------------------------- | ----------------------------- |
| **Arithmetic Operators** | `+`, `-`, `*`, `/`, `%`, `**`      | Mathematical calculations                 |                              |                               |
| **Assignment Operators** | `=`, `+=`, `-=`, `*=`, `/=`        | Assign/update values                      |                              |                               |
| **Comparison Operators** | `==`, `===`, `!=`, `!==`, `>`, `<` | Compare values                                                                                         
| **Increment/Decrement**  | `++`, `--`                         | Increase/decrease by 1                    |                              |                               |
| **Unary Operators**      | `typeof`, `++`, `--`, `!`          | Work with a single operand                |                              |                               |
| **Ternary Operator**     | `condition ? value1 : value2`      | Short form of `if...else`                 |                              

## Prefix and Postfix Operators

The **increment (`++`)** and **decrement (`--`)** operators can be used in two forms:

1. **Prefix**
2. **Postfix**

The important difference is **when the value is changed relative to when the expression uses the value**.



## 1. Prefix Operator

In **prefix**, the operator comes **before** the variable.

```js
++x;
--x;
```

### Example

```js
let x = 5;

let result = ++x;

console.log(x);      // 6
console.log(result); // 6
```

### Workflow

```text
Initial value
    ↓
x = 5
    ↓
++x
    ↓
Increase x by 1
    ↓
x = 6
    ↓
Use the updated value
    ↓
result = 6
```

So:

> **Prefix → Change first → Use later**



## 2. Postfix Operator

In **postfix**, the operator comes **after** the variable.

```js
x++;
x--;
```

### Example

```js
let x = 5;

let result = x++;

console.log(x);      // 6
console.log(result); // 5
```

### Workflow

```text
Initial value
    ↓
x = 5
    ↓
x++
    ↓
Use the current value
    ↓
result = 5
    ↓
Increase x by 1
    ↓
x = 6
```

So:

> **Postfix → Use first → Change later**



## Prefix vs Postfix

| Operator              | Example | First Action | `x` after operation | Value of expression |
| --------------------- | ------- | ------------ | ------------------: | ------------------: |
| **Prefix Increment**  | `++x`   | Increase     |                 `6` |                 `6` |
| **Postfix Increment** | `x++`   | Use          |                 `6` |                 `5` |
| **Prefix Decrement**  | `--x`   | Decrease     |                 `4` |                 `4` |
| **Postfix Decrement** | `x--`   | Use          |                 `4` |                 `5` |

Assume initially:

```js
let x = 5;
```



## Easy Interview Definition

**Prefix:** The variable is modified **before its value is used** in the expression.

```js
let x = 5;
console.log(++x); // 6
```

**Postfix:** The current value is **used first**, and the variable is modified afterward.

```js
let x = 5;
console.log(x++); // 5
console.log(x);   // 6
```

### Remember this shortcut:

```text
PREFIX  → Change → Use
POSTFIX → Use → Change
```

## Logical Operators

Logical operators are used to **combine conditions**.

| Operator | Symbol | Meaning                             |
| -------- | ------ | ----------------------------------- |
| AND      | `&&`   | Both conditions must be true        |
| OR       | `\|\|` | At least one condition must be true |
| NOT      | `!`    | Reverses true/false                 |

### Example

```js
let age = 20;

console.log(age >= 18 && age <= 60);
// true

console.log(age >= 18 || age <= 10);
// true

console.log(!(age >= 18));
// false
```

### Easy to Remember

```text
&&  → AND → Both must be true
||  → OR  → One must be true
!   → NOT → Reverses the result
```

The main difference is **type conversion**.

---
# `==` VS `===` 
### `==` — Loose Equality

`==` compares the values **after converting the types if necessary**.

```js
console.log(5 == "5");
// true
```

Here:

```text
5        → number
"5"      → string

5 == "5"
   ↓
JavaScript converts "5" to 5
   ↓
5 == 5
   ↓
true
```


### `===` — Strict Equality

`===` compares **both value AND data type**. It does **not** perform type conversion.

```js
console.log(5 === "5");
// false
```

```text
5        → number
"5"      → string

Value same? → Yes
Type same?  → No
             ↓
           false
```

### Easy Comparison

| Operator | Name            | Type Conversion | Example     | Result  |
| -------- | --------------- | --------------- | ----------- | ------- |
| `==`     | Loose Equality  | Yes             | `5 == "5"`  | `true`  |
| `===`    | Strict Equality | No              | `5 === "5"` | `false` |

### Interview Definition

> **`==` checks equality after type conversion, while `===` checks equality without type conversion and requires both the value and data type to be the same.**
----
# 4️⃣STACK & HEAP 
### Stack:-

Used to handle **primitive values** and **references**. When a primitive value is assigned to another variable, its **value is copied**, so changing the new variable does not change the original value.

**Example:**

```js
let myname = "Akash Mondal";

let User1 = myname;

User1 = "Tushar Mondal";

console.log(myname); // Akash Mondal
console.log(User1);  // Tushar Mondal
```

**Work flow:-**

```text
              STACK
       ___________________
      |                   |
      | User1             |
      | "Tushar Mondal"   |  ← Changed copy
      |___________________|
      |                   |
      | myname            |
      | "Akash Mondal"    |  ← Original value
      |___________________|
```

---

### Heap:-

Used to store **objects and other reference data**. When an object is assigned to another variable, the **reference is copied**, not the entire object. Therefore, both variables can point to the **same object in the Heap**.

**Example:**

```js
let student = {
    name: "Sumon",
    email: "sumon@gmail.com"
};

let newStudent = student;

newStudent.name = "MONOJ DEY";
newStudent.email = "monojdey@gmail.com";

console.log(student);
console.log(newStudent);
```

**Work flow:-**

```text
                 STACK                         HEAP
          ___________________          ______________________
         |                   |        |                      |
         | student           |-------->│ name: "MONOJ DEY"  |
         |                   |        | email: "monojdey@   |
         | newStudent        |----┐   | gmail.com"          |
         |___________________|    │   |______________________|
                                  │
                                  └--------> Same Object
```

### Easy Difference

```text
STACK
  ↓
Primitive → Value is copied

HEAP
  ↓
Object → Reference is copied
```

----


# 5️⃣ String Methods — JavaScript

## What are Methods in JavaScript?

A **method** is a function that is associated with an object or data type and is used to **perform a specific operation**.


###  Important String Methods Examples

#### 1. `toUpperCase()`

Converts a string to uppercase.

```js
let name = "Akash Mondal";

console.log(name.toUpperCase());
// AKASH MONDAL
```
Here:

* `name` → String
* `toUpperCase()` → String method
* `()` → calls the method


#### 2. `toLowerCase()`

Converts a string to lowercase.

```js
let name = "Akash MONDAL";

console.log(name.toLowerCase());
// akash mondal
```

#### 3. `includes()`

Checks whether a string contains a particular value.

```js
let name = "Akash Mondal";

console.log(name.includes("Mondal"));
// true
```

It returns a **Boolean**: `true` or `false`.

#### 4. `indexOf()`

Returns the index of the first occurrence of a value.

```js
let name = "Akash Mondal";

console.log(name.indexOf("M"));
// 6
```

Remember that JavaScript indexes start from **0**:

```text
A k a s h   M o n d a l
0 1 2 3 4 5 6 7 8 9 10 11 12
```

#### 5. `slice()`

Extracts a portion of a string.

```js
let name = "Akash Mondal";

console.log(name.slice(0, 5));
// Akash
```
#### 6. `trim()`
Removes spaces from both 
```js
let name = "  Akash Mondal  ";

console.log(name.trim());
// Akash Mondal
```
#### 7. `split()` 
 Converts a string into an array
```js
let text = "HTML,CSS,JavaScript";

let result = text.split(",");

console.log(result);
// ["HTML", "CSS", "JavaScript"]
```



## Important String Methods

| Method          | Use                                 |
| --------------- | ----------------------------------- |
| `at()`          | Gets character at an index          |
| `charAt()`      | Gets character at an index          |
| `includes()`    | Checks if a string contains a value |
| `indexOf()`     | Finds the first index               |
| `lastIndexOf()` | Finds the last index                |
| `startsWith()`  | Checks the beginning                |
| `endsWith()`    | Checks the ending                   |
| `slice()`       | Extracts part of a string           |
| `substring()`   | Extracts part of a string           |
| `split()`       | Converts string into an array       |
| `replace()`     | Replaces a value                    |
| `replaceAll()`  | Replaces all occurrences            |
| `trim()`        | Removes spaces from both sides      |
| `toLowerCase()` | Converts to lowercase               |
| `toUpperCase()` | Converts to uppercase               |
| `repeat()`      | Repeats a string                    |
| `concat()`      | Joins strings                       |
| `padStart()`    | Adds characters at the beginning    |
| `padEnd()`      | Adds characters at the end          |
| `match()`       | Finds matches using a pattern       |
| `search()`      | Searches using a pattern            |

### Easy Flow

```text
String
   │
   ├── Search
   │   ├── includes()
   │   ├── indexOf()
   │   ├── lastIndexOf()
   │   └── search()
   │
   ├── Extract
   │   ├── at()
   │   ├── charAt()
   │   ├── slice()
   │   └── substring()
   │
   ├── Modify
   │   ├── replace()
   │   ├── replaceAll()
   │   ├── toUpperCase()
   │   └── toLowerCase()
   │
   ├── Remove Spaces
   │   ├── trim()
   │   ├── trimStart()
   │   └── trimEnd()
   │
   └── Convert
       ├── split()
       └── toString()
```

**Note:** Methods such as `anchor()`, `big()`, `blink()`, `bold()`, `fixed()`, `fontcolor()`, `fontsize()`, `italics()`, `link()`, `small()`, `strike()`, `sub()`, and `sup()` appear in the browser's prototype because of legacy web APIs. **Don't use them in modern projects.**

---
 # 6️⃣ JavaScript Number & Math

## 1. Number

`Number` is a JavaScript data type used to represent **integers, decimals, positive numbers, and negative numbers**.

### Basic Number

```js
const number = 100;

console.log(number);
```

### Number Object

```js
const balance = new Number(100);

console.log(balance);
```

> `100` is a primitive number, while `new Number(100)` creates a Number object. In normal JavaScript, prefer the primitive form.



## Number Methods

| Method             | Use                                    |
| ------------------ | -------------------------------------- |
| `toFixed()`        | Controls the number of decimal places  |
| `toPrecision()`    | Controls significant digits            |
| `toLocaleString()` | Formats a number according to a locale |
| `toString()`       | Converts a number to a string          |
| `valueOf()`        | Returns the primitive value            |

### Examples

```js
const number = 261.22142245;

console.log(number.toFixed(2));
// 261.22

console.log(number.toPrecision(4));
// 261.2

const hundreds = 100000000;

console.log(hundreds.toLocaleString());
// 100,000,000

console.log(hundreds.toLocaleString("en-IN"));
// 10,00,00,000
```

---

## Number Properties

| Property                   | Meaning                  |
| -------------------------- | ------------------------ |
| `Number.MAX_VALUE`         | Largest finite number    |
| `Number.MIN_VALUE`         | Smallest positive number |
| `Number.MAX_SAFE_INTEGER`  | Largest safe integer     |
| `Number.MIN_SAFE_INTEGER`  | Smallest safe integer    |
| `Number.POSITIVE_INFINITY` | Positive infinity        |
| `Number.NEGATIVE_INFINITY` | Negative infinity        |
| `Number.NaN`               | Not a Number             |

```js
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
```

---

## Math Object

`Math` is a built-in JavaScript object that provides **mathematical constants and methods**.

### Math Properties

```js
console.log(Math.PI);
console.log(Math.E);
```

### Common Math Methods

| Method          | Use                                     |
| --------------- | --------------------------------------- |
| `Math.round()`  | Rounds to nearest integer               |
| `Math.floor()`  | Rounds down                             |
| `Math.ceil()`   | Rounds up                               |
| `Math.trunc()`  | Removes decimal part                    |
| `Math.abs()`    | Returns absolute value                  |
| `Math.sqrt()`   | Returns square root                     |
| `Math.pow()`    | Returns power                           |
| `Math.max()`    | Returns largest value                   |
| `Math.min()`    | Returns smallest value                  |
| `Math.random()` | Returns random number from `0` to `< 1` |

### Examples

```js
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.trunc(4.9)); // 4

console.log(Math.abs(-10));   // 10
console.log(Math.sqrt(25));   // 5
console.log(Math.pow(2, 3));  // 8

console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5

console.log(Math.random()); // 0 to < 1
```



## Random Number Between Two Values

```js
const min = 10;
const max = 20;

console.log(
    Math.floor(Math.random() * (max - min + 1)) + min
);
```

### Formula

```text
Math.floor(Math.random() * (max - min + 1)) + min
```

**Generates a random integer between `min` and `max`, including both.**

Example:

```text
min = 10
max = 20

Possible output:
10, 11, 12, 13, ... 18, 19, 20
```

### Easy Structure

```text
Number
│
├── Properties
│   ├── MAX_VALUE
│   ├── MIN_VALUE
│   ├── MAX_SAFE_INTEGER
│   └── MIN_SAFE_INTEGER
│
└── Methods
    ├── toFixed()
    ├── toPrecision()
    ├── toLocaleString()
    └── toString()


Math
│
├── Properties
│   ├── Math.PI
│   └── Math.E
│
└── Methods
    ├── round()
    ├── floor()
    ├── ceil()
    ├── trunc()
    ├── abs()
    ├── sqrt()
    ├── pow()
    ├── max()
    ├── min()
    └── random()
```
---
# 7️⃣ JavaScript Date  Notes

The **`Date` object** is one of the most commonly used built-in objects in JavaScript for working with **dates, times, timestamps, formatting, and date calculations**.



## 1. Creating a Date

### Current date and time

```js
const now = new Date();

console.log(now);
```

`new Date()` creates a `Date` object containing the current date and time.

```js
console.log(typeof now);
// object
```

## 2. Different Date Formats

```js
const date = new Date();

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toISOString());
```

| Method                 | Purpose                     |
| ---------------------- | --------------------------- |
| `toString()`           | Full date and time          |
| `toDateString()`       | Date only                   |
| `toLocaleDateString()` | Date in local format        |
| `toLocaleString()`     | Date + time in local format |
| `toISOString()`        | ISO 8601 format             |

Example ISO format:

```text
2026-09-26T05:04:30.000Z
```

---

## 3. Creating a Specific Date

### Using numbers

```js
const date = new Date(2026, 0, 26);

console.log(date.toDateString());
```

Output:

```text
Mon Jan 26 2026
```

### Important  Point ⚠️

JavaScript months are **zero-indexed**.

```text
0  → January
1  → February
2  → March
...
11 → December
```

So:

```js
new Date(2026, 0, 26);
```

means  : **January 26, 2026**

## 4. Date Using String

```js
const date = new Date("2026-09-26");

console.log(date);
```

A common ISO date format is:

```text
YYYY-MM-DD
```

Example:

```text
2026-09-26
```

For predictable parsing, ISO-style date strings are generally preferred.


## 5. Date Timestamp

A **timestamp** represents a point in time as the number of milliseconds since:

> **January 1, 1970 00:00:00 UTC**

This point is commonly called the **Unix epoch**.

### `Date.now()`

```js
const timestamp = Date.now();

console.log(timestamp);
```

### `getTime()`

```js
const date = new Date("2026-09-26");

console.log(date.getTime());
```

Both give a timestamp in **milliseconds**.



## 6. Milliseconds → Seconds

```js
const timestamp = Date.now();

console.log(Math.floor(timestamp / 1000));
```

Flow:

```text
Date.now()
    ↓
Milliseconds
    ↓
÷ 1000
    ↓
Seconds
```


## 7. Getting Individual Date Parts

```js
const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
```

### Important Methods

| Method              | Returns              |
| ------------------- | -------------------- |
| `getFullYear()`     | Full year            |
| `getMonth()`        | Month `0–11`         |
| `getDate()`         | Day of month `1–31`  |
| `getDay()`          | Day of week `0–6`    |
| `getHours()`        | Hours `0–23`         |
| `getMinutes()`      | Minutes `0–59`       |
| `getSeconds()`      | Seconds `0–59`       |
| `getMilliseconds()` | Milliseconds `0–999` |

### Important Difference

Don't confuse:

```js
getDate()
```

with:

```js
getDay()
```

```text
getDate() → Day of month

Example:
26

getDay() → Day of week

Example:
6 → Saturday
```

And:

```text
getMonth()
0 → January
```


## 8. Setting Date Values

JavaScript also provides `set` methods.

```js
const date = new Date();

date.setFullYear(2030);
date.setMonth(5);
date.setDate(15);

console.log(date);
```

### Common Set Methods

| Method              | Changes      |
| ------------------- | ------------ |
| `setFullYear()`     | Year         |
| `setMonth()`        | Month        |
| `setDate()`         | Day          |
| `setHours()`        | Hours        |
| `setMinutes()`      | Minutes      |
| `setSeconds()`      | Seconds      |
| `setMilliseconds()` | Milliseconds |



## 9. Formatting with `toLocaleString()`

This is very useful in real projects.

```js
const date = new Date();

console.log(
    date.toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);
```

Example:

```text
Saturday, September 26, 2026
```

You can also format time:

```js
console.log(
    date.toLocaleString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })
);
```



## 10. Comparing Dates

Dates can be compared using their timestamps.

```js
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-09-26");

console.log(date1 < date2);
// true
```

You can also use:

```js
console.log(date1.getTime() < date2.getTime());
// true
```

### Interview Concept

A `Date` object can be converted to its numeric timestamp using:

```js
date.getTime()
```

Then timestamps can be compared easily.



## 11. Finding Difference Between Dates

```js
const start = new Date("2026-01-01");
const end = new Date("2026-01-10");

const difference = end - start;

console.log(difference);
```

The result is in **milliseconds**.

Convert it to days:

```js
const days = difference / (1000 * 60 * 60 * 24);

console.log(days);
// 9
```

### Flow

```text
Date 2 - Date 1
       ↓
Milliseconds
       ↓
÷ 1000
       ↓
Seconds
       ↓
÷ 60
       ↓
Minutes
       ↓
÷ 60
       ↓
Hours
       ↓
÷ 24
       ↓
Days
```



## 12. UTC Methods

JavaScript also has UTC versions of many getter methods.

```js
const date = new Date();

console.log(date.getFullYear());
console.log(date.getUTCFullYear());

console.log(date.getHours());
console.log(date.getUTCHours());
```

### Difference

```text
getHours()
    ↓
Local time

getUTCHours()
    ↓
UTC time
```

This becomes important when working with **servers, databases, APIs, and users in different time zones**.


## 13. `toISOString()`

Very common in APIs and backend development.

```js
const date = new Date();

console.log(date.toISOString());
```

Example:

```text
2026-09-26T05:04:30.000Z
```

The `Z` indicates **UTC**.



## 14. `Date.now()` vs `new Date()`

### `Date.now()`

Returns a **number**:

```js
console.log(Date.now());
```

### `new Date()`

Returns a **Date object**:

```js
console.log(new Date());
```

|            | `Date.now()` | `new Date()` |
| ---------- | ------------ | ------------ |
| Returns    | Number       | Date object  |
| Represents | Timestamp    | Date + time  |
| Unit       | Milliseconds | Date object  |


## 15. Important Interview Questions

### Q1. What is the Date object?

> The `Date` object is a built-in JavaScript object used to represent and manipulate dates and times.

### Q2. What is the Unix epoch?

> January 1, 1970 at 00:00:00 UTC. JavaScript timestamps are measured in milliseconds from this point.

### Q3. What does `Date.now()` return?

> The current timestamp in milliseconds.

### Q4. What is the difference between `getDate()` and `getDay()`?

```text
getDate() → Day of month: 1–31
getDay()  → Day of week: 0–6
```

### Q5. Why is January `0` in JavaScript?

> The `getMonth()` method uses zero-based indexing, where January is `0` and December is `11`.

### Q6. What is the difference between `Date.now()` and `new Date()`?

> `Date.now()` returns a timestamp number, while `new Date()` returns a Date object.

### Q7. What is `toISOString()`?

> It converts a Date into an ISO 8601 formatted string, normally represented in UTC.



## Quick  Cheat Sheet

```text
Date
│
├── Create
│   ├── new Date()
│   ├── new Date("2026-09-26")
│   └── new Date(2026, 0, 26)
│
├── Get
│   ├── getFullYear()
│   ├── getMonth()
│   ├── getDate()
│   ├── getDay()
│   ├── getHours()
│   ├── getMinutes()
│   └── getSeconds()
│
├── Set
│   ├── setFullYear()
│   ├── setMonth()
│   ├── setDate()
│   ├── setHours()
│   └── setMinutes()
│
├── Format
│   ├── toString()
│   ├── toDateString()
│   ├── toLocaleDateString()
│   ├── toLocaleString()
│   └── toISOString()
│
└── Timestamp
    ├── Date.now()
    └── getTime()
```

### ⭐ Most Important to Remember

```text
getMonth() → 0–11
getDate()  → 1–31
getDay()   → 0–6

Date.now() → milliseconds timestamp

getTime()  → milliseconds timestamp

toISOString() → ISO/UTC string

new Date() → Date object
```
---
---
# ✅ 2. Arrays

