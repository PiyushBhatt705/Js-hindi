const name= "Piyush"
const studying=7

// console.log(name+studying);
// console.log(`My name is ${name} and i study in class ${studying}.`);

const anotherName= new String("Piyush Bhatt web developer")
// console.log(anotherName[0]);
// console.log(anotherName.__proto__);

// console.log(anotherName.length);
// console.log(anotherName.toUpperCase());

// console.log(anotherName.charAt(2));
// console.log(anotherName.indexOf('t'));

const anotherString = anotherName.substring(0,4);
// console.log(anotherString);

const newString1= new String("Piyush-bhatt")

const newString2 = newString1.slice(0,5);
// console.log(newString2);


const string1 = "    Piyush    "
console.log(string1);

console.log(string1.trim());

const url = "https://Piyush.com/piyush%20bhatt"
console.log(url.replace("%20", "-"));

console.log(url.includes("Piyush"));

console.log(anotherName.split(" "));