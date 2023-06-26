// Code your solution here
let soup = function(phrase, bank) {
    for (let i = 0; i < phrase.length; i++) {
        let check = False;
        for (let j = 0; j < bank.length; j++) {
            if (phrase[i] === bank[j]) {
                check = True;
                break;
            }
        }
        if (!check) {
            return(False);
        }
    }
    return(True);
}