# JavaScript Notes

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

---

# 2. Variables in JavaScript

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

---

# 3. Variable Declaration in JavaScript

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

---

# 4. Rules for Variable Declaration

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

# 5. `var`, `let`, and `const`

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

---

# 6. Declaration vs Initialization

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

---

# 7. Reassignment

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

---

# Quick Interview Definition

> **JavaScript is a high-level, dynamically typed programming language primarily used to build interactive and dynamic web applications.**

> **A variable is a named reference used to store and access a value during program execution.**

### Variable declaration keywords:

```text
var → function-scoped
let → block-scoped, reassignable
const → block-scoped, not reassignable
```

# Type Conversion in JavaScript

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

# 2. Number Conversion

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

---

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

# 4. Converting `null` to Number

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

# 5. Converting `undefined` to Number

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

# 6. Converting Boolean to Number

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

# 7. Number Conversion Table

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

# 8. String Conversion

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

# 9. String Conversion Examples

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

# 10. Boolean Conversion

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

# 11. Truthy and Falsy Values

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

---

# 12. Truthy Values

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

# 13. Boolean Conversion Table

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

# 14. Complete Type Conversion Table

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

# 15. Explicit vs Implicit Type Conversion

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

---

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

---

# 16. Explicit vs Implicit Conversion

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
