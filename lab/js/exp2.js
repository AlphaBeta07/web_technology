// acitity1
// create array, function and object and print it
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);

// function asl(name) {
//     return "Hello, I'm " + name;
// }
// console.log(asl("Anish"));

// let student = {
//     name: "Anish",
//     age: 21,
//     branch: "AIML"
// };
// console.log("Object:", student);


// activity2
// reverse number
// let num = 12345;
// let rev = 0;

// while (num > 0) {
//   rev = rev * 10 + (num % 10);
//   num = Math.floor(num / 10);
// }

// console.log(rev);



// activity3
// check num palindrome
// let num = 121;
// let original = num;
// let rev = 0;
// while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }

// if (original === rev)
//     console.log("palindrome");
// else
//     console.log("not palindrome");


// activity4
// check fibonacci
let n = 10;   // number of terms
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}

// activity5
// find largest element in array
// let arr = [3, 7, 2, 9, 5];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max)
//         max = arr[i];
// }
// console.log(max);

// activity6
// remove duplicate element in from
let arr = [1, 2, 2, 3, 4, 4, 5];
let uni = [];

for (let i = 0; i < arr.length; i++) {
  if (uni.indexOf(arr[i]) === -1) {
    uni.push(arr[i]);
  }
}

console.log(unique);


// activity7
// find miss number in array
let arr = [1, 2, 4, 5, 6];
let miss;
for (let i = 0; i < arr.length; i++){
    if (arr[i] != i + 1){
        miss = i + 1;
        break;
    }
}
console.log(`missing num is : ${miss}`);

// Activity 8
// Reverse a String
let str = "madam";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log("Reversed String:", reverse);


// Activity 9
// Count Vowels in String
let vowelCount = 0;

for (let i = 0; i < str.length; i++) {
  if (
    str[i] == 'a' || str[i] == 'e' || str[i] == 'i' ||
    str[i] == 'o' || str[i] == 'u'
  ) {
    vowelCount++;
  }
}
console.log("Vowel Count:", vowelCount);


// Activity 10
// Check Palindrome
if (str === reverse) {
  console.log("Palindrome String");
} else {
  console.log("Not Palindrome String");
}


// Activity 11
// Check Prime Number
let num = 7;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not Prime Number");
}


// activity12
// factorial number
// let num = 6;
// let new_num = 1;
// for (let i = num; i > 0; i--){
//     new_num = new_num * i;
// }
// console.log(new_num);


// activity13
// function to find even or odd
// function evenodd(num){
//     if (num % 2 == 0)
//         return "Even";
//     else
//         return "Odd";
// }
// console.log(evenodd(10));

// activity4
// function to sum of array
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(9, 10));


