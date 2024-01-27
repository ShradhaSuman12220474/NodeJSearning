const arr=[3,5,6,3,7];

const result = arr.forEach((element)=>{
    console.log("Element is",element);
})
console.log(result);//forEach function doesnot return anything ie undefined
/**\
 * but map return an array 
 * 
 */

const result1 = arr.map((element)=>{
    return element*element;
})
console.log(result1);