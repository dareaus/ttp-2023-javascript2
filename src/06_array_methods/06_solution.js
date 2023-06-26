// Code your solution here
let useMapToUpperCase = function(string) {
    let arr = string.split(" ");
    let output = arr.map(function(char) {
        return char.toUpperCase();
    })
    return output;
}

let useFilter = function(arr) {
    let output = arr.filter(function(string) {
        return string.includes("@");
    })
    return output;
}

let sumWithReduce = function(arr) {
    let sum = arr.reduce(function(accumulator, num) {
        accumulator += num;
        return accumulator;
    }, 0)
    return sum;
}
