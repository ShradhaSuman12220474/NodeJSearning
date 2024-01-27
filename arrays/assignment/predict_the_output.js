const arrays=[[1,2,3],[4,5,6],[7,8,9]];
const result = arrays.map(arr => arr.filter(num => num %2 ===0))
console.log(result)

const result1= arrays.map(element =>{
    return element.filter(num => num%2===0)
})
console.log(result1)

