// Code your solution here
let multiplicationTable = function(r, c) {
    let table = [];
    for (let p in r) {
        row = [];
        for (let q in c) {
            row.push(p*q);
        }
        table.push(row);
    }
}