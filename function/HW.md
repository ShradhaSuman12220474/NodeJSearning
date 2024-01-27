### problem 1: 
If NaN is never equal to itself , let's say we want to write a function that returns a Nan
for something, but now I have to if the function returned NaN or not

***
function fun(){
    //does someting 
     
    return NaN
}

const response = fun();

//How to check if the value returned in the response is NaN
if(reponse)

***


### PROBLEM NO 2
If +0 and -0 and 0 when used with equality operator alaways gives the ans true then how can you identify the sign of zero is + or - ?
So write a function that can compare 0 and -0 and if user  0 and -0 then it returns false
and write a functio getSign()  which takes  a number and tells whether it is pos or neg

