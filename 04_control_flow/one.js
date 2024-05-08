//if

// const isUserLoggedIn =true
// const temperature = 41
// if (temperature < 50) {
//     console.log("Less than 50");
// }
// else{
// console.log("greater than 50");
// }

const score = 200

// if (score >100) {
//     const power = "fly"
//     console.log(`User Power ${power}`);
// }

const balance =1000

// if (balance <500) {
//     console.log("Less than 500");
// }
// else if(balance <750){
//     console.log("Less than 750");
// }
// else if(balance <900){
//     console.log("Less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const UserLoggedIn =true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard && loggedInFromGoogle) {
    console.log("You can buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged in");
}