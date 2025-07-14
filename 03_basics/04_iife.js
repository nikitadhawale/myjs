//Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log("DB connected");
})();

//IIFE NO NAME  
//parameter IIFE
( (name) => {
    console.log(`DB two connected ${name}`);
} ) ("Nikita");
