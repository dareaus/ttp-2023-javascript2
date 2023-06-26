// Code your solution here
let thrice = function(f) {
    let object = {
        count: 3,
        output: function (count) {
            if (count > 0) {
                f();
            }
            else {
                return undefined;
            }
            count--;
        }
    }
    return object.output;
}