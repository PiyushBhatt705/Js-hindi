const user = {
    username: "Piyush",
    price: "999",
    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.username = "Sam"

// user.welcomeMessage()   
// console.log(this);

// function one(){
//     let username = "Piyush"
//     console.log(this);
// }

// one()

const one =() => {
    let username = "Piyush"
    console.log(this);
}

// one()

// const sum =(num1, num2) => {
//     return num1 +num2
// }

// const sum =(num1, num2) =>  num1 +num2
const sum =(num1, num2) =>  (num1 +num2)

console.log(sum(3, 4));