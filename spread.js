// [...] part/full array copy...
let color = ['pink', 'yellow', 'red', 'black', 'blue'];
let color1 = ['white', 'orange'];
let newColor = [...color, ...color1];
console.log(newColor);

let fruits = {
    fruitName: 'apple',
    color: 'red',
    price: 30
}
let updatedfruits ={
    fruitName:'apple',
    color:'orange',
    size:'big',
    fav:'yes'
}
// let newfruit = {...fruits, ...updatedfruits};
// console.log(newfruit);
let newfruit = {...updatedfruits, ...fruits};
console.log(newfruit);

