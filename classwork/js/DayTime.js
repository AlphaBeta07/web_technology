let my_date = new Date();
console.log(my_date);
console.log(typeof(my_date));
console.log(my_date.toString());
console.log(my_date.toISOString());
console.log(my_date.toLocaleString());
console.log(my_date.toDateString());
console.log(my_date.toTimeString());

console.log(my_date.getDate());
console.log(my_date.getDay());
console.log(my_date.getTime());
console.log(my_date.getFullYear());
console.log(my_date.toLocaleString('default',{
    weekday:'long'
}));

//timeStamp
let my_timestamp = Date.now()
console.log(my_timestamp);
console.log(Date.now());
console.log(Date.now()/1000);

//activity
// how to calculate proper time 