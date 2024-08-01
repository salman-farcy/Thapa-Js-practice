//? String in JavaScript are a fundamental data type that represents a sequence of characters.
//? String create with-single or double quotes works the same.
//? Ther is no defference beween the two .

//*String Properties:
//? length: property that returns the length of the string (number of charcters).
// const str = "Hello, World!";
// console.log(str.length);
//TODO: search method 
//? indexOf()
//? indexOf()
//? Array.from()
//? lastIndexOf()
//? search()
//? match()
//? matchAll()
//? includes()
//? startsWith()
//? endsWith()

//* indexOf()
// let text = "salman farcy";
// console.log(text.indexOf("Farcy"))
// console.log(text.indexOf("farcy"))

//* Array.from()
// let text = "salman farcy";
// let strArr = Array.from(text);
// let strMap = strArr.map((element, index) => {
//    return `${element} - ${index}`
// })
// console.table(strMap);

//* lastIndexOf()
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let index = text.lastIndexOf('JavaScript')
// console.log(index);

//* search()
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.search(/javascript/i);
// console.log(result);

//* match()
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.match(/Javascript/gi);
// console.log(result);

//* matchAll()
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.matchAll("JavaScript");
//   console.log(...result);
// 
// for (let item of result){
//    console.log(item[0]);
// }

// for(let index of result){
//    console.log(index.index);
// }

//* includes();
// TODO:includes must not be a regular 
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.includes("java");
// console.log(result);

//* startsWith();
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.startsWith('Hello')
// console.log(result);


//* endsWith()
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.endsWith("Cours");
// console.log(result);
