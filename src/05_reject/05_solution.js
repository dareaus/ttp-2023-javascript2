// Code your solution here
let reject = function(arr, func) {
    let rejected = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i])) {
            rejected.push(arr[i]);
        }
    }
    return rejected;
}