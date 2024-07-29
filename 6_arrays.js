//* creating Arrays Accessing Elements Modifying Elements
//? How to insert, add, Replace and Delete Elements in Array(CRUD)
//? filter in an Array
//? Very Very Important Array Methods
//? Array Traversal/iterationg Over arrays
//? How to sort and compare an Array

// let arr = [];
// console.log(typeof arr);

//* =====================
//* Creating Arrays:
//* =====================

//? using Array Constructor
// let fruts = new Array('🍎', '🍌', '🥭');
// console.log(fruts);

//? using array literal
// let fruts = ['🍎', '🍌', '🥭'];
// console.log(fruts);

//? we can also create an empty Array
// let fruts = [];

//* =============================
//* Accessing Elements an array:
//* =============================
//? Accessing Elements: Array Elements are accessed using zero-based indices.
// let furits = ["apple", "orange", "banana"];
// console.log(furits[1]);

//* =============================
//* Modifying Elements an array:
//* =============================
//? Modifying elements: you can modify array elements by assingning new values to specific indices.

// let fruts = ['🍎', '🍌', '🥭'];
// fruts[0] = "🍊";
// console.log(fruts);

//* ======================================
//* Array Traversal/Iteration Over Arrays
//* ======================================
//? for of loop,
// let fruits = ["🍐", "🍋‍🟩", "🍍", "🍇", "🍆", "🌽"];
// for (let item of fruits) {
//   console.log(item);
// }

//? for in loop,
// let fruits = ["🍐", "🍋‍🟩", "🍍", "🍇", "🍆", "🌽"];
// for (let item in fruits) {
//   console.log(item);
// }

//? forEach Mathod
// let fruits = ["🍐", "🍋‍🟩", "🍍", "🍇", "🍆", "🌽"];
// const myForEacharr =  fruits.forEach(function (curElem, index, arr){
//    return `${curElem} ${index}`;
//   // console.log(arr);
// })
// console.log(myForEacharr);

// const number = [1, 2, 3, 4, 5];
// 
// const numGog = number.forEach((elements) => {
//   console.log(elements * 2);
// })



//? map function
// let fruits = ["🍐", "🍋‍🟩", "🍍", "🍇", "🍆", "🌽"];
// 
// const myArrMap =  fruits.map(function (curElem, index, arr){
//   return(`this is the best frutes ${curElem}`);
//   // console.log(arr);
//   
// })
// console.log(myArrMap);
// console.log(fruits);

// const number = [1, 2, 3, 4, 5];
// const numGogFol = number.map((elements) => {
//   return elements * 2;
// });
// console.log(numGogFol);


//? push()

// const bick = ['honda', 'hunk', 'hero'];
// bick.push('docate', 'bmw')
// console.log(bick);


// const fruts = ['🍓', '🍎', '🍌', '🍇'];
// console.log(fruts.push('🍉'));
//  
// 
// for (let item of fruts){
//     console.log(`this is my all Frutes ${item}`);
//     
// }

//? pop()
// const fruts = ['🍓', '🍎', '🍌', '🍇'];
// console.log(fruts.push('🍉'));
// console.log(fruts); //output [ '🍓', '🍎', '🍌', '🍇', '🍉' ]
// 
// console.log(fruts.pop('🍇'));
// console.log(fruts); //output ['🍓', '🍎', '🍌']

//? unshift()
// const bicks = ['🏍️', '🚲', '🛵', '🦼']
// const shiftValue = bicks.unshift('🛴', '🏎️')
// console.log(shiftValue); //output 6
// console.log(bicks); //output [ '🛴', '🏎️', '🏍️', '🚲', '🛵', '🦼' ]


//? shift()
// const cars = ['🚗', '🚕', '🚚', '🚙']; 
// console.log(cars);
// const cutvalus = cars.shift();
// console.log(cutvalus);
// console.log(cars);

//? splice()
//TODO: splice(start, deleteCount, item1, item2)

// const biman = ['🚁', '🛩️', '✈️', '🛸', '🪂', '🚀'];
// delet
// const cutValus = biman.splice(1, 2);
// console.log(cutValus); //rreturn [ '🛩️', '✈️' ]
// console.log(biman);

// const biman = ['🚁', '🛩️', '✈️', '🛸', '🪂', '🚀'];
// // add 
// const spliceValue = biman.splice(3, 1, '🚌');
// console.log(spliceValue);
// console.log(biman);

// const biman = ['🚁', '🛩️', '✈️', '🛸', '🪂', '🚀'];
// add 
// const spliceValue = biman.splice(-1, 0, '🚌');
// const spliceValue = biman.splice(biman.length, 0, '🚌');
// console.log(spliceValue); //[]
// console.log(biman); //['🚁', '🛩️', '✈️', '🛸', '🪂', '🚀', '🚌']



