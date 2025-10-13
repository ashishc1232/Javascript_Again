# JavaScript Objects & OOP: Object Creation & Methods

## What are Objects?

Objects are collections of related data and functionality stored as key-value pairs. They're fundamental to JavaScript and allow you to model real-world entities in code.

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
```

## Creating Objects

### 1. Object Literal (Most Common)

```javascript
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2024,
  isElectric: true
};
```

### 2. Using the `new Object()` Syntax

```javascript
const book = new Object();
book.title = "1984";
book.author = "George Orwell";
book.pages = 328;
```

### 3. Using `Object.create()`

Creates an object with a specified prototype:

```javascript
const animal = {
  type: "Unknown",
  makeSound() {
    console.log("Some sound");
  }
};

const dog = Object.create(animal);
dog.type = "Dog";
dog.makeSound(); // "Some sound"
```

### 4. Constructor Functions

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const alice = new Person("Alice", 30);
alice.greet(); // "Hi, I'm Alice"
```

### 5. ES6 Classes (Modern Approach)

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
  
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // 50
```

## Object Methods

Methods are functions stored as object properties:

```javascript
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  }
};

console.log(calculator.add(5, 3)); // 8
```

### The `this` Keyword

`this` refers to the object the method belongs to:

```javascript
const user = {
  username: "john_doe",
  followers: 1500,
  
  displayProfile() {
    console.log(`@${this.username} has ${this.followers} followers`);
  }
};

user.displayProfile(); // "@john_doe has 1500 followers"
```

## OOP Principles in JavaScript

### 1. Encapsulation

Bundling data and methods that operate on that data:

```javascript
class BankAccount {
  #balance = 0; // Private field (ES2022)
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
```

### 2. Inheritance

Creating new classes based on existing ones:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    console.log(`${this.name} barks!`);
  }
}

const myDog = new Dog("Rex", "Labrador");
myDog.speak(); // "Rex barks!"
```

### 3. Polymorphism

Different classes can have methods with the same name:

```javascript
class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows!`);
  }
}

const animals = [
  new Dog("Rex", "Labrador"),
  new Cat("Whiskers")
];

animals.forEach(animal => animal.speak());
// "Rex barks!"
// "Whiskers meows!"
```

## Useful Object Methods

### `Object.keys()`, `Object.values()`, `Object.entries()`

```javascript
const product = {
  name: "Laptop",
  price: 999,
  inStock: true
};

console.log(Object.keys(product));    // ["name", "price", "inStock"]
console.log(Object.values(product));  // ["Laptop", 999, true]
console.log(Object.entries(product)); // [["name", "Laptop"], ["price", 999], ...]
```

### `Object.assign()` - Copy/Merge Objects

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }
```

### Spread Operator (Modern Alternative)

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }
```

## Practical Example: Todo List

```javascript
class TodoList {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }
  
  addTask(description) {
    const task = {
      id: this.nextId++,
      description,
      completed: false,
      createdAt: new Date()
    };
    this.tasks.push(task);
    return task;
  }
  
  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = true;
  }
  
  getPendingTasks() {
    return this.tasks.filter(t => !t.completed);
  }
  
  getCompletedTasks() {
    return this.tasks.filter(t => t.completed);
  }
}

const myTodos = new TodoList();
myTodos.addTask("Learn JavaScript");
myTodos.addTask("Build a project");
myTodos.completeTask(1);
console.log(myTodos.getPendingTasks()); // [{ id: 2, description: "Build a project", ... }]
```

## Key Takeaways

- **Object literals** are great for simple, one-off objects
- **Classes** are ideal for creating multiple instances with shared behavior
- **Methods** are functions that belong to objects and use `this` to access object properties
- **OOP principles** (encapsulation, inheritance, polymorphism) help organize complex code
- Modern JavaScript provides many built-in methods for working with objects efficiently

