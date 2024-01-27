let x = 5213;
let sum=0;
while(x!=0){
    let a=x%10;
    sum+=a;
    x=Math.floor(x/10);
}
console.log(x);
console.log(sum);