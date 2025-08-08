
## 🌟 What is a Promise in JavaScript?

A **Promise** is an object that represents the **eventual result** (or failure) of an **asynchronous operation**.

### Think of it like this:

> "I promise to return the data later. If I succeed, I’ll give you the result. If I fail, I’ll give you an error."

---

##  States of a Promise

1. **Pending** – The task hasn’t completed yet (still waiting).
2. **Fulfilled (Resolved)** – The task completed successfully.
3. **Rejected** – The task failed.

---

##  Syntax to Create a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
    // some async operation
    if (success) {
        resolve("Success message");
    } else {
        reject("Error message");
    }
});
```

---

##  Promise Methods

### 1. `.then()`

* Used to handle a **successful result**.
* It takes a function that runs when the promise is **resolved**.

```javascript
myPromise.then(function(result) {
    console.log(result); // This runs if promise is resolved
});
```

---

### 2. `.catch()`

* Used to handle an **error**.
* It runs if the promise is **rejected**.

```javascript
myPromise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Error:", error);
  });
```

---

### 3. `.finally()`

* Runs **no matter what**, whether the promise is resolved or rejected.
* Good for cleaning up (like hiding loaders/spinners).

```javascript
myPromise
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error))
  .finally(() => console.log("Promise is settled (done)."));
```

---

##  Full Example (Simulated API Call)

```javascript
function fetchUserData() {
    return new Promise((resolve, reject) => {
        const success = true; // Change to false to test error

        setTimeout(() => {
            if (success) {
                resolve({ name: "John", age: 25 });
            } else {
                reject("Failed to fetch user data.");
            }
        }, 2000);
    });
}

fetchUserData()
    .then(user => {
        console.log("User received:", user);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Request completed.");
    });
```

### 🧾 Output if `success = true`:

```
User received: { name: "John", age: 25 }
Request completed.
```

### 🧾 Output if `success = false`:

```
Error: Failed to fetch user data.
Request completed.
```

---

## 🧠 Why Use Promises?

* Makes **async code easier to read** than nested callbacks.
* Avoids **callback hell**.
* Allows **chaining** multiple `.then()` methods.

---

## 🪜 Chaining `.then()` Example

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
})
.then(result => {
    console.log(result); // 10
    return result * 2;
})
.then(result => {
    console.log(result); // 20
    return result + 5;
})
.then(result => {
    console.log(result); // 25
});
```

