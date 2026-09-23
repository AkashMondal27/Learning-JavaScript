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
