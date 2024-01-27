console.log("start")

setTimeout(()=>{//this code is not blocking the rest of the code written after it instead it goes in other thread for execution.
console.log("Inside Timeout")
},10000)

console.log("End")