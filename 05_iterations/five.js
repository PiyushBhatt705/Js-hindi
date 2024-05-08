const myArr =[1, 2, 3, 4, 5, 6]

myArr.forEach( function (item) {
    // console.log(item);
});

myArr.forEach((item) => {
    // console.log(item);
});

function printMe(item) {
    // console.log(item);
}

// myArr.forEach( printMe)

myArr.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const coding =[
    {
        language :"Python",
        languageFileName: "py"
    },

    {
        language :"JavaScript",
        languageFileName: "js"
    },

    {
        language :"ruby",
        languageFileName: "rb"
    }
]

coding.forEach((element) => {
    console.log(element.language);
});