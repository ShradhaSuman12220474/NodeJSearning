//task 1
const numbers = [1,2,3]

const doubled = numbers.map(num =>num*2);
console.log(doubled)

//task 2
const items =[
    {name: 'Apple', type: 'fruit'},
    {name: 'Monitor', type: 'electronics'},
    {name: 'Orange', type: 'fruit'}
];
const fruitNames = items.filter(items => items.type ==='fruit').map(item=>item.name);
console.log(fruitNames)