
// var myName = "salman farcy" //string data type
// console.log(myName)

// var myFavNum = 34; //namber data type
// console.log(myFavNum)

// var isRaning = true; //boolien true/false data type
// console.log(isRaning);

// var salman;
// console.log(salman); //Undefined data type

// var badMemories = null; //null data type
// console.log(badMemories);

// const bigBoy = 192371092732742349124723n; //bigent data tipe 
// console.log(bigBoy)

// const symbol = ; //!symbol data type  (pore jane nnibo)



// var names = "salman";
// console.log(typeof names) //string

// var names = 45;
// console.log(typeof names) //number

// var names = true;
// console.log(typeof names) //Boolean

// var names 
// console.log(typeof names) //undefined

// var names = null;
// console.log(typeof names) //!null is a (object) data type

// var names = 459132480128403284018204n;
// console.log(typeof names) //bigint



// ? how to converd string to number
// var age = +"20";
// console.log( typeof age)//TODO:this is 1 way converd string to number

// var age = "20";
// console.log( typeof Number(age))//TODO:this is 2 way converd string to number

// var age = "20";
// console.log(parseInt(age)); //TODO:string integar number convert to number

// var age = "20.7";
// console.log( parseFloat(age)); //TODO:string floting number convert to number

// ? how to converd number to string
// var str = 10;
// console.log(typeof String(str));//TODO: the way of number to string convert

// var str = 10;
// console.log(typeof (str+""));//TODO: the way of number to string convert


//? Truthy values 
//* true
//* Any non-emty string ("hello")
//* Any non-zero number (34)
//* Array and object, even if they'ar not empty

//? false values
//! false 
//! 0
//! "" any emty string
//! null
//! undefined
//! NaN (not a number)

//* var myName = "salman"; // true
//* var myName = true; //true
//* var myName = 7; //true
//! var myName = false; //false
//! var myName = 0; // false
//! var myName = ""; // false
//! var myName = null; //false
//! var myName = undefined;//false
//! var myName = NaN; //false

// if(myName){
//     console.log('this is a true');
// }else{
//     console.log('this is a false')
// }


console.log(isNaN("8"))
if(NaN === NaN){
    console.log("ths is true");
}else{
    console.log("this is false") //false
}