// console.log("hello");


// const score = 400;
// console.log(score);

// const balance = new Number(1000);
// console.log(balance);

//number methods
// console.log(balance.toString());

//tofixed
// console.log(balance.toFixed(2));

// const otherNumber = 23.8922;
// console.log(otherNumber.toPrecision(3));

// const hundreds = 100000;
// console.log((hundreds.toLocaleString('en-IN')));

//*************Maths**************/

// console.log(Math);

//abs method will convert - into + value
// console.log((Math.abs(-5)));
// console.log((Math.round(8.66)));
// top value 
// console.log((Math.ceil(7.2)));
// bottom value
// console.log((Math.floor(1.2)));

// console.log((Math.min(2, 3, 6, 8)));
// console.log((Math.max(2, 3, 6, 8)));

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

// (max -min + 1) is to avoid 0 to 9 range (0) and + min is to value should be upper 10
console.log(Math.floor(Math.random()* (max - min +1) + min));








