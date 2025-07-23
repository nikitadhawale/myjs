//reduce method 
//combine all values
//Combines all items into one result.

const myNums = [1, 2, 3]

//function method

// const newTotal = myNums.reduce( function(acc, currtval) {
//     console.log(`acc is ${acc} and currtval is ${currtval}`);
//      return acc + currtval
// }, 0)

const newTotal = myNums.reduce( (acc, curr) => acc + curr,  0)

// console.log(newTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile course",
        price: 12999
    },
    {
        itemName: "java fullstack course",
        price: 5999
    },
    {
        itemName: "data analytics course",
        price: 13999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);



