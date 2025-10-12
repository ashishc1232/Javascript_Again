# JavaScript Strings & Template Literals 

## Part 1: String Basics & Template Literals

### Template Literals Practice

```javascript
// Example 1: Basic interpolation
const name = "Alice";
const age = 25;
console.log(`My name is ${name} and I'm ${age} years old`);

// Example 2: Expressions in template literals
const a = 10, b = 20;
console.log(`Sum: ${a + b}, Product: ${a * b}`);

// Example 3: Multi-line strings
const message = `
  Hello,
  This is a multi-line
  string using template literals
`;

// Example 4: Nested template literals
const greeting = `Hello ${name}, you will be ${age + 1} next year`;
```

### Practice Exercises - Template Literals

**Exercise 1:** Create a function that takes a product object and returns a formatted string:
```javascript
function formatProduct(product) {
  // Input: { name: "Laptop", price: 999, discount: 10 }
  // Output: "Laptop costs $999 with 10% discount. Final price: $899.10"
}
```

**Exercise 2:** Build an HTML card generator using template literals:
```javascript
function generateCard(user) {
  // Input: { name: "John", role: "Developer", email: "john@example.com" }
  // Return HTML string with user info
}
```

---

## Part 2: Essential String Methods

### 1. **charAt() & charCodeAt()**
```javascript
const str = "Hello";
console.log(str.charAt(0));      // "H"
console.log(str.charCodeAt(0));  // 72
```

### 2. **slice(), substring(), substr()**
```javascript
const text = "JavaScript";
console.log(text.slice(0, 4));      // "Java"
console.log(text.slice(-6));        // "Script"
console.log(text.substring(4, 10)); // "Script"
console.log(text.substr(4, 6));     // "Script" (deprecated)
```

### 3. **indexOf() & lastIndexOf()**
```javascript
const sentence = "Hello world, hello universe";
console.log(sentence.indexOf("hello"));      // 13
console.log(sentence.lastIndexOf("hello"));  // 13
console.log(sentence.indexOf("hello", 14));  // -1 (not found)
```

### 4. **includes(), startsWith(), endsWith()**
```javascript
const email = "user@example.com";
console.log(email.includes("@"));           // true
console.log(email.startsWith("user"));      // true
console.log(email.endsWith(".com"));        // true
```

### 5. **toUpperCase() & toLowerCase()**
```javascript
const mixed = "JavaScript";
console.log(mixed.toUpperCase());  // "JAVASCRIPT"
console.log(mixed.toLowerCase());  // "javascript"
```

### 6. **trim(), trimStart(), trimEnd()**
```javascript
const padded = "   hello   ";
console.log(padded.trim());       // "hello"
console.log(padded.trimStart());  // "hello   "
console.log(padded.trimEnd());    // "   hello"
```

### 7. **split() & join()**
```javascript
const csv = "apple,banana,orange";
const arr = csv.split(",");  // ["apple", "banana", "orange"]
console.log(arr.join(" | ")); // "apple | banana | orange"
```

### 8. **replace() & replaceAll()**
```javascript
const text = "cat cat dog";
console.log(text.replace("cat", "bird"));     // "bird cat dog"
console.log(text.replaceAll("cat", "bird"));  // "bird bird dog"

// Using regex
console.log(text.replace(/cat/g, "bird"));    // "bird bird dog"
```

### 9. **repeat()**
```javascript
console.log("ha".repeat(3));  // "hahaha"
console.log("-".repeat(20));  // "--------------------"
```

### 10. **padStart() & padEnd()**
```javascript
const num = "5";
console.log(num.padStart(3, "0"));  // "005"
console.log(num.padEnd(3, "0"));    // "500"
```

### 11. **match() & search()**
```javascript
const text = "The year is 2024";
console.log(text.match(/\d+/));    // ["2024"]
console.log(text.search(/\d+/));   // 12 (index)
```

---

## Part 3: Interview Practice Problems

### Problem 1: Reverse a String
```javascript
function reverseString(str) {
  // Method 1: Using array methods
  return str.split('').reverse().join('');
  
  // Method 2: Using loop
  // let reversed = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversed += str[i];
  // }
  // return reversed;
}

console.log(reverseString("hello")); // "olleh"
```

### Problem 2: Check Palindrome
```javascript
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
```

### Problem 3: Count Vowels
```javascript
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(countVowels("hello world")); // 3
```

### Problem 4: Capitalize First Letter of Each Word
```javascript
function titleCase(str) {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(titleCase("hello world")); // "Hello World"
```

### Problem 5: Find Longest Word
```javascript
function findLongestWord(str) {
  const words = str.split(' ');
  return words.reduce((longest, current) => 
    current.length > longest.length ? current : longest
  );
}

console.log(findLongestWord("The quick brown fox")); // "quick"
```

### Problem 6: Check Anagram
```javascript
function isAnagram(str1, str2) {
  const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent")); // true
```

### Problem 7: Remove Duplicates
```javascript
function removeDuplicates(str) {
  return [...new Set(str)].join('');
  // Alternative: return str.split('').filter((c, i) => str.indexOf(c) === i).join('');
}

console.log(removeDuplicates("programming")); // "progamin"
```

### Problem 8: Count Character Occurrences
```javascript
function countChars(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

console.log(countChars("hello")); // {h: 1, e: 1, l: 2, o: 1}
```

### Problem 9: Truncate String
```javascript
function truncate(str, maxLength) {
  return str.length > maxLength 
    ? str.slice(0, maxLength - 3) + '...' 
    : str;
}

console.log(truncate("This is a long string", 10)); // "This is..."
```

### Problem 10: Extract Domain from Email
```javascript
function extractDomain(email) {
  return email.slice(email.indexOf('@') + 1);
}

console.log(extractDomain("user@example.com")); // "example.com"
```

---

## Part 4: Advanced Challenges

### Challenge 1: Caesar Cipher
```javascript
function caesarCipher(str, shift) {
  return str.replace(/[a-z]/gi, char => {
    const start = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
  });
}

console.log(caesarCipher("Hello", 3)); // "Khoor"
```

### Challenge 2: String Compression
```javascript
function compressString(str) {
  let compressed = '';
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  
  return compressed.length < str.length ? compressed : str;
}

console.log(compressString("aabcccccaaa")); // "a2b1c5a3"
```

### Challenge 3: Find All Substrings
```javascript
function getAllSubstrings(str) {
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
}

console.log(getAllSubstrings("abc")); // ["a", "ab", "abc", "b", "bc", "c"]
```

---

## Quick Reference: Common String Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `charAt(index)` | Character at index | String |
| `slice(start, end)` | Extract portion | String |
| `indexOf(searchValue)` | First occurrence index | Number |
| `includes(searchValue)` | Check if contains | Boolean |
| `split(separator)` | Split into array | Array |
| `replace(old, new)` | Replace first match | String |
| `replaceAll(old, new)` | Replace all matches | String |
| `trim()` | Remove whitespace | String |
| `toLowerCase()` | Convert to lowercase | String |
| `toUpperCase()` | Convert to uppercase | String |

## Important

1. **Immutability:** Strings are immutable in JavaScript - methods return new strings
2. **Zero-indexed:** String indices start at 0
3. **Negative indices:** `slice()` accepts negative indices, `substring()` doesn't
4. **Template literals:** Use backticks for multi-line and interpolation
5. **Regex:** Learn basic regex for pattern matching with `match()`, `replace()`, `search()`
