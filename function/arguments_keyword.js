function addNumberes(){
    //no parameters passed in the function
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

//variable arguments
console.log(addNumberes(9,1,4))
console.log(addNumberes("sanket", 1,2,4));
console.log(addNumberes(5))


//argumets gives us access to a special object that supports
// array like syntax and can be used to fetch all variable arguments;