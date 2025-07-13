//scopes

//global scope
let a = 100;

if(true) {
  let a = 10
  const b = 20

  //block scope
//   console.log("inner: ", a);
  
}

// console.log(a);
// console.log(b);
// console.log(c);

//nested scopes
//in scope child can access parent property but 
//parent can not access child property

function one() {
    const username = "Nikita";

    function two(){
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website);
    
    two()
}
one()


if(true) {
    const username1 = "Nikita"
    if(username1 === "Nikita"){
        const website1 = " youtube"
        // console.log(username1 + website1);
    }
    // console.log(website1);//error 
}

// console.log(username1);


// ****************  interesting   ****************

console.log(addone(6));
function addone(num){
    return num + 2
}


//expreion function variable added
console.log(addTwo(4));
const addTwo = function(num){
    return num + 2
}

