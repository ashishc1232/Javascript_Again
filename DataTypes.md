

JavaScript has **8 major data types**:

1. Number
2. BigInt
3. String
4. Boolean
5. Null
6. Undefined
7. Object
8. Symbol

---

# 1. Number

All integers and decimals are **Number** type (64-bit floating point).

```js
let a = 10;
let b = 10.5;
console.log(typeof a); // number
console.log(typeof b); // number
```

**Important Interview Note:**
JavaScript has only one numeric type for ints and floats.

**Special numeric values:**

* Infinity
* -Infinity
* NaN

```js
console.log(10 / 0);    // Infinity
console.log("abc" * 3); // NaN
```

---

# 2. BigInt

Used for very large integers beyond Number limit.

```js
let big = 123456789012345678901234567890n;
console.log(typeof big); // bigint
```

**Interview Point:**
You cannot mix `Number` and `BigInt` directly.

```js
// 10 + 10n  -> Error
```

---

# 3. String

Text values inside quotes.

```js
let name = "Ashish";
let city = 'Pune';
let message = `Hello, ${name}`;
console.log(typeof message); // string
```

**Template literals** allow interpolation and multi-line strings.

---

# 4. Boolean

True or false.

```js
let isLogged = true;
console.log(typeof isLogged); // boolean
```

---

# 5. Null

Intentional empty value.

```js
let data = null;
console.log(typeof data); // object (this is a JS bug)
```

**Interview Point:**
`typeof null` returns `object` because of a legacy bug in JS.

---

# 6. Undefined

Variable declared but not assigned.

```js
let x;
console.log(typeof x); // undefined
```

---

# 7. Object

Everything except primitive types is an object.

```js
let user = {
  name: "Ashish",
  age: 22
};
console.log(typeof user); // object
```

Objects include:

* Arrays
* Functions
* Dates
* Regular Expressions

### Array

```js
let arr = [1, 2, 3];
console.log(typeof arr); // object
```

### Function

```js
function test() {}
console.log(typeof test); // function (special object)
```

---

# 8. Symbol

Used to create unique identifiers.

```js
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false
```

---

---

# Type Conversion (Explicit and Implicit)

## 1. String Conversion

### String()

```js
console.log(String(100));    // "100"
console.log(String(true));   // "true"
```

### toString()

```js
let x = 10;
console.log(x.toString()); // "10"
```

---

## 2. Number Conversion

### Number()

```js
console.log(Number("50"));      // 50
console.log(Number("50abc"));   // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(""));        // 0
```

### parseInt(), parseFloat()

```js
console.log(parseInt("100px"));  // 100
console.log(parseFloat("99.55")); // 99.55
```

---

## 3. Boolean Conversion

### Boolean()

```js
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("hello")); // true
console.log(Boolean(null));    // false
```

**Falsy values:**
false, 0, "", null, undefined, NaN

Everything else is truthy.

---

# Implicit Type Conversion (Type Coercion)

### Examples

```js
console.log("5" + 3);   // "53"
console.log("5" - 3);   // 2
console.log(10 + true); // 11
console.log(10 * "2");  // 20
```

Reason:

* `+` converts to string if one operand is string.
* `-`, `*`, `/` convert to number.

---

# Equality (==) vs Strict Equality (===)

### Loose comparison (type conversion happens)

```js
console.log("10" == 10); // true
console.log("" == 0);    // true
console.log(null == undefined); // true
```

### Strict comparison (no type conversion)

```js
console.log("10" === 10); // false
console.log(null === undefined); // false
```



# Common Interview Questions

1. Difference between `null` and `undefined`.
2. Why does `typeof null` return "object".
3. What are primitive vs non-primitive types.
4. What is BigInt and where is it used.
5. Why does `"5" + 3 = "53"` but `"5" - 3 = 2"`.
6. List falsy values in JavaScript.
7. Difference between `==` and `===`.
8. What is type coercion.
9. How does JavaScript store numbers internally.
10. What is Symbol and why is it used.




