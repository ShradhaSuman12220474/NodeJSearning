class Product{
    name;
    price;
    desc;
    image;
    constructor(n,p,d,i){
        this.name=n;
        this.price=p;
        this.desc=d;
        this.image=i;
    }
    
    displayProduct(){
        console.log(this.price)
    }
}

const p1=new Product("Iphone", 10000, "Iphone","desc","Some image");
// console.log(p1);
p1.displayProduct();