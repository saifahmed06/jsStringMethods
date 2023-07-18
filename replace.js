//The replace() method returns a new string with the specified string/regex replaced.

// Example 1: Replace the first occurrence
const message = "ball bat";

// replace the first b with c
let result = message.replace('b', 'c');
console.log(result);

// Output: call bat

//Example 2: Replace all occurrences

const text = "Ball Bat Best"
const pattern = /B/g;
const new_strng = text.replace(pattern,"c")
console.log(new_strng)