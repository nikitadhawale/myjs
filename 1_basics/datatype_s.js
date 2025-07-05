//#Primitive data types

// 7 types : string, number, boolean, null, undefined, symbol, bigInt

// Reference data types(non-perimitive)

// Array, Object, Functions

// js is dynamically typed language don't need to specify type of variable

const score = null;

//Symbol eg

const id = Symbol('123')

const anotherId = Symbol('123');

console.log(id === anotherId);

console.log(id);

//bigInt eg

const bigNumber = 2346764679669797n;
console.log(bigNumber);


//array eg 

const fruits = ['apple', 'banana', 'grapes'];

//objects 

let myobj = {
    name: 'nikita',
    age: 22,
}
console.log(myobj);

//functions
// function types will be onject function type
// array return type will be object
//object return type will be object 

const myFunction = function () {
    console.log("Heloo");  
}
myFunction();

console.log(typeof fruits);

//*************************\\

//stack(primitive)
// store the copy od varibles

let myname = "nikita";

let anotherName = myname;
anotherName = "john";

console.log(myname);
console.log(anotherName);



// Heap(non-primitive)
// store the reference of varibles

let userOne = {
    email: "user@gmail.com",
    upi: "user@upi"
}

let userTwo = userOne;

userTwo.email = "nik@google.com";

console.log(userOne.email);
console.log(userTwo.email);








