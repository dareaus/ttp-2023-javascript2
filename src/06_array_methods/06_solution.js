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

let sumWithReduce = function(arr, val) {
    if (val === undefined) {
        val = 0;
    }
    let sum = arr.reduce(function(accumulator, num) {
        accumulator += num;
        return accumulator;
        console.log(accumulator);
    }, val)
    return sum;
}

let filterEvensDoubleAndSum = function(arr) {
    let output = arr.filter(function(num) {
        return num % 2 === 0;
    })
    output = output.map(function(num) {
        return num * 2;
    })
    output = output.reduce(function(accumulator, num) {
        accumulator += num;
        return accumulator;
    })
    return output;
}
