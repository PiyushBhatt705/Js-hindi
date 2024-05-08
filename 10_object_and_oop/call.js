function setUsername(username){
    this.username = username
    console.log('called');
}

function creatUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new creatUser('Piyush', 'Piyush@fb.com', '123');
console.log(chai);