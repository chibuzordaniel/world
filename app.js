// let name = prompt("hi");

// document.getElementById('hello').innerHTML = 'hello:' +  name;

// console.table([1, 2, 4, 66, ]);

// let greet = "good",

// output = greet.repeat('5');

// console.log(output)

//   const number1 = 30,
//         number2 = 50,
//         number3 = 70;

//         let result;
//         // addition

//         result = number1 + number2;
         
//         result = number2 - number1;

//         result = number1 / number2;

//         result = number1 % number2;

//         console.log(result);


// console.log(1>2);
// console.log(1 < 2)

// const product = 'pizza',
//       price = 30,
//       product2 = 'Hamburger',
//       price = 40;


//       //old method
//       let html;

//      html = '<ul>' + 
//              '<li>item:' + product1 + '</li>' +
//              '<li>price:' + price1 + '</li>' +
//              '<li>item:' + product2 + '</li>' +
//              '<li>price:' + price2 + '</li>' +
//              '<li>total:' + (price1 + price2) + '</li>' +
//            '</ul>';

//       let app = document.querySelector('#app')
//       app.innerHTML =html


// //Array of  months
// const months = new Array('January',  'February',  'march',
// 'April',  'May', 'June');

// //check
// console.log(months.length);


// const today = new Date();

// console.log(today)


// // for loops
// for(let i = 0; i <8; i++){
//     console.log(`Number: ${i}`);
// }


// const shoppingCart = ['product 1',  'product 2', 'product 3',  'product 4'];

// console.log();

// for(let i = 0; i <shoppingCart.length; i++) {
//   console.log(`product: ${shoppingCart[i]}`);
// }

// while loops


// let i = 0;

// while(i <10){
//     console.log(`Number: ${i}`);
//     i++;
// }
 
// Map
const shoppingCart = [
    {id: 1, product: 'Book'}, 
    {id: 1, product: 'shirt'}, 
    {id: 1, product: 'Album'}, 
];

const productName = shoppingCart.map(function(productName){
    return productName.product;
});

console.log(productName);