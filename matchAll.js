// The matchAll() method returns an iterator of results after matching a string against a regular expression.

// Example
// string definition
const sentence = "JavaScript1JavaScript2";

// a pattern having 'JavaScript' followed by a digit
const regex = /JavaScript/g;

// finding matches in the string for the given regular expression
let results = sentence.matchAll(regex);

// looping through the iterator
for (result of results) {
  console.log(result);
}

// Output:
// ["JavaScript1", index: 0, input: "JavaScript1JavaScript2", groups: undefined]
// ["JavaScript2", index: 11, input: "JavaScript1JavaScript2", groups: undefined]