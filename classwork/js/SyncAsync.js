// code execute line by line
// each task waits for previous task to finish
// js by default is synchronous

// console.log("Start");
// function add(a, b){
//     return a + b;
// }
// let result = add(5, 6);
// console.log(result);
// console.log("End");

// Asynchronous in js, some task take time like api call, database, file read and timer, js doesnot wait it moves to next line, non-blocking behaviour 
// used in fetching data from server, reading file, set timeout, api calls

console.log("Start");
setTimeout(()=>{
console.log("Inside Timeout");
},2000);
console.log("End");
// settimeout is a Asysncro it waits 2 sec mean while js prints ens after 2 sec inside the block

// activity 1
// guess the output game

// activity 2
// blocking vs non-blocking 2 code

// activity 3
// real time use of sync and async

// activity 4
// api fetch