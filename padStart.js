// The padStart() method pads the current string with another string to the start.

// Example
// string definition
let string1 = "CODE";

// padding "*" to the start of given string
// until the length of final padded string reaches 10
let paddedString = string1.padStart(10, "*");

console.log(paddedString);

// Output: ******CODE