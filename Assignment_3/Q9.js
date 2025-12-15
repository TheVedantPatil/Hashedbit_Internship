// Q9) Write a function to count the number of words in a paragraph.
function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
};

console.log(countWords("My name is Vedant Patil"));

