let myObj = {
    name : "Anish",
    "fname" : "Anish Landage",
    "mySymbol" : "hello jii",
    age : 21 ,
    location : "ichlakaranji",
    email: "anishlandage07@gmail.com",
    login : true,
    last_login_day : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satruday', 'Sunday']
}
// there are two types of obj - 1) object literals, 2) constructors, 3) singleton
// wehn u create a constructor it creates a singleton obj it means itself object 
// when we crate object literals -> singleton not create
// objescts asta teva singleton hott nhi
// object means key value pair


// console.log(myObj.email);
// console.log(myObj.fname);
// console.log(typeof(myObj.fname));
// console.log(myObj);
// console.log(typeof(myObj.mySymbol));

// symbol example
const my_symbol = Symbol("js");
const myObj2 = {
    [my_symbol] : "ASL",
}
// console.log(typeof(myObj2.my_symbol));
// console.log(typeof(myObj2));

// console.log(myObj.email = "asl@gmail.com");
//console.log(myObj);
//console.log(myObj.email);

// Object.freeze(myObj)

// console.log(myObj.email = "asl007@gmail.com");
//console.log(myObj);
// console.log(myObj.email);

myObj.greeting = function(){
    console.log("hello jii");
    
}

console.log(myObj.greeting());
