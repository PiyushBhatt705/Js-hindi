const user ={
    userName: "Piyush",
    logInCount: 8,
    singedIn: true,

    getUserDetails: function (){
        // console.log("Got User Details From Database ");
        console.log(`UserName: ${this.userName}`);
    }
}

// console.log(user.getUserDetails());

function User(username, logInCount, isLoggedIn){
    this.userName = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne = User("Piyush", 8, true)
