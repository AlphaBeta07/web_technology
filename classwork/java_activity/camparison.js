console.log(2<1);
console.log(2>1);
console.log(2>=1);
console.log(2<=1);
console.log(2 === 1);
console.log(2 == 1);
console.log(2 != 1)
console.log("2" == 2) // true 
console.log("2" === 2); // false coz it --> checks type + value
// (===) checks type + value


console.log("\n");


console.log("2" >1); // in string if number then the string is converted into the number in the js
console.log("2" < 1);
console.log(null > 0); //For relational comparisons (>, <), JavaScript converts null to a number
console.log(null == 0);// It is NOT converted to a number here
console.log(null < 0);//null is converted to a number (0). Comparison becomes:0 < 0  // false

console.log(null >= 0)  // true  (because 0 >= 0)
console.log(null == undefined)
/*
When using ==, JavaScript normally tries type conversion,
but NOT for null and undefined.
*/


 
console.log("\n")
console.log(undefined==0)
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined<= 0);

/*
-- reasons --
Key Rule to Remember
When undefined is used in relational comparisons (> < >= <=), JavaScript:
➡️ Converts undefined to NaN
And any comparison with NaN is always false.

*/








