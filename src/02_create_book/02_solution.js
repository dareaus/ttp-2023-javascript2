// Code your solution here
/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price) {
    let book = Object.create(createBook);
    book.id = id;
    book.title = title;
    book.author = author;
    book.price = price;
    book.rating = [];
    return book;
}
createBook.prototype.getInfo = function() {
    return `${this.title} by ${this.author}`;
}
createBook.prototype.getPrice = function() {
    return this.price;
}
createBook.prototype.addRating = function(rating) {
    this.rating.concat(rating);
}
createBook.prototype.getRating = function() {
    let sum = 0;
    for (let i = 0; i < this.rating.length; i++) {
        sum += this.rating[i].length;
    }  
    return (sum/this.rating.length);
}

