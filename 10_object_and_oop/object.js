function muliplyBy5(num) {
    return num*5
}

muliplyBy5.power=  2

// console.log(muliplyBy5(5));
// // console.log(muliplyBy5.power);
// console.log(muliplyBy5.prototype);

function creatUser(username, score){
    this.username=username  
    this.score= score
}

creatUser.prototype.increment= function(){
    this.score++
    console.log(this.score);
}

creatUser.prototype.printMe = function () {
    console.log (this.score);
}

const chai = new creatUser('Piyush', 25)
const tea = new  creatUser('Harshit', 10)
                                                                                   
chai.printMe()