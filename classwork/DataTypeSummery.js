// symbol - used when unique id is needed

// const another_id = Symbol("123");
// console.log(another_id);

// const id = 123;
// console.log(id == another_id);

// array 
// const arr = ["movie", "anime", "horror"];
// const array = [1, 2, 3, 4];

// objects - key and value
// const obj = 
// {
//     fname : "JS",
//     age : 24
// }
// console.log(obj.age);

// functions
// function main(){
//     console.log("anish_landage");
    
// }
// main();

// memeory
// there are two types of memory - stack and queue
// satck used for premitive type and heap for non premitive
let my_yt_channel = "ASL";
let new_yt_channel = my_yt_channel;
console.log(my_yt_channel, new_yt_channel);

new_yt_channel = "asl";
console.log(new_yt_channel);
// premitive datatypes for stack memory when we assign one variable one to another copy is made so changing one does not affect another 

let user1 = {
    fname : "Anish Landage",
    age : 21,
    id : 7
}

let user2 = user1;
user2.id = 25;
console.log(user1.id, user2.id);
// no premenitive datatypes or objects stored in heap memory, when we assign one obj to another refernce is copied not the value so if we change both are changed

