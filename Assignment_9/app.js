// Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
function declare() { 
    let a = 10;
    const b = 20;
    var c = 30;
    // 'let' is block-scoped and can be reassigned
    // 'const' is a block-scoped but cannot be reassigned
    // 'var' is function-scoped and it can reassigned as well as redeclared

    console.log('let:', a)
    console.log('const:', b)
    console.log('var:', c)
};



// Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.
let fruits = ['apple', 'banana', 'orange', 'mango', 'grapes'];
function secondFruit() {
    return fruits[1]; 
};



// Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
function addDelete(arr) { 
    arr.push("Watermelon");
    arr.pop();
    return arr;
};
addDelete(fruits);



// Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.
const number = [1, 2, 3, 4, 5];
function square(arr) { 
    return arr.map(num => num * num);
}
square(number);



// Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers
function oddNumber(arr) {
  return arr.filter(num => num % 2 !== 0);
}
oddNumber(number);



// Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
const person = { 
    name: "Vedant",
    age: 20,
    occupation: "Student",
    greet: function() { 
        console.log(`I am ${this.name}, I am ${this.age} years old and I am a ${this.occupation}`);
    }
};
person.greet();



// Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
const dimension = {
    width: 5,
    height: 10
}
const area = (dim) => {
    return dim.width * dim.height;
};
console.log(`The are of rectangle is: ${area(dimension)}`);



// Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
function objectKeys(obj) {
  return Object.keys(obj);
}
objectKeys(person);



// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
function merge(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
merge({a: 1, b: 2}, {c: 3, d: 4});



// Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.
const sum = (arr) => { 
    return arr.reduce((total, num) => total + num, 0);
}
sum(number);