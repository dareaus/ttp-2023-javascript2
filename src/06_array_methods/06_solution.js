// Code your solution here
let useMapToUpperCase = function(string) {
    let arr = string.split(" ");
    let output = arr.map(function(char) {
        return char.toUpperCase();
    })
    return output;
}
