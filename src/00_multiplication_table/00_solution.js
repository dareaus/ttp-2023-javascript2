// Code your solution here
let multiplicationTable = function(r, c) {
    let table = [];
    for (let i = 1; i <= r; i++) {
        row = [];
        for (let j = 1; j <= c; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}



