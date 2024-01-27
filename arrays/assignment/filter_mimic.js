/**
 * Create a function customFilter that mimics the behavior of the JavaScript
Array.prototype.filter method. It should not use the built-in filter method. The function
should handle cases where the callback function returns truthy or falsy values, not just true or
false .

 */
function customFilter(arr,cb){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        const ans= cb(arr[i]);
        if(ans==true){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
// const arr=[34,3,5,3,2,5,7,7,3];
const arr=[
    {name:"Abhay", value: 45},
    {name:"aman", value: 34},
    {name: "suman", value: 90},
    {name: "sunny", value: 56},
    {name: "shivani", value: 89},
    {name: "ashwin", value:1}
]
const result = customFilter(arr,(ele)=>{
    // console.log(ele)
    return ele.name[0]=='a'||ele.name[0]=='A';
})
console.log(result);
