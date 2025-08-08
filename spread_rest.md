
###  Example: Spread & Rest in One Code

```javascript
function showNumbers(first, second, ...rest) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest:", rest);
}

const numbers = [1, 2, 3, 4, 5];

showNumbers(...numbers);
```

---

###  Explanation:

* `...numbers` → **Spread operator**: spreads array elements into individual arguments.
* `...rest` → **Rest operator**: collects the remaining arguments into an array.

---

###  Output:

```
First: 1
Second: 2
Rest: [3, 4, 5]
```
