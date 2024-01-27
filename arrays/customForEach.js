/**
 * Implement a customForEach(arr,cb){
 * it applies the call back function on each element
 * }
 */

function customForEach(arr,cb){
    for(let i=0;i<arr.length;i++){
        cb(arr[i]);
    }
}

let arr=[3,5,7,4];
customForEach(arr,(element)=>{
    console.log("Element is ", element);
})

