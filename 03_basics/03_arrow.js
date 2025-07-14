//Arrow function

const user = {
    username: "nikita",
    price: 999,

    //this keyword refer to cuurent object
    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to my website`);
        // console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "john";
// user.welcomeMessage()

//empty string
// console.log(this);

//in function this will not work
// function chai(){
//     let username= "Nikita"
//     console.log(this.username);
// }

// chai();

//new way 

// const chai = function () {
//     let username= "Nikita"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username= "Nikita"
//     console.log(this);
// }

// chai()


//1 arrow
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }


//implicit retrun if line code
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

const addTwo = (num1, num2) => ({username: "nikita"})

console.log(addTwo(4, 6));


// const myArray = [2, 3, 5, 7, 8, 9]

// myArray.forEach(() => {})




