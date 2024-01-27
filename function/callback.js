function processArray(array, fn){

    for(let i=0;i<array.length;i++){
        console.log("index",i, "value", array[i], "return value of fn",fn(array[i]));
        //i->index , array[i] => value of the ith index, fn(array[i]) -> it will pass array[i] as the cube
        // fn(array[i])-->
        //  1. we are calling fn
        //  2. Argument passed to call fn is array[i]
        //  3. fn represents the function passed as the argument to processArray
    }
}

processArray([2,3,4,1,5], function cube(x){ return x*x*x; });//passing function as an argument 

//Higher order function-> It is a function takes one or more function as argument.here processArray is HOF
//callBack--> callback is a function which is an actual argument to a higher order function and 
//is passed as an argument to a HOF. As in here cube is a callback function