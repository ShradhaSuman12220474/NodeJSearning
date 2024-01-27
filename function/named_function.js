const isEvenOrOdd = function process(num){
    return num % 2 ==0;
}

//Is this a named expression
//yes


//How to call it?
//we cant call it with function name like here process
//You can use the name of the variable inside which you'have stored the fuction to call it
const result = isEvenOrOdd(6);
console.log(result)

//If we cant use the name of the fuction to call then what is its importance
//-> 1 Debugging
//-> 2 Recurrsion
//-> 3 Readability