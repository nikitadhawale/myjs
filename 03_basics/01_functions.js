//functions

function sayMyName() {
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}

// sayMyName();

//1st way to write function
// function addTowNumber(num1, num2){ //parametres
//    console.log(num1 + num2);
// }


//2st way to write function
function addTowNumber(num1, num2){ //parametres
//    let result = num1 + num2;
//    return result; // return the values 

     return num1 + num2;
}


const result = addTowNumber(4, 9);  //agruments

// console.log("Result:  ", result);


function loginUserMessage(username = "Nik"){
    //if(username === undefined) to !username
    if(!username){
        console.log("PLease enter correct name"); 
        return
    } 
   return `${username} just logged In`;
}

// console.log(loginUserMessage("Nikita"));
// console.log(loginUserMessage("nikita"));


//(...num) concept of rest that take all values
function calculateCartPrice(...number1) {
    return number1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Nikita",
    price: 99
}

function handleObject(anyobject){
   console.log(`Username is  ${anyobject.username} and  Price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "Nik",
//     price: 330
// });


//array with function

const myNewArray = [200, 600, 900];

function returnSecondValue(getarray) {
    return getarray[1]
}

console.log(returnSecondValue([200, 800, 600, 900, 300]));


