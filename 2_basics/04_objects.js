//objects

//const tinderUser = new Object();//singleton object

const tinderUser = {} // non singleton object

tinderUser.id = "12345";
tinderUser.name = "Nikita",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const 

regularUser = {
    email: "nik@gmail.com",
    fullName: {
        userfullname : {
            firstname: "Nikita",
            lastname: "Dhawale"
        }
    }
}

// console.log(regularUser.fullName?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// to mrege 2 obejcts ({target} source)
// const obj3 = Object.assign({}, obj1, obj2);

//spred opratore merge
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "N@gmail.com"
    },
    {
        id: 1,
        email: "N@gmail.com"
    },
    {
        id: 1,
        email: "N@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

//keys
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//every element has own array
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// if(tinderUser.name == "nik"){ 
//  console.log("name is there");
// } else{
//  console.log("name is not there");
// }


//de-structuring object
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "Nikita"
// }

//call object
const {courseInstructor: inst} = course;

// console.log(courseInstructor);
console.log(inst);

//react de-structing 
// const navbar = ({company}) => {

// }

// navbar(company = "Nikita")


//API

//json 
// {
//     "name": "nik",
//     "coursename": "js in hind",
//     "price": "free"
// }

//array api call
[
    {}
    {}
    {}
]

