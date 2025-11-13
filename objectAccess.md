
# 1. Dot Notation (Most Common)

Use when key is a valid identifier (no spaces, no special characters).

```js
let user = {
  name: "Ashish",
  age: 22
};

console.log(user.name); 
console.log(user.age);
```

---

# 2. Bracket Notation (For dynamic keys, spaces, special chars)

```js
let user = {
  "full name": "Ashish Chavan",
  city: "Pune"
};

console.log(user["full name"]); 
console.log(user["city"]);
```

### With dynamic key

```js
let key = "city";
console.log(user[key]); 
```

---

# 3. Nested Object Access

```js
let person = {
  name: "Ashish",
  address: {
    city: "Pune",
    pincode: 411001
  }
};

console.log(person.address.city); 
console.log(person["address"]["pincode"]);
```

---

# 4. Accessing Array of Objects

```js
let users = [
  { name: "Ashish", age: 22 },
  { name: "Rahul", age: 25 }
];

console.log(users[0].name);
console.log(users[1]["age"]);
```

---

# 5. Accessing Object Inside Array Inside Object

```js
let data = {
  status: "ok",
  items: [
    { id: 1, title: "Book" },
    { id: 2, title: "Pen" }
  ]
};

console.log(data.items[0].title);
console.log(data["items"][1]["id"]);
```

---

# 6. Object Destructuring (Modern JS)

Extract keys directly.

```js
let user = { name: "Ashish", age: 22 };

let { name, age } = user;

console.log(name);
console.log(age);
```

### Destructure with alias

```js
let { name: username } = user;
console.log(username);
```

### Nested destructuring

```js
let student = {
  profile: {
    firstname: "Ashish",
    lastname: "Chavan"
  }
};

let { profile: { firstname } } = student;
console.log(firstname);
```

---

# 7. Destructuring Arrays of Objects

```js
let users = [
  { name: "Ashish" },
  { name: "Rahul" }
];

let [firstUser] = users;
console.log(firstUser.name);
```

---

# 8. Optional Chaining (Avoid undefined errors)

```js
let employee = {};
console.log(employee.address?.city);   // undefined instead of error
```

### Nested

```js
console.log(employee?.address?.location?.pincode);
```

---

# 9. Looping Through Objects

## a) for...in loop (keys only)

```js
let user = { name: "Ashish", age: 22 };

for (let key in user) {
  console.log(key, user[key]);
}
```

---

## b) Object.keys()

Returns an array of all keys.

```js
let keys = Object.keys(user);
console.log(keys); // ["name", "age"]
```

---

## c) Object.values()

Returns an array of values.

```js
let values = Object.values(user);
console.log(values); // ["Ashish", 22]
```

---

## d) Object.entries()

Returns an array of key/value pairs.

```js
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

---

# 10. Accessing With Default Values (Nullish Coalescing)

```js
let user = { name: "Ashish" };

console.log(user.age ?? "Not Provided");
```

---

# 11. Access Using Function Parameters (Destructuring)

```js
function printUser({ name, age }) {
  console.log(name, age);
}

printUser({ name: "Ashish", age: 22 });
```

---

# 12. Access Using Spread Operator

```js
let user = { name: "Ashish", age: 22 };
let newUser = { ...user, city: "Pune" };

console.log(newUser.name);
console.log(newUser.city);
```

---

# 13. Accessing Deep Keys Safely

Without error:

```js
let data = {
  user: {
    profile: {
      details: { age: 22 }
    }
  }
};

console.log(data.user?.profile?.details?.age);
```

---

# 14. Freezing and Accessing (Immutable)

```js
const user = Object.freeze({
  name: "Ashish"
});

console.log(user.name);
```

---

# Interview Questions Related to Object Access

1. Difference between dot and bracket notation.
2. When do we use bracket notation.
3. How to access a key stored in a variable.
4. How optional chaining works internally.
5. How destructuring is helpful.
6. What is Object.freeze and Object.seal.
7. How Object.keys(), values(), entries() differ.
8. Explain nested destructuring with an example.
9. When would you use nullish coalescing.
10. How to handle deeply nested object access without errors.


