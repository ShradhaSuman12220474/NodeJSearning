// Write a function that takes an array of objects with nested objects and transforms each nested
// object’s key-value pairs into arrays of [key, value] . Use map and reduce .

const arr = [
    {name:'suman',age:20,address:{state:'Bihar',pincode:811313}},
    {name:'sunny',age:23,address:{state:'Jharkhand',pincode:811307}},
    {name:'sanket',age:28,address:{state:'Bengaluru',pincode:5462154}},
    {name:'Hitesh',age:34,address:{state:'Rajsthan',pincode:34435345}}
]
console.log(arr)

function customTransform(arr){
    return arr.map(ele=>ele).reduce((acc,curr)=>{
        if(typeof curr =='object'){

        }
        else{

        }
    })
}