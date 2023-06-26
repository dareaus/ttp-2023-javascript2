// Code your solution here
let presses = function(string) {
    let sum = 0;
    let keypad = [["1"], ["a", "b", "c", "2"], ["d", "e", "f", "3"], ["g", "h", "i", "4"], ["j", "k", "l", "5"], ["m", "n", "o", "6"], ["p", "q", "r", "s", "7"], ["t", "u", "v", "8"], ["w", "x", "y", "z", "9"], [" ", "0"]];
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < keypad.length; j++) {
            if (keypad[j].includes(string[i].toLowerCase())) {
                sum += (keypad[j].indexOf(string[i].toLowerCase()) + 1);
            }
        }
    }
    return sum;
}

