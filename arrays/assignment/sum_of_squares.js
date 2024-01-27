const arr=[2,6,3,4,7];
console.log(2*2+6*6+3*3+4*4+7*7)
const result = arr.reduce((acc,curr,idx,arr)=> acc+curr*curr,0);
console.log(result)