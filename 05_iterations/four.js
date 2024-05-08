const myObj = {
    IN:"India",
    USA :"United States of America",
    fR:"France"
}

for (const key in myObj) {
    // console.log(`${key} Shortcut is for ${myObj}`);
}

const myArr =[1, 2, 3, 4, 5, 6]

for (const key in myArr) {
//    console.log(myArr[key]);
}

const map = new Map()
map.set("IN","India")
map.set("U.S.A","United States of America")
map.set("fR","France")
map.set("IN","India")

for (const key in map) {
  console.log(`${map} ${key}`);
}