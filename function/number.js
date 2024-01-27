console.log(Number.MAX_VALUE);//+Infinity
console.log(Number.MIN_VALUE);//-Infinity


//convert a decimal number to a binary

const x=120
console.log(x.toString(2))//converts the no to binary
console.log(x.toString(8))//converts the no to octal

//If you call the toString without arguments then it just converts it to string
console.log(x.toString());

//to convert binary to decimal we have a parseInt function 
//which takes two arguments string and a base of the input value;

console.log(parseInt("1111000",2));
console.log(parseInt("170",8));

//The most interesting no of the JS => NaN   type-> Number
//It is the only number which is not equal to itself

//precision of a number
const num=23.43545
console.log(num.toPrecision(3))//no of significant digits to print
console.log(num.toFixed(3))//no of significant digits after the decimal

//primitive and non primitive
let a=10;//this is a primitve type
console.log(a.toString());//at this point JS understands that we need an object to access the toString function so it does all the things internally that is conversion
let b=Number(10);
console.log(typeof b)
//Everything in JS behaves as a object
//Boxing in JS the term for wrapping a primitive data to a object


