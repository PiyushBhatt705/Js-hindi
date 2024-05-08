var c = 30
let a = 300

if (true) {
    let a = 20
    const b = 10
    // console.log("Inner: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Piyush"
    
    function two() {
        const website = "You Tube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Piyush"
    if (username === "Piyush") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++++++++++++++Intresting+++++++++++++++++++++++++

addOne(5) // No Error
function addOne(num) {
    return num + 1
}

// addTwo()  // Error
const addTwo = function (num) {
    return num + 1
}