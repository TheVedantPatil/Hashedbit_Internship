// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let text = "Vedant";

let vowels = 0;
let consonants = 0;

for (let char of text.toLowerCase()) {
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      vowels++;
      break;

    default:
      if (char >= 'a' && char <= 'z') {
        consonants++;
      };
  };
};

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);

