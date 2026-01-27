// singleton objects
const user = new Object()
console.log(user);
const user1 = {}; // non singleton object

user1.id = 123;
user1.name = "Anish";
user1.isLogin = true;
console.log(user1);

// object inside obj

const user3 = {
    email : "asl@gmail.com",
    username : {
        fullname : {fname : "Anish", sname : "Landage"}
    },
}
console.log(user3);
console.log(user3.username.fullname.fname);
