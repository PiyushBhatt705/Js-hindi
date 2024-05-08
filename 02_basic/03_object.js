//Singleton

//object Literal

const mySym = Symbol("Key")

const jsUser ={
    name: "Piyush",
    "Full name": "Piyush Bhatt",
    [mySym]: "myKey1",
    age: 14,
    location: "Haldawni",
    email: "piyush@gmail.com",
    isLoggedIn :false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Hello Js user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())