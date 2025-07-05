//objects

//singleton = only one object
//object.create 

const mySym = Symbol("key1");
//object literals 
const JsUser = {
    name: "Nikita",
    age: 18,
    [mySym]: "key1",
    city: "Surat",
    email: "nik@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email = "john@chatgpt.com";
//freeze object that new changes not aplied
// Object.freeze(JsUser);
// console.log(JsUser);
// JsUser.email = "mak@chatgpt.com";

JsUser.greeting = function() {
    console.log("Hello js user");
}

//to referance object
JsUser.greetingTwo = function() {
    console.log(`Hello js user ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



