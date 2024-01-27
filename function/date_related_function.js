const d= Date();
console.log( typeof d)
//Date function returns a new string which has the data data
//But when we write in this format then  we get a new object 
const dt=new Date();
console.log( typeof dt)

console.log(dt.getDate())
console.log(dt.getMonth())//0 base indexing i.e Jan - 0 ...
console.log(dt.getFullYear())
console.log(dt.getHours())
console.log(dt.getMinutes())
console.log(dt.getSeconds())
console.log(dt.getDay())// 0 base indexing i.e sunday is considerd 0 and so on...
console.log(dt.toDateString())

//interesting function 
console.log(dt.getTime())//it returns the milliseconds that has passed till now from 01/Jan/1970

const custom = new Date("1/4/2024")//format MM/DD/YYYY
console.log(custom.toDateString())


//A Big Integer is also present in JS
const y = 84966354134376635465065355484654641550646864146354514635416065430343514334684613546n;
//Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers
// console.log(y)

const big = BigInt("84966354134376635465065355484654641550646864146354514635416065430343514334684613546")
// console.log(big)
console.log(typeof big)

console.log(0n == 0)
console.log(0n === 0)