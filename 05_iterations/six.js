const myArr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const value = myArr.forEach( (item) => {
    // console.log(item);
})

// console.log(value);

// const nums = myArr.filter( (num) => num >4)

// console.log(nums);  
const num =[]

myArr.forEach(element => {
    if (element >5) {
        num.push(element)
    }
});

console.log(num);