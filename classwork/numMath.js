/****************************************************
 * numberMath.js
 * Aim: Learn and revise Number and Math methods
 * Author: Shreya
 ****************************************************/

/* =========================
   PART 1: NUMBER METHODS
   ========================= */

// Number() – converts value to number
// Used when input comes as string (forms, user input)
let strNum = "25";
let num1 = Number(strNum);
console.log("Number():", num1);

// parseInt() – converts to integer (whole number)
let floatStr = "45.8";
let intNum = parseInt(floatStr);
console.log("parseInt():", intNum);

// parseFloat() – converts to decimal number
let priceStr = "99.99";
let price = parseFloat(priceStr);
console.log("parseFloat():", price);

// toFixed() – limits digits after decimal
let value = 12.34567;
console.log("toFixed(2):", value.toFixed(2));

// isNaN() – checks whether value is not a number
let checkValue = "abc";
console.log("isNaN():", isNaN(checkValue));


/* =========================
   PART 2: MATH METHODS
   ========================= */

// Math.round() – rounds to nearest integer
console.log("Math.round(4.6):", Math.round(4.6));

// Math.ceil() – rounds up
console.log("Math.ceil(4.1):", Math.ceil(4.1));

// Math.floor() – rounds down
console.log("Math.floor(4.9):", Math.floor(4.9));

// Math.sqrt() – square root
console.log("Math.sqrt(16):", Math.sqrt(16));

// Math.pow() – power calculation
console.log("Math.pow(2, 3):", Math.pow(2, 3));


/* =========================
   Math.random()
   ========================= */

// Math.random() generates a random number between 0 and 1
console.log("Math.random():", Math.random());

// Random number between 1 and 10
let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random number (1-10):", random1to10);

// OTP Generation (4-digit)
// Used in banking apps, login verification
let otp = Math.floor(Math.random() * 9000) + 1000;
console.log("Generated OTP:", otp);

// Random discount percentage (1–50%)
// Used in e-commerce applications
let discount = Math.floor(Math.random() * 50) + 1;
console.log("Random Discount:", discount + "%");

// Random dice value (1–6)
// Used in online games
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice Value:", dice);


/* =========================
   FINAL CONCLUSION
   ========================= */

// Number methods are used for conversion and formatting
// Math methods are used for calculations and logic
// Math.random() is used for security, games, fairness, and automation

console.log("Program executed successfully!");
