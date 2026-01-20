/*
const - const is the keyword is used keep the values const though out the program.
     If we redeclare it then it will throw the error.

let - let keyword gives the acees to the varibles within the scope only...

var - It is older way to declare the varibles.

1. Types of data: 
    o Primitive - number ,string ,boolean ,BigInt, symbol, undefined ,null
    o Non-Primitive - object 

2.Difference between null and undefined
NUll - explicitly set to no value
undefined -  only declared variable but not assigned any values.


*/




var a =10;
let ab =20;

console.log(a)
console.log(ab)
{
    var a =200;
    let ab=100;
    console.log(a)
    console.log(ab)
}
console.log("var "+a)
console.log("let " +ab)
console.log("\n")


//  data types 


//undefined 
let x;
console.log(x); //  x = undefined 
console.log("typeof(x) = ",typeof(x))
console.log("\n")

//number
let number = null;  //
console.log("typeof(number) = ",typeof(number)) // number = Null
console.log("\n")




// symbol
let z = Symbol("Hello")
console.log(z);
console.log("typeof(z) = ",typeof(z))
console.log("\n")


// string 
let string = "Atharv";
console.log(string);
console.log("typeof(string ) = ",typeof(string))
console.log("\n")



// conversion 
 

let no =33;
let no_string  = String(no);
console.log(no_string); 


const student ={
    name : "Abhi",
    age : 20 ,
    cgpa : 8.5,
};

console.log(student);
console.log(typeof(student));
console.log(student["name"]);
student.name;