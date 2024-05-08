// Types of datatypes

//Primitive
// Types: String, Number, Boolean, undefined, null, Symbol,Bigint
const score= 100
const scoreValue= 100
const isLoggedIn = false 
const outsideTemperature=null
let userEmail
const id =Symbol("123")
const anotherId= Symbol("123")
const bigNumber= 143534676454256n

// console.log(typeof bigNumber);
// console.log(id === anotherId);

// Non-Primitive (Reference)
// Types: Array, Object, Functions

const heros=["Iron Man", "Spider Man", "Thor", "Capitain America" ] // Array

const myObj ={
    name:"Piyush",
    age: 14,
    class: 7,
}

// console.log(typeof heros);
// console.log(typeof myObj);

const myFunction = function () {
    console.log("Hello world");
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Types of Memory:-
// Stack Memory => Primitive Datatypes
// Heap Memory => Non-Primitive(Reference)

// Examples

let myName = "Piyush"

let anotherName= myName
anotherName= "Piyush Bhatt"

// console.log(myName);
// console.log(anotherName);

let userOne = {
    email:"user3892@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email= "piyush@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);