// Code your solution here
/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.rating = [];
    this.getInfo = function() {
        return `${this.title} by ${this.author}`;
    }
    this.getPrice = function() {
        return this.price;
    }
    this.addRating = function(rating) {
        this.rating.concat(rating);
    }
    this.getRating = function() {
        let sum = 0;
        for (let i = 0; i < this.rating.length; i++) {
            sum += this.rating[i].length;
            }
        return (sum/this.rating.length);
    }
}



let book = new createBook(1, 2, 3, 4);
console.log(book.getInfo());