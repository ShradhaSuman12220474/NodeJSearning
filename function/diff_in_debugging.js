function isEvenOrOdd(num,fn){

    fn();
    return num%2==0
}

const namedFunctionExpression = function exec(){
    const result=isEvenOrOdd(10);
}

const anonymousFunctionExpression = function(){
    const result=isEvenOrOdd(11);
}

// namedFunctionExpression();
isEvenOrOdd(10,function process(){
    console.log("Processing...");
    console.trace("Trace of the functions")

});





//using console .trace we can print the order in which function is called