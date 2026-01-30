//activity 1
// diff between arrow and simple function 
// | Feature            | Regular Function                                  | Arrow Function                                               |
// | ------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
// | Syntax             | Uses `function` keyword                           | Uses `=>` (arrow) syntax                                     |
// | Example            | `function add(a, b) { return a + b; }`            | `const add = (a, b) => a + b;`                               |
// | `this` binding     | Has its own `this` depending on how it is called  | Does not have its own `this`, inherits from parent scope     |
// | Arguments object   | Has access to `arguments` object                  | No `arguments` object                                        |
// | Constructor usage  | Can be used as a constructor with `new`           | Cannot be used as a constructor                              |
// | Hoisting           | Function declarations are hoisted                 | Not hoisted (treated as variables)                           |
// | Return statement   | Must use `return` explicitly                      | Implicit return for single expressions                       |
// | Method definition  | Suitable for object methods                       | Not recommended for object methods                           |
// | Callback functions | More verbose                                      | Short and cleaner for callbacks                              |
// | Scope              | Own execution context                             | Lexical (inherits scope)                                     |

//activity 2
// what is use of this keyword
// ~ this refers to the current execution context
// ~ Value changes based on function call
// ~ Arrow functions do not bind this
// ~ Used to access object data and methods

//activity 3
// why we dont use this keyword in arrow fun
// We do not use the this keyword in arrow functions because they were intentionally designed to not have their own this binding. 

//activity 4
// write a code for arrow fun with 3 example
// const greet = (name) => {
//     console.log(`Hello, ${name}!`);
// };
// greet('Anish');

// const sum = (a, b) => {
//     console.log(`Sum = ${a + b}`);
// };
// sum(5, 9);

// const num = (a) => {
//     a % 2 == 0 ? console.log(`even`) : console.log(`odd`);
// };
// num(5);

//activity 5
// write a code for switch case in js
// let choice = "a";
// switch(choice){
//     case "a" : console.log(`1st case`);
//         break;
//     case "b" : console.log(`2nd case`);
//         break;
//     case "c" : console.log(`3rd case`);
//         break;    
// }

//activity 6
// how to use truthy and falsy values with explanation

//activity 7
// ternary in js

//activity 8
// write a code for how to use loops in array with example

//activity 9
// diff bet for of and for in with example

//activity 10
// how to use filter and map function in js with 3 examples