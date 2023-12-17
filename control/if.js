let temp=16

if(temp < 20){
    //body- executable code
    console.log("It is really cold ")
}else{
    console.log("It is rally very hot");
}

let score=1001
let life=3
let bullets= 200

console.log("Welcome to my game")
if(score>99){
    console.log("You get a life up");
    score=score-100;
    life++;
    //scope of a variable
    let bullets=20
    console.log(`Bullets are ${bullets}`)
}
else{
    console.log("You are not elligble for the life up plan")
}
console.log(`Your score is ${score} and my life is ${life} and the bullets is ${bullets}`);
