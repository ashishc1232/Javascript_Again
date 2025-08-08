JavaScript is **single-threaded**, meaning it executes code **one line at a time**. However, to prevent blocking the execution of code (e.g., waiting for a server response or a timer), JavaScript uses **asynchronous programming**.

A **callback** is one of the fundamental techniques used to handle **asynchronous operations**.



##  What is a Callback?

A **callback** is a function that is **passed as an argument** to another function and is **executed after** the completion of that function.

---

###  Why Use Callbacks?

JavaScript runs code sequentially, but many operations (e.g., reading files, API calls, timers) take time. Instead of waiting, callbacks let JavaScript **continue executing** and **run the callback when the task is complete**.

---

##  Basic Example (Synchronous Callback)

```javascript
function greetUser(name, callback) {
    console.log("Hi " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greetUser("Alice", sayBye);
```

**Output:**
```
Hi Alice
Goodbye!
```

Here, `sayBye` is a callback passed to `greetUser`. Once the greeting is printed, the callback executes.

---

##  Asynchronous Callback Example (setTimeout)

```javascript
console.log("Start");

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
```

**Output:**
```
Start
End
This runs after 2 seconds
```

Here, `setTimeout` is an **asynchronous function**. The callback runs after the specified delay, but the rest of the code continues executing.

---

##  Real-World Example: Callback in API Call (Simulated)

```javascript
function fetchUserData(callback) {
    // Simulate API call with setTimeout
    setTimeout(function() {
        const user = { name: "John", age: 25 };
        callback(user); // Call the callback with user data
    }, 3000);
}

function displayUser(user) {
    console.log("User data received:");
    console.log(user);
}

fetchUserData(displayUser);
```

**Output (after 3 seconds):**
```
User data received:
{ name: 'John', age: 25 }
```

---
const fs=require('fs');
fs.readFile('example.txt','utf8',
function(err,data){
    if(err.data){
        console.log('Error reading file:', err)
        return;
    }
    console.log("file content:",data)
})

##  Uses of Callbacks

1. **Handling Asynchronous Operations**:
   - API calls (AJAX, `fetch`)
   - Timers (`setTimeout`, `setInterval`)
   - File reading in Node.js

2. **Event Handling**:
   - DOM events (e.g., `onClick`, `onChange`)

3. **Functional Programming**:
   - Array methods like `map()`, `filter()`, `forEach()` accept callbacks

---

### Example: Callbacks in Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});
```

**Output:**
```
2
4
6
8
10
```

---

##  Callback Hell

When multiple asynchronous operations depend on each other, callbacks can become **deeply nested and hard to manage**, known as "**callback hell**".

### Example:

```javascript
doTask1(function(result1) {
    doTask2(result1, function(result2) {
        doTask3(result2, function(result3) {
            console.log("Final result: ", result3);
        });
    });
});
```



---

##  Solution: Promises and Async/Await

To solve callback hell, JavaScript introduced **Promises** and later **async/await**, making asynchronous code **more readable and easier to manage**.

---

