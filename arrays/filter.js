const arr=[3,4,6,8,9,4,2];

const result = arr.filter((element)=>{
    //some code
    // return element %2 !=0;
})

/**
 * It only stores those value for whose the call back function has returned the true
 * If we do not specify the return statement then JS will automatecally return undefined 
 * which will finally evaluate to false in boolean by the JS and finally nothing will get 
 * stored in the final array
 * But in case of map we are getting array of some length with undefined
 */

console.log(result)
console.log(Boolean([]))//empty array is truthy value