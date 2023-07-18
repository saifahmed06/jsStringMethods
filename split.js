// The split() method divides a string into a list of substrings and returns them as an array.

// split() Syntax
// The syntax of split() is:

// str.split(separator, limit)

// Example
const message = "JavaScript::is::fun";

// divides the message string at :: 
let result = message.split("::");
console.log(result);

// Output: [ 'JavaScript', 'is', 'fun' ]