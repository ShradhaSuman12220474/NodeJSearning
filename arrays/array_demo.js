//How can we create array in JS

let x=[]; //with the pair of square brackets
//The above code initialized an empty array

console.log(x);

let arr=[10,"sanket",undefined,NaN,null,89];
console.log(arr)

//another way to implement an array
let array = Array(12);//in the parameter we pass the size of the array
console.log(array)

console.log(array.length)

//array with initialised value
let arrayWithZero = Array(12).fill(0);
console.log(arrayWithZero)

let arrayWith0InRange = Array(10).fill(0,4,7);//[4,7)
console.log(arrayWith0InRange)

