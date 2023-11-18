const user={
    username:"su",
    "first name": "suman",//Interview question that we can use space to write the name of keys object
    name: "shhradha suman",
    email: "isuman@gmail.com",
    age: 20,
    isAdmin: false,
    isLoggedIn: true,
    tea:["ginger", "garlic","green"],
    address:{
        city:"jamui",
        state:"Bihar"
    }
}

//Now there are two ways to print the objects
//1) .notation
//2) []

console.log(user.username)
console.log(user.tea[1])
console.log(user.address.city)
console.log(user["first name"])//this can only be printed in this way only
delete user.isAdmin
const userListFromDatabase=[{},{},{}]
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('keyboard'))//to check whether the key is available in the object or not
