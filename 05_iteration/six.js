//

// const coding = ["js", "ruby", "cpp", "python", "java"]


//foreach loop don't return values
// const values = coding.forEach( (item)=> {
//   console.log(item);
//   return item
// } )

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//in fliter you have to give num + condition
//if we open scope{} then writing then add return keyword 


// const newNums = myNums.filter( (num) => {
//     return num > 4
// })


//foreach method
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// } )

// console.log(newNums);


const books = [
  {
    title: "Journey Beyond the Code",
    genre: "Educational",
    publish: "2025-03-15"
  },
  {
    title: "The Silent Algorithm",
    genre: "Educational",
    publish: "2023-11-02"
  },
  {
    title: "Frontend Chronicles",
    genre: "Educational",
    publish: "2024-07-10"
  },
  {
    title: "Mystery of the Debugger",
    genre: "Mystery",
    publish: "2022-05-22"
  },
  {
    title: "React Galaxy",
    genre: "Technology",
    publish: "2021-09-18"
  },
  {
    title: "Design Patterns Unlocked",
    genre: "Non-fiction",
    publish: "2020-12-05"
  }
];


let userBooks = books.filter( (bk) => bk.genre  === "Educational" )

userBooks = books.filter( (bk) => {
    return bk.publish.slice(0, 4) >= 2022 && bk.genre === "Mystery"
} )

console.log(userBooks);


