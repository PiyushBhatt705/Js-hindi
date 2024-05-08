const myNum =[1, 2, 3, 4, 5]

// const myTotal = myNum.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc +currval
// },0)

const myTotal = myNum.reduce( (acc, currval, ) => {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc +currval, 0
})

// console.log(myTotal);

const  shoppingCart = [
    {
        itemName : "JS Course",
        price : 1999
    },
    {
        itemName : "py Course",
        price : 2999
    },
    {
        itemName : "Java Course",
        price : 999
    },
]

const cart =shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(`Price to pay ${cart}`);