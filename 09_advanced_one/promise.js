const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Code is Completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 ');
        resolve()
    },1000)
    }).then(function(){
        console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:"Piyush", age:"14", class: "8"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({userName:"Piyush",password:"123"})
        } else(
            reject('ERROR:Something Went Wrong')
        )     
    },1000)
   
})

promiseFour
.then((user) => {
    console.log(user);
    return user.userName
}).then((userName) => {
    console.log(userName);
}).catch((error) => {
    console.log(error);
}).finally(()=> console.log("The Promise Is Either Resolved or Rejected"))

const promisefive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({userName:"Java Script",password:"123"})
        } else(
            reject('ERROR:js Went Wrong')
        )     
    },1000)
})

async function consumePromiseSive() {
   try {
    const response = await promisefive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseSive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonpalceholder.tiypicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error);
        world
    }
}
getAllUsers()   w