// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.
const states = ["Maharashtra", "Karnataka", "Goa", "Odisha", "Andhra Pradesh", "Uttarakhand", "Assam", "Rajasthan"];

const filterStates = states.filter((state => {
  let firstletter = state[0].toLowerCase();
  return firstletter !== 'a' && firstletter !== 'e' && firstletter !== 'i' && firstletter !== 'o' && firstletter !== 'u';
}));

console.log(filterStates);