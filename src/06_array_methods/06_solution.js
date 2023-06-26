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
        string.includes("@") === true;
    })
    return output;
}