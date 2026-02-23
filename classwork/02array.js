const super_heros = ["thor", "ironman", "hulk"];
const super_villans = ["green Goblin", "wanda"];
super_heros.push(super_villans);
// console.log(super_heros);

// console.log(super_heros[3]);
// console.log(super_heros[3][2]);
// console.log(super_heros[2][0]);

// array concat
const arr = super_heros.concat(super_villans);// adds the arrary elemnts of another to original array
console.log(arr);

const ana_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];// nested array
console.log(ana_arr);

const ana_arr1 = ana_arr.flat(Infinity);// how deep a nested array should be flatten default vlaue is 1, infinity is used to flatten all levels the levels doesnt matter,
//flat does not change original array it return new array, flat is used to flatten the nested array (merge the nested array in one)
console.log(ana_arr1);

const ana_arr2 = ana_arr.flat(1);
console.log(ana_arr2);

// data stcripting using this method

console.log(Array.isArray("anish")); //check even vlaue is array or not
// we can use dtring not and array so and will be false

console.log(Array.from("anish"));// converts an iterable objects like string set map into and array 
console.log(Array.from({name : "anish"}));// empty array

console.log(Object.keys({name : "anish"}));
console.log(Object.values({name : "anish"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));// create new arraay from given value no matter how many 
//converts values

// 1. Array.of() Create array from values
// Array.of() creates a new array from the arguments you pass.
//Array.of(element1, element2, element3, ...)


// 2. Array.from() → Convert to array
// Array.from() creates an array from array-like or iterable objects.
//Array.from(object, mapFunction)