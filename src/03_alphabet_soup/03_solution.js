// Code your solution here
let soup = function(phrase, characterBank) {
    if(characterBank.length <phrase.length) {
        return(false);
    }
    for (let i = 0; i < phrase.length; i++) {
        let check = false;
        for (let j = 0; j < characterBank.length; j++) {
            if (phrase[i] === characterBank[j]) {
                check = true;
                break;
            }
        }
        if (!check) {
            return(false);
        }
    }
    return(true);
}
