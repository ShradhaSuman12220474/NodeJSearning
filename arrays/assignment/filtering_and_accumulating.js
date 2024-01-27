const arr=[
    {name:"Abhay", value: 45},
    {name:"aman", value: 34},
    {name: "suman", value: 90},
    {name: "sunny", value: 56},
    {name: "shivani", value: 89},
    {name: "ashwin", value:1}
]
// console.log(34+45)
const result = arr.filter((item)=>item.name[0]=='a' || item.name[0]=='A').reduce((acc,curr)=>{
    // console.log( curr.value)
    return acc+curr.value;
},0)
console.log(result);