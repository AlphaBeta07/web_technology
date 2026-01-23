let num = 10;
let balance = new Number(1000000000);
console.log(balance);
console.log(typeof(balance));
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));// when we used to build e commerce website we used toFixed to show precision values like 100 -> 100.00
console.log(balance.toLocaleString());
console.log(balance.toLocaleString('en-US'));

//math operators
console.log(Math.abs(-4));// it conevrts - to +
console.log(Math.round(4.6));
console.log(Math.ceil(4.7));// top value is selected
console.log(Math.floor(4.6));// base/low value is selected
console.log(Math.max(4.8));

// activity 
//use of Math.random()
console.log(Math.random());
