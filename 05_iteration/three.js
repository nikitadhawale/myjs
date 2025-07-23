//for of

//array 
//["", "", ""]
//object in array 
//[{}, {}]

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    // console.log(element);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(greet);
}


//Map 
//map is object kind of key value pair
//no duplicate values



const map = new Map()
map.set('IN', "India")
map.set('US', "United states of America")
map.set('Fr', "France")

// console.log(map);



for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

//obect for of 


//for object no working for for of loop
// const myObject = {
//     'game1': 'Nfs',
//     'game2': 'spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

