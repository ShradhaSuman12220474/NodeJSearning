function fact(num){
    return Array.from({length:num},(_,i)=>i+1).reduce((acc,cur)=>acc*cur,1);
}

console.log(fact(5))