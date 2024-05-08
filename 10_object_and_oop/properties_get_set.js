function User(email, password) {
    this._email = email ;
    this._password = password 

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(Value){
            this._email = Value
        },
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(Value){
            this._password = Value
        },
    })
}

const chai = new User("Chai@chai.com", "chai")
console.log(chai.email);