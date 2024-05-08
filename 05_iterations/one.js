//for

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element === 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10 ; j++) {
        // console.log(`inner loop Value: ${j} and inner loop ${i}`);
        // console.log(i +"*"+ j+'='+ i*j);
    }
}

// for (let i = 0; i <= 10; i++) {
//     const table = 2
//     console.log(table ,"*",i,"=",table*i);
// }

let myArray= ["Flash","Super Man", "Bat Man"]
// console.log(myArray.length());
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break continue

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`5 Detected`);
        break
    }
    console.log(`Index Value is ${index}`);
}