 let myName = "Piyush"

// console.log(myName.length);

let myHero = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Lightning",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Piyush = function(){
    console.log("Piyush is present in all objects");
}

Array.prototype.Hitesh = function(){
    console.log("Piyush is present in all Array");
}

// heroPower.Hitesh()

// heroPower.Piyush()
// myHero.Piyush()
// myName.Piyush()

// INHERITANCE  

const teacher = {
    makeVideo:true
}

const teascherSupport = {
    isAvailable:false
}

const TASupport= {
    makeAssingment:"js Assingment",
    fullTime: true
}