//? indexOf()
//TODO: indexOf(serchElement, formIndex);
// const biman = ['🚁', '🛩️', '✈️', '🛸', '🪂', '🚀'];
// console.log(biman.indexOf('🪂', 5));

//? lastIndexOf()
// const biman = ['🚁', '🛩️', '✈️', '🛸', '🪂', '✈️', '🚀'];
// const result = biman.indexOf('✈️', 3)
// console.log(result);// 2
// const result1 = biman.lastIndexOf('✈️', 4)
// console.log(result1);// 5

//? includes()
// const biman = ['🚁', '🛩️', '✈️', '🛸', '🪂', '✈️', '🚀'];
// const includeValus = biman.includes('🛩️');
// const includeValus2 = biman.includes('🍎');
// console.log(includeValus);// true
// console.log(includeValus2);//false

//? 1: add Dec at the end of an array?
//? 2: what is the return value of splice method?
//? 3: Update march to March (Update)?
//? 4: Delete june from an array?

//*qusen:1 ans: last index a "des" add korte hobe
//*way 1 add op
// const months = ['jan', 'march', 'april', 'jun', 'july'];
// console.log(months);
// const addMonthInLastIndex = months.splice(months.length, 0, 'Des')
// console.log(months);

//*way 2
// const months = ['jan', 'march', 'april', 'jun', 'july'];
// console.log(months);
// const addMonthInLastIndex = months.push('Des')
// console.log(months);

//*qusen:2 ans:
//when used to add elements, the splice method returns an enpty array ([]).


//*qusen:3 ans: updete op
// const months = ['jan', 'march', 'april', 'jun', 'july'];
// const indexToupdate = months.indexOf("march");
// months.splice(indexToupdate, 1, "March")
// console.log(months);

//*qusen:4 ans: delete op
// const months = ['jan', 'march', 'april', 'jun', 'july'];
// console.log(months); //output: ['jan', 'march', 'april', 'jun', 'july']
// const indexNunberOfJun = months.indexOf("jun");
// months.splice(indexNunberOfJun, 1)
// console.log(months);//output: ['jan', 'march', 'april', 'july']

//* =====================
//* Filter in an Array
//* =====================
//TODO: Serch + Filter
//? find Method
//? findIndex
//? filter

//* findd Method
// const number = [1, 2, 3, 4, 5, 6, 7, 4, 6, 8, 9];
// const result = number.find((curElem) => {
//     return curElem > 3;
// })
// console.log(result);

//* findIndex
// const number = [1, 2, 3, 4, 5, 6, 7, 4, 6, 8, 9];
// const result = number.findIndex((curElem) => {
//     return curElem > 3;
// })
// console.log(result);

//* filter
// const number = [1, 2, 3, 4, 5, 6, 7, 4, 6, 8, 9];
// const result = number.filter((curElem) => {
//     return curElem !== 6;
// })
// console.log(result);


//! task EX. le'ts say user wants to delete value 6.
// let value = 6;
// let value1 = 4;
// const number = [1, 2, 4, 3, 4, 5, 6, 7, 8, 6, 9,];
// 
// const updateCart = number.filter(currentElement => {
//     return currentElement !== value1 && currentElement !== value;
// })
// console.log(updateCart);

// const products = [
//     {name: "Laptop", price: 1200},
//     {name: "phone", price: 800},
//     {name: "tablet", price: 300},
//     {name: "smartwatch", price: 150},
// ];
// const filterProducts = products.filter((currentElement) => {
//    return currentElement.price <= 500;
// });
// console.log(filterProducts.name);

//!filter unique values
// const numbers = ["🍎","🍓","🌶️", "🍌", "🍉", "🍓", "🥝", "🍇", "🍐", "🥝", "🍑", "🍍"];
// let uniqueValues = numbers.filter((curElem, index, arr) => {
//     // console.log(index);
//     return (arr.indexOf(curElem) === index);
// });
// console.log(uniqueValues);

// console.log([...new Set(numbers)]);

// const names = ["salman", "rohim", "korim", "joshim", "alli", "fatama"];
// const frutes = ["🍎","🍓","🌶️", "🍌", "🍉", "🍓", "🥝", "🍇", "🍐", "🥝", "🍑", "🍍"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 3, 9, 2];
// 
// const sortNumber =  numbers.sort((a, b) => {
//     return b - a 
// });
// console.log(sortNumber);

const numbers = [2, 6, 9, 7, 4, 9, 8, 1, 5, 8, 4, 2, 3];
numbers.sort((a, b) => {
    if(a > b) return -1;
    if(b > a) return 1;
})

console.log(numbers);

