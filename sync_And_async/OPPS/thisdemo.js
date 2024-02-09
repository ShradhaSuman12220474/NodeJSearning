const obj={
    x: 20,
    y: 30,
    
    display: function(){
        console.log(`The value of x is ${this.x} and the value of y is ${this.y}`)
    },
    


}
//Normaly also we can not acces the object data members without this keyword
obj.display();
