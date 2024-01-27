let i = 20;
while(i>=1){
    console.log(i);
    i-=1;

}
console.log("End")

//converted it in for loop
for(let i=20;i>=1;i--){
    process.stdout.write(i + " ");//this will only work in terminal or in Node js env
}