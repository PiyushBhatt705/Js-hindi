const User = {
    _email: 'p@pb.com',
    _password: 'abc',

    get email(){
        return this._email.toLocaleUpperCase()
    },

    set email(value){
        this.email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);