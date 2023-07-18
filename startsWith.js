// The startsWith() method returns true if a string begins with specified character(s). If not, it returns false.
// The syntax of the startsWith() method is:

// str.startsWith(searchString, position)
// Example
const message = "JavaScript is fun";

// check if message starts with Java
let result = message.startsWith("Java");

console.log(result);    // true

// check if message starts with Script
result = message.startsWith("Script");

console.log(result);    // false