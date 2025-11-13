JavaScript operators are grouped into categories:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Ternary Operator
7. String Operators
8. Type Operators
9. Spread & Rest Operators
10. Optional Chaining & Nullish Coalescing
11. Unary Operators
12. Increment / Decrement Operators
13. Comma Operator

Let's cover each with perfect examples.



# 1. Arithmetic Operators

Used for mathematical operations.

```js
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** 2); // 100 (Exponentiation)
```

---

# 2. Assignment Operators

```js
let x = 10;

x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 5; // x = x / 5
x %= 4; // x = x % 4
x **= 2; // x = x ** 2
```

---

# 3. Comparison Operators

### Strict equality avoids type conversion.

```js
console.log(5 == "5");   // true  (loose)
console.log(5 === "5");  // false (strict)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
```

### Less than, greater than

```js
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(5 <= 10);  // true
```

---

# 4. Logical Operators

```js
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false
```

### Short-circuit behavior

```js
console.log(0 || 20); // 20
console.log(5 && 10); // 10
```

---

# 5. Bitwise Operators

Useful rarely, mostly interview theory.

```js
console.log(5 & 1);  // AND
console.log(5 | 1);  // OR
console.log(5 ^ 1);  // XOR
console.log(~5);     // NOT
console.log(5 << 1); // Left shift
console.log(5 >> 1); // Right shift
```

---

# 6. Ternary Operator (Conditional)

```js
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
```

---

# 7. String Operators

### Concatenation

```js
console.log("Hello " + "World");
```

### Using +

```js
console.log("5" + 10); // "510"
```

---

# 8. Type Operators

### typeof

```js
console.log(typeof 10);       // number
console.log(typeof "Hello");  // string
console.log(typeof {});       // object
console.log(typeof null);     // object (bug)
```

### instanceof

```js
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
```

---

# 9. Spread Operator (...)

### For arrays

```js
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);
```

### For objects

```js
let obj = { name: "Ashish" };
let newObj = { ...obj, age: 22 };
```

---

# 10. Rest Operator (...)

Collects remaining values.

```js
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4);
```

---

# 11. Optional Chaining Operator (?.)

Avoids undefined errors.

```js
let user = {};
console.log(user.address?.city); // undefined
```

---

# 12. Nullish Coalescing Operator (??)

Returns right side if left side is null/undefined.

```js
let x = null;
console.log(x ?? "Default"); // "Default"
```

---

# 13. Unary Operators

```js
let x = 10;

console.log(+x);  // 10
console.log(-x);  // -10
console.log(typeof x); // number
```

### Unary plus converts to number

```js
console.log(+"50"); // 50
console.log(+true); // 1
console.log(+"");   // 0
```

---

# 14. Increment / Decrement Operators

```js
let a = 5;

console.log(a++); // 5 (then 6)
console.log(++a); // 7 (first increment then print)
console.log(a--); // 7
console.log(--a); // 5
```

---

# 15. Comma Operator

Evaluates multiple expressions and returns last value.

```js
let result = (1, 2, 3);
console.log(result); // 3
```

---

---

# Important Interview Questions on JS Operators

1. Difference between `==` and `===`.
2. What is short-circuit evaluation in logical operators.
3. Why does `"5" + 2 = "52"` but `"5" - 2 = 3"`.
4. Explain the nullish coalescing operator.
5. Difference between spread and rest operator.
6. What is the difference between `typeof null` and `typeof undefined`.
7. Pre-increment vs Post-increment.
8. What does the comma operator do.
9. What is the purpose of the optional chaining operator.
10. How unary plus converts data types.


