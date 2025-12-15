// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.
// JavaScript program to find the digit sum by 
// repetitively Adding its digits
function repeatSum(n) {
  let sum = 0;

  while (n > 0 || sum > 9) {
    if (n === 0) {
      n = sum;
      sum = 0;
    };

    sum += n % 10;
    n = Math.floor(n / 10);
  };
  return sum;
};

console.log(repeatSum(456));
