// Check JS connection
console.log("JS file loaded successfully");

// 1) Add two numbers
const add = (a, b) => a + b;

// 2) Square of a number
const square = n => n * n;

// 3) Print numbers from 1 to 5
let numbersList = "";
for (let i = 1; i <= 5; i++) {
    numbersList += i + " ";
}

// 4) Sum of array elements
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

// 5) map(), filter(), reduce()
let numbers = [1, 2, 3, 4, 5, 6];
let result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((total, num) => total + num, 0);

// Show output on webpage
document.getElementById("output").innerHTML = `
    <p><b>Add:</b> ${add(5,3)}</p>
    <p><b>Square:</b> ${square(4)}</p>
    <p><b>Numbers (1-5):</b> ${numbersList}</p>
    <p><b>Array Sum:</b> ${sum}</p>
    <p><b>Final Result:</b> ${result}</p>
`;

// Console output (for practice)
console.log("Add:", add(5,3));
console.log("Square:", square(4));
console.log("Numbers:", numbersList);
console.log("Sum:", sum);
console.log("Final Result:", result);