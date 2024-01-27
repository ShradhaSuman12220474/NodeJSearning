function fun(){

    console.log("called the function fun");
    return function cleanUp(){
        console.log("Cleaning up the resources");
    }
}

const result=fun();//the returned function is stored in the result 
result();
/**
 * what is stores in the result? ==> It stores the function returned by fun, i.e cleanup
 */