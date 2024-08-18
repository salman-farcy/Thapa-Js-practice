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

//* slice()
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.slice(6, 15);
// console.log(result);

// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.slice(-7)
// console.log(result);

//* substring()
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.substring(-6)
// console.log(result);

//* replace()
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.replace("H", "c")
// let result = text.replace("JavaScript", '')
// let result = text.replaceAll("JavaScript", "java")
// let result = text.substring(1)
// console.log(result);

//* ==============================
//* Extracting String Characters
//* ==============================

//* charAt
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.charAt(6);
// console.log(result);

//* charCodeAt()
// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.charCodeAt(6);
// console.log(result);

// let text = "Hello JavaScript , welcome to our world best JavaScript Cours";
// let result = text.at(-5);
// console.log(result);

//*trim
// const str = "    hello, world!   ";
// const trimStr = str.trim();
// console.log(trimStr);

//* split()
// const str = "apple,orange,komola";
// const splitStr = str.split(",").reverse().join();
// console.log(splitStr);

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));
// console.log(String.fromCharCode(122));

// for(let char = 97; char <= 122; char++){
//     console.log(String.fromCharCode(char));
// }
//
// console.log("salman faccy");

const checkAllVowelPersentOrNot = (str) => {
  const vowels = "aeiou";
  for (let char of vowels) {
    console.log(char);
    // console.log(str.includes(char));
    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
};
console.log(
  checkAllVowelPersentOrNot("my name is a salman farcy whats your name in thne")
);
