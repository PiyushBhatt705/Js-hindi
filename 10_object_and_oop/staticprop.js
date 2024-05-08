class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static creatId(){
        console.log(this.username+"."+Math.floor((Math.random()*100))+ 1);
    }
}

const Piyush = new user("Piyush")
// Piyush.creatId();

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "i@iphone.com")
iPhone.logMe();