// Code your solution here
let findObjPropsHasOwn = function(object) {
    let properties = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            properties.push(key);
        }
    }
    return properties.join(", ");
}

let findObjKeys = function(object) {
    let properties = Object.keys(object);
    return properties.join(", ");
}