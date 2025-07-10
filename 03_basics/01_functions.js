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
console.log(loginUserMessage("nikita"));




