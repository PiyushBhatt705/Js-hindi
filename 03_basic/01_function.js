function sayMyName() {
    console.log("P")
    console.log("I")
    console.log("Y")
    console.log("U")
    console.log("S")
    console.log("H")
}

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1+ number2);
// }
function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1+number2
}

// const result = addTwoNumber(3, 4)

// console.log("Result:",result);


function loginUserMessage(Username) {
    if ( !Username) {
        console.log("Please Enter a username");
        return
    }
    return `${Username} Just Logged In`
}


// console.log(loginUserMessage("Piyush"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(100, 200, 300 , 400, 500));

const user = {
    Username:"Piyush",
    price: "free"
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.Username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    Username : "Piyush",
    price : "Free"
})

const myNewArray =[200, 300, 100, 400]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))