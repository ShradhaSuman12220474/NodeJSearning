//Implement a customMap function that mimic the behaviour of the built in map

const arr=[3,4,5,2,7];

// built in map
// const result = arr.map((element,idx)=>{
//     console.log(idx)
//     return element*element;
// })
// console.log(result)

function customMap(arr,cb){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        newArray.push(cb(arr[i],i));
    }
    return newArray;
}

const result = customMap("suman",(element, idx)=>{
    console.log(idx)
    return element;
})
console.log(result);