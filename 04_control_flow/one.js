//control flow

//if
// if(true){
//     //excute code
// }
// if(false){
//     //not excute
// }

//<, >, <=, >=, ==, ===, !=, 

// const temp = 41;

// if (temp === 41){
//     console.log("less than 50");
// } else {
//    console.log("greater than 50");
// }
// console.log("excuted");

// const score = 200;

// if (score > 100) {
//     const power = "fly";
//     console.log(`user power: ${power}`);   
// }

//no scope for power varible
// console.log(`user power: ${power}`);   



//short hand if

const balance = 1000

// //implict scope
// if(balance > 500) console.log("test"),
// //multiple add
// console.log("test2");

//nested if

// if( balance < 500){
//   console.log("less than 500");
// } else if(balance < 750){
//   console.log("less than 750");
// } else if(balance < 900){
//   console.log("less than 950");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


//in & AND all condition must be ture otherwise not excute
if(userLoggedIn && debitCard && loggedInFromGoogle){
   console.log("Allow to buy courese");
}

//OR one should be true 
if(loggedInFromGoogle || loggedInFromEmail){
   console.log("user Logged In");
}


