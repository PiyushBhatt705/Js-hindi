// for of

const myArr = [1, 2, 3, 4, 5, 6]
for (const num of myArr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each Character is ${greet}`);
}

//Map

const map = new Map()
map.set("IN","India")
map.set("U.S.A","United States of America")
map.set("fR","France")
map.set("IN","India")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObj = {
    IN:"India",
    USA :"United States of America",
    fR:"France"
}

for (const [key, value] of myObj) {
    console.log(key, ":-",value);
}