// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
let string = "INDIA";
let splitString = string.split("");

splitString.splice(3, 0, "0", "N", "E", "S");
let newString = splitString.join("");
console.log(newString);
