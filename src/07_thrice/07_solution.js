// Code your solution here
let thrice = function(f) {
    let obj = {
        count: 3,
        output: function () {
            if (this.count > 0) {
                f();
            }
            else {
                return undefined;
            }
            this.count--;
        }
    }
    return(obj.output);
}

const helloWorld = thrice(function () {
    return('Hello World');
});

//not sure how to do this one. i think there needs to be 
//a complex type to store the number of times it has been 
//called but returning the function just gives undefined
//i dont think this will work because count gets reset
//everytime thrice is called