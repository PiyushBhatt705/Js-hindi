class User {
    constructor(username, email, password){
        this.username = username
        this.email  = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("piyush", "Piyush123g2gmail.com", "PiyushBhatt@123")

console.log(chai.encryptPassword())
console.log(chai.changeUsername())

// Behind The Screen

function user(username, email, password){
    this.username = username
    this.email  = email
    this.password = password
};

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("piyush", "Piyush123g2gmail.com", "PiyushBhatt@123")

console.log(chai.encryptPassword())
console.log(chai.changeUsername())