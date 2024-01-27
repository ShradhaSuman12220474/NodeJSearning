//1-> slice-> when we want a continous part of the array then we use slice method
let arr= [23,56,8,4,2,6,7]

console.log(arr.slice(2,6))//negative index is also supported but it will always move in forward direction
/**
 * splice -> removes the element and if necessary we can add the element in deleted place and also deletes the space in the original array
 * 
 */

let result = arr.splice(1,5)//here 5 is the count value from the starting index i.e 1
console.log(result)
console.log(arr)