//* function Declaration
//* function Invocation
//* function Parameter
//* function Argument
//* function Expressions
//* Anonymous Function
//* Return Keyword
//* IIFE (immediately imvoked function expression)
//? more...

//* js function in ditails
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(5, 7);

// function alertes(name){
// console.log(`Hello ${name} Welcome to Bangladesh`);
// }
// alertes("salman");
// alertes("farcy");

//* function Expration
// var result = function alertes(name){
// console.log(`Hello ${name} Welcome to Bangladesh`);
// }
// alertes("salman");
// alertes("farcy");
// result("farabe")

//* Anonymous Function
// var result = function (a, b = 10) {
//   console.log(a + b);
// };
// result(4);

//* Return Keyword
// var result = function (a, b) {
//   return(a + b);
// };
// var results = result(4, 7)
// console.log(results);

//* IIFE (immediately imvoked function expression)
// (function (a, b) {
//   console.log(a + b);
// })(5, 6);

//IIFE expration
// var result = (function (a, b) {
// console.log(a + b);
//   return a + b;
// })(3, 9);
// console.log(result);

// var result = (a, b) => {
//     console.log(a + b);
// }
// result(23, 45)

// const calculator = (num1, num2, oprator) => {
//   let result;
//   switch (oprator) {
//     case "+":
//       return (result = num1 + num2);

//     case "-":
//       return (result = num1 - num2);

//     case "/":
//       if (num2 === 0) {
//         return `0 is not alwoud`;
//       } else {
//         return (result = num1 / num2);
//       }
//     default:
//       return `No Oprator found`;
//   }
// }
// let clresult = calculator(3, 6, "+")
// console.log(clresult);

// const isReverse = (str) => {
//   let revers = "";
//   for (let car = str.length - 1; car >= 0; car--) {
//     console.log(str[car]);
//     revers = revers + str[car];
//   }
//   return revers;
// };
// let reversString = isReverse("salman farcy");
// console.log(reversString);


//how to get palin rom word
const isReverse = (str) => {
  let revers = "";
  for (let car = str.length - 1; car >= 0; car--) {
    revers = revers + str[car];
  }
  //condtion write way 1
  // if(str === revers){ 
  //   return `${true} this is palin rom`;
  // }else{
  //   return `${false} this is not palin rom`;
  // }

  //condtion write way 2

  return str === revers ?  true : false
};
let reversString = isReverse("level");
console.log(reversString);

