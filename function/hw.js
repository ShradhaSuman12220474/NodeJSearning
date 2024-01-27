function fun(){
    return NaN;
}

const response = fun();
console.log(response)
if(response){//this will always be false if the returned is NaN otherwise true
    console.log("Inside response")
}
else{
    console.log("Outside response"
    )
}

