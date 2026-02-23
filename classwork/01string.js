let str1 = "Anish";
console.log(str1);
console.log(typeof(str1));


//string interpolition
console.log(`Hello my name is ${str1}`);

let fname = "bond";
console.log(`${fname}`);

//why we use new keyword
const gameCount = new String("Anish");
console.log(gameCount.length);
console.log(gameCount.toLowerCase());
console.log(gameCount.charAt(2));
console.log(gameCount.indexOf('i'));
console.log(gameCount.trim());
console.log(gameCount.toUpperCase)

//activity
//check all methods/function
//1.toUpperCase()
let name = "anish";
console.log(name.toUpperCase());

//2.slice()
let str = "JavaScript";
console.log(str.slice(0, 4));

//3.repeat()
let word = "Hi ";
console.log(word.repeat(3));

//4.include()
let msg = "I love JavaScript";
console.log(msg.includes("love"));

//5.trim()
let text = "   Hello World   ";
console.log(text.trim());

//6.substring()
let lang = "Programming";
console.log(lang.substring(0, 7));

//7.stratswith() and ensdswith()
let file = "photo.jpg";
console.log(file.startsWith("photo"));

console.log(file.endsWith(".jpg"));

//8.replace
let sentence = "I like tea";
console.log(sentence.replace("tea", "coffee"));
