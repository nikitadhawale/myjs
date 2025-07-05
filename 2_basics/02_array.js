//array

const marvelHeros = ["ironman", "spiderman", "hulk"];
const dcHeros = ["batman", "superman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

//two array marge and new array return
// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

//new method spriead  smae like concat
const newHeros = [...marvelHeros, ...dcHeros];
// console.log(newHeros);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9,[6,9]]];
//flat neasted array marged in one array
const realArray = anotherArray.flat(Infinity);
// console.log(realArray);


console.log(Array.isArray("Niikita"));
//creating array from string
console.log(Array.from("Niikita"));
console.log(Array.from({name: "Niikita"})); //imp interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
//another way to create arrray of method
console.log(Array.of(score1, score2, score3));







