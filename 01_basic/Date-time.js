// Dates

let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(typeof myDate)
// console.log(myNewDate.toDateString());
// let myNewDate = new Date(2024, 6, 17,5,2)
// console.log(myNewDate.toLocaleString());
// let myNewDate = new Date("2024-01-14")
let myNewDate = new Date("07-14-2024")
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()


// console.log(myTimeStamp)
// console.log(myNewDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

// console.log(newDate)
// console.log(newDate.getDay() + 1)
// console.log(newDate.getMonth())

console.log(newDate.toLocaleString("default" ,{
    weekday: "long"
}))