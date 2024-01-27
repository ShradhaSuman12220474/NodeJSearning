


function flattenArray(arr) {
    return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
    acc=acc.concat(flattenArray(val));//so the concate function doesnt add to the array as concate function returns a new array

    } else {
    acc.push(val);
    }
    return acc;
    }, []);
}

const arr=[23,4,5,[2,5,7],[5,84,4]];
const result = flattenArray(arr);
console.log(result);