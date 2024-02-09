class Complex{

    constructor(real,img){
        this.real=real;
        this.img=img;
    }

    add(anotherComplexNo){
        let r=this.real+anotherComplexNo.real;
        let i=this.img+anotherComplexNo.img;
        return `${r}+${i}i`;
    }
    multiply(anotherComplexNo){
        let r=(this.real*anotherComplexNo.real)-(this.img*anotherComplexNo.img);
        let i=(this.real*anotherComplexNo.img)+(this.img*anotherComplexNo.real);
        return `${r}+${i}i`;
    }

}

const c1=new Complex(5,-3);
const c2=new Complex(-8,5);
const result=c1.add(c2);
console.log(result);
const mult=c1.multiply(c2);
console.log(mult)

