// --- DOM Activity ---
$(document).ready(function() {
    $('.image-container img').click(function() {
        $(this).remove();
    });
});

// --- Array Activity ---
console.log("--- Array Activity ---");
let arr = [1, 2, 3, 4, 5];
console.log("Original:", arr);
console.log("split():", "a,b,c".split(","));
console.log("slice(1,3):", arr.slice(1, 3));
let arrCopy = [...arr];
arrCopy.splice(1, 2, 9, 10);
console.log("splice(1, 2, 9, 10):", arrCopy);
if (arr.toSpliced) {
    console.log("toSpliced(1, 2):", arr.toSpliced(1, 2));
}

// --- Fetch Activity & Async Await ---
console.log("--- Fetch Activity ---");
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const userList = document.getElementById('user-list');
        users.slice(0, 5).forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
fetchUsers();

// --- Promises ---
function createFakePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise Resolved after 3 seconds");
            // reject("Promise Rejected after 3 seconds");
        }, 3000);
    });
}
createFakePromise().then(console.log).catch(console.error);

// --- Experiments ---
// Fibonacci
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) fib[i] = fib[i - 1] + fib[i - 2];
    return fib.slice(0, n);
}
console.log("Fibonacci(5):", fibonacci(5));

// Palindrome
const isPalindrome = str => str === str.split('').reverse().join('');
console.log("Palindrome 'racecar':", isPalindrome('racecar'));

// Vowels
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
console.log("Vowels in 'javascript':", countVowels('javascript'));

// Largest element
const findLargest = arr => Math.max(...arr);
console.log("Largest in [1, 5, 3]:", findLargest([1, 5, 3]));

// Remove duplicates
const removeDuplicates = arr => [...new Set(arr)];
console.log("Remove dupes [1, 1, 2]:", removeDuplicates([1, 1, 2]));
