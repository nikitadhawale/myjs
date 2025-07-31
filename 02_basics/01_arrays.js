//Array

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);

const myHero = ["shaktiman", "nagaarjuna"];

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr[0]);


//array methods

// myArr.push(8);
// myArr.pop(4);

// myArr.unshift(10);
// myArr.shift();

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(3));

// join method will convert array to string
// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof myArr);

//slice splice

console.log("A", myArr);
// original array will change in slice method
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);


// original array will change in splice method
const myn2 = myArr.splice(1, 3);
console.log("c", myArr);
console.log(myn2);










