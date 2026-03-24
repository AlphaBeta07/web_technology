// a prosimse is an object that represent future result of an async opreation
// promises means i promise to give result later
// example : zomato application 
// promises has 3 states - 1.pending->waiting, 2.resolved->success/fullied, 3.rejected/failed
// example : pending -> resolved -> rejected

// let myPromises = new Promise((resolve, reject) =>{
//     let success = false;
//     if(success == true)
//         resolve("Data fetch Successfully");
//     else
//         reject("Data fetch Failed");        
// },);

// myPromises.then((result) =>{
//     console.log(result)
    
// }).catch((error) =>{
//         console.log(error);
// });

// activty
// why promises is better than call back

// const promise = new Promise((result, resolve)=>{
//     setTimeout(() =>{
//         resolve({username : "Anish",
//                 email : "anishlandage007@gmail.com",
//                 ID : 23
//         })
//     },3000);
// });

// create 4 promises example 
// 1.variable ture then only show result else show error
// 2. async use krun result ks dakhvych
// 3.
// 4.

// Fetch method
// fetch is built in js method used to make https request, this method returns promises
fetch("https://jsonplaceholder.typicode.com/users/5").then((response)=>{ return response.json()}).then((data)=>{console.log(data);
}).catch((error)=>{
    console.log(error);
    
});
// example with fetch method
// fetch users and display names in html page 
// fetch host and show onlly first 5 records 
// create afake promise manually resolve after 3 sec and reject after 3 sec

// interview que
// what is promise in js
// types of promises
// diff bet call back n promise
// whats is fetch method in js
// why do we use response.json
// diff bet then/catch and async awit
// what is promise chain