# What is Closure: -
* A closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
e.g

```javascript
   
   function init(){ //outerfunction
    let name="Ashish" //local variable
    function displayName(){ //inner function - no local variable inside inner function
        console.log(name)
    }
    displayName()
   }
   init()
    ```
This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested. The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

```javascript
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

=> Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data.
=>  This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.

# Languages such as Java allow you to declare methods as private, meaning that they can be called only by other methods in the same class.

JavaScript, prior to classes, didn't have a native way of declaring private methods, but it was possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code. They also provide a powerful way of managing your global namespace.