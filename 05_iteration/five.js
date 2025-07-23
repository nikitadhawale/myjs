//for each

const coding = ["js", "ruby", "cpp", "python", "java"]

//function
// coding.forEach( function (val) {
//       console.log(val);
// } )


//arrow funtion
// coding.forEach( (item) => {
//    console.log(item); 
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//array in object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }

]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
} )