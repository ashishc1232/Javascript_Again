
#  1. `map()` – Transform Each Element

##  What it does:

* Creates a **new array** by applying a function to **each element** of the original array.
* Does **not modify** the original array.

---

###  Example:

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]
```

 Each number is **doubled**. The original `numbers` array is untouched.

---

#  2. `filter()` – Keep Elements That Match a Condition

##  What it does:

* Returns a **new array** containing only the elements that **pass a test**.
* Does **not modify** the original array.

---

###  Example:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
```

 Only the even numbers are kept.

---

#  3. `reduce()` – Combine All Elements into One Value

##  What it does:

* Reduces the array to **a single value** (like sum, product, average, etc.)
* Requires a **callback** with an **accumulator**.

---

###  Example: Sum of all numbers

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // 10
```





