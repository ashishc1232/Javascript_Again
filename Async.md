
#  1. Async/Await – Modern Way to Handle Promises

##  What is `async/await`?

`async/await` is **syntactic sugar** built on top of Promises to make asynchronous code look **synchronous and cleaner**.

---

###  How it works:

* `async` makes a function return a **Promise**.
* `await` pauses the function execution **until** the Promise resolves or rejects.

---

###  Example

```javascript
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data received"), 2000);
    });
}

async function getData() {
    console.log("Fetching...");
    const result = await fetchData();
    console.log(result);
}

getData();
```

**Output:**

```
Fetching...
(wait 2 seconds)
Data received
```

---

###  Benefits of Async/Await

| Feature        | Benefit                           |
| -------------- | --------------------------------- |
| Clean syntax   | Easier to read than `.then()`     |
| Error handling | Use `try/catch` like sync code    |
| Debugging      | Stack traces are easier to follow |

---

##  Error Handling with try/catch

```javascript
async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}
```

---

#  2. Fetch API – Built-in Way to Make HTTP Requests

##  What is Fetch API?

`fetch()` is a **built-in JavaScript method** used to make HTTP requests (GET, POST, etc.).

---

###  Syntax

```javascript
fetch(url, {
    method: "GET", // or POST, PUT, DELETE
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data) // for POST/PUT
})
```

---

###  Example: GET Request

```javascript
async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
}

getUser();
```

---

### Example: POST Request

```javascript
async function createPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Hello",
            body: "This is a post.",
            userId: 1
        })
    });
    const data = await response.json();
    console.log(data);
}

createPost();
```

---

## ⚠️ Fetch Limitations

* Doesn’t automatically throw an error on HTTP errors (e.g., 404)
* Needs `await` twice: once for `fetch()` and once for `.json()`

---

# ⚡ 3. Axios – Promise-Based HTTP Client

##  What is Axios?

Axios is a **popular third-party library** for making HTTP requests — works both in browsers and Node.js.

---

###  Install Axios

```bash
npm install axios
```

Or use CDN in HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

---

###  Axios GET Request

```javascript
async function getUser() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        console.log(response.data);
    } catch (error) {
        console.error("Error:", error);
    }
}
```

---

###  Axios POST Request

```javascript
async function createPost() {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "New Post",
            body: "Axios makes it easy!",
            userId: 1
        });
        console.log(response.data);
    } catch (error) {
        console.error("Error:", error);
    }
}
```




