
# CONTROL FLOW IN JAVASCRIPT

(if–else, switch, loops in depth)

Control flow determines **how code executes step-by-step** based on conditions and iterations.

---

# 1. IF – ELSE STATEMENTS (Decision Making)

JavaScript evaluates a condition; if it is true, a block runs.

## Basic if

```js
let age = 20;

if (age >= 18) {
  console.log("Eligible");
}
```

---

## if–else

```js
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## if–else if–else chain

```js
let marks = 78;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else if (marks >= 60) {
  console.log("C Grade");
} else {
  console.log("Fail");
}
```

---

## Important Notes:

1. Conditions are checked **top to bottom**.
2. First true condition stops further checks.
3. Use `===` to avoid type coercion.
4. Deep nesting reduces readability.

---

## Best Practice: Avoid deep nesting

Use return early (common in functions).

---

# 2. switch STATEMENT (Multiple Condition Selection)

Use switch when you compare **same value** against multiple options.

## Example

```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

---

## Why use break?

Without `break`, cases fall through:

```js
let x = 2;

switch (x) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two"); // runs
  case 3:
    console.log("Three"); // runs
}
```

This is called **fall-through**.

---

## switch with multiple cases (Grouped)

```js
let color = "red";

switch (color) {
  case "red":
  case "maroon":
    console.log("Warm color");
    break;

  case "blue":
  case "navy":
    console.log("Cool color");
    break;

  default:
    console.log("Unknown");
}
```

---

## switch works with strings & numbers only

Avoid expressions like:

```js
switch (x > 10) {}   // Bad practice
```

---

# 3. LOOPS (Iterative Control Flow)

Loops repeat blocks of code until a condition becomes false.

JavaScript loops:

1. for
2. while
3. do...while
4. for...in
5. for...of
6. forEach (array-specific)

Let's go deep into each.

---

# 3.1 for Loop

Best when you know the exact number of iterations.

```js
for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}
```

## How it works:

1. Initialization → `let i = 0`
2. Condition → `i < 5`
3. Body executes
4. Increment → `i++`
5. Repeat until condition becomes false

---

## Looping backward

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

---

## Skipping values (step size)

```js
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
```

---

## Using break

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```

---

## Using continue

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

---

# 3.2 while Loop

Runs as long as condition is true.

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

### Important:

If the condition never becomes false → infinite loop.

---

# 3.3 do...while Loop

Executes at least once before checking condition.

```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

Best when you need at least **one guaranteed execution**.

---

# 3.4 for...in Loop (Objects)

Used for looping **keys** of an object.

```js
let user = {
  name: "Ashish",
  city: "Pune",
  age: 22
};

for (let key in user) {
  console.log(key, user[key]);
}
```

### Avoid using for...in on arrays

Because it iterates keys, not values.

---

# 3.5 for...of Loop (Iterables)

Used for:

* Arrays
* Strings
* Maps
* Sets

```js
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
```

---

## for...of with strings

```js
for (let char of "Hello") {
  console.log(char);
}
```

---

## for...of with Map

```js
let map = new Map();
map.set("name", "Ashish");
map.set("age", 22);

for (let [key, value] of map) {
  console.log(key, value);
}
```

---

# 3.6 forEach (Array loops)

Callback-based loop (array only).

```js
let arr = [1, 2, 3];

arr.forEach(function (item, index) {
  console.log(index, item);
});
```

### Note:

You cannot use `break` or `continue` inside `forEach`.

---

# Loop Comparison Table

| Loop Type | Use Case                         |
| --------- | -------------------------------- |
| for       | Known number of iterations       |
| while     | Condition-based loops            |
| do-while  | Must run at least once           |
| for...in  | Loop through object keys         |
| for...of  | Loop through array/string values |
| forEach   | Array operations, clean syntax   |

---

# Important Interview Questions

1. Difference between for, while, and do…while.
2. What is the difference between for…in and for…of.
3. Why should for…in not be used for arrays.
4. Why forEach cannot use break or continue.
5. How switch case fall-through works.
6. Why break is required in switch.
7. How to avoid deep if–else nesting.
8. When to use logical operators instead of if.
9. How to handle loops with asynchronous functions.
10. Explain infinite loop with example.




