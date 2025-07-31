//Dates

let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());

//datatypes of date is object
// console.log((typeof mydate));

//in js months start from 0 (jan => 0) so on
let myCreateDate = new Date(2025, 1, 1);
// console.log(myCreateDate.toDateString());

//timestamp
let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
   weekday: 'short',
})






