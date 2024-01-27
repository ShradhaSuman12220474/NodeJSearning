const arrayLike = {length:5};
const newArray = Array.from(arrayLike,(v,i)=>{
    console.log(v);
    return i;
});
console.log(newArray)