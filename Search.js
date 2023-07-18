//The search() method searches for a match between a given string and a regular expression.

//Example
let sentence= "i love JavaScript.";

// pattern that searches the first occurence of an uppercase character
let regExp = /[A-Z]/;

// searching for a match between regExp and given string 
let indexReg = sentence.search(regExp);

console.log(indexReg);

// Output: 0