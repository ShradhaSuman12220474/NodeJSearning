function createPromise(time){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(time);
        },time)
    })
}

const resolver=(val)=> {
    console.log("Resolved with value ",val);
    // console.log("PR2 ",pr2);
}
const rejector=(val)=> console.log("Rejected with the value ",val);


//creating the promise 1
const pr1= createPromise(10000);
console.log("PR1",pr1);

const pr2=pr1.then(resolver, rejector);
console.log("PR2", pr2);

const pr3=pr2.then(()=>{
    console.log("Pr2 resolved")
    console.log("pr2",pr2);
},()=>{
    console.log("Pr3 rejected")
})
console.log("PR3 ",pr3)
