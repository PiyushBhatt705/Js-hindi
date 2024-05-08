class User {
    constructor(email, password){
        this.email = email
        this.password= password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(Value){
         this._email = Value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const piyush = new User('P@Piyush.ai', '123')
console.log(piyush.email);