const userEmail = []

if(userEmail){
    console.log("Got email");
}  else {
    console.log("Don't have email");
}

// falsy values

// false, 0, -0, Bigint 0n, "", null, undefine, NaN


// truthy values
// "0", {}, 'fasle', "", [], function(){}


// if(userEmail.length === 0){
//    console.log("arr is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}
