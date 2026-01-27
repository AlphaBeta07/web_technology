/****************************************************
 * functionsAndArrays.js
 * Aim:
 * 1. Learn how functions work
 * 2. Revise all important array methods
 * 3. Practice examples
 * Author: Shreya
 ****************************************************/

console.log("Functions and Arrays Practice Started");


/* =========================
   PART 1: FUNCTIONS
   ========================= */

/*
Why functions are used:
- To avoid code repetition
- To make code reusable
- To make program clean and readable
- Used everywhere in real projects
*/

// Simple function (no parameter, no return)
function greet() {
    console.log("Hello! Welcome to JavaScript");
}
greet();

// Function with parameters
function add(a, b) {
    console.log("Addition:", a + b);
}
add(10, 20);

// Function with return value
function multiply(x, y) {
    return x * y;
}
let result = multiply(5, 4);
console.log("Multiplication:", result);

// Arrow function (modern JavaScript)
const subtract = (a, b) => {
    return a - b;
};
console.log("Subtraction:", subtract(20, 5));


/* =========================
   PART 2: ARRAYS
   ========================= */

/*
Why arrays are used:
- To store multiple values in one variable
- Used for lists: marks, products, users, etc.
*/

let numbers = [10, 20, 30, 40, 50];
console.log("Original Array:", numbers);


/* =========================
   BASIC ARRAY METHODS
   ========================= */

// push() – add element at end
numbers.push(60);
console.log("After push:", numbers);

// pop() – remove last element
numbers.pop();
console.log("After pop:", numbers);

// unshift() – add element at start
numbers.unshift(5);
console.log("After unshift:", numbers);

// shift() – remove first element
numbers.shift();
console.log("After shift:", numbers);


/* =========================
   ARRAY SEARCH METHODS
   ========================= */

// indexOf() – find position of element
console.log("Index of 30:", numbers.indexOf(30));

// includes() – check element exists or not
console.log("Includes 40:", numbers.includes(40));


/* =========================
   ARRAY TRANSFORMATION
   ========================= */

// map() – modify each element
let doubled = numbers.map(num => num * 2);
console.log("After map (doubled):", doubled);

// filter() – select elements based on condition
let greaterThan25 = numbers.filter(num => num > 25);
console.log("After filter (>25):", greaterThan25);

// reduce() – reduce array to single value
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("After reduce (sum):", sum);


/* =========================
   ARRAY ITERATION
   ========================= */

// forEach() – loop through array
numbers.forEach(num => {
    console.log("forEach value:", num);
});


/* =========================
   ARRAY SORTING & JOINING
   ========================= */

// sort() – sort array
let marks = [45, 88, 23, 99, 60];
marks.sort((a, b) => a - b);
console.log("Sorted marks:", marks);

// reverse() – reverse array
marks.reverse();
console.log("Reversed marks:", marks);

// join() – convert array to string
let joined = numbers.join(", ");
console.log("Joined array:", joined);


/* =========================
   REAL-TIME PRACTICE EXAMPLES
   ========================= */

// Example 1: Calculate average marks
function calculateAverage(arr) {
    let total = arr.reduce((sum, val) => sum + val, 0);
    return total / arr.length;
}
console.log("Average Marks:", calculateAverage(marks));

// Example 2: Find passed students (marks >= 40)
let passedStudents = marks.filter(mark => mark >= 40);
console.log("Passed Students:", passedStudents);

// Example 3: Add bonus marks
let bonusMarks = marks.map(mark => mark + 5);
console.log("Bonus Marks:", bonusMarks);


/* =========================
   FINAL CONCLUSION
   ========================= */

// Functions make code reusable and clean
// Arrays store multiple values efficiently
// Array methods are heavily used in real applications

console.log("Functions and Arrays Practice Completed Successfully!");
