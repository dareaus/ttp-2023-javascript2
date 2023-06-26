// Code your solution here
let useMapToUppercase = function(string) {
    let arr = string.split("");
    let output = arr.prototype.map(function(char) {
        return char.toUpperCase();
    })
    return output;
}