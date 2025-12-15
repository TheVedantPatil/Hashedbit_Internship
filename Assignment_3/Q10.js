// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH
function reverseWord(str) {
  return str.split("").reverse().join("");
};

console.log(reverseWord("Hello"));

