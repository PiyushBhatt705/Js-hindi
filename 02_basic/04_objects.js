const tinderUser = {}

tinderUser.name ="Sam"
tinderUser.id ="123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email:"some@gmail.com",
    fullname: {
        userFullName:{
            firstName: "Piyush",
            lastName: "Bhatt"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = Object.assign({},obj1,obj2)

// console.log(obj3);

const  user =[
    {
        email:"p@gmail.com",
        id:1
    },

    {
        email:"p@gmail.com",
        id:1
    },

    {
        email:"p@gmail.com",
        id:1
    }
]   

user[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("IsLoggedIn"));

const course ={
    courseName:"Js-in hindi",
    courseFees: '999',
    courseInstructor:"Hitesh"
}

const {courseInstructor: instructor} = course

// console.log(instructor);

const navbar = ({company}) => {

}

navbar(company ="Piyush")