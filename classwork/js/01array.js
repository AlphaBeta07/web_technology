// array 
let my_arr = [0, 1, 2, 3, 4, 5];
// console.log(`string array : ${my_arr}`);
// console.log(typeof(my_arr));

const arr = new Array(0, 1, 2);
// console.log(arr[1]);

// array methods
arr.push(16); // push is used add values in array
console.log(arr);

arr.pop();// remove last value from array
console.log(arr);

arr.unshift(9);// it shifts all elemnt & adds number at initial index of array
console.log(arr);

console.log(arr.shift());
console.log(arr.includes(90));// used to check whether the number is present in array or not 
console.log(arr.indexOf(2));

// activity - role of slice and split in array
