// ES5 OOP
// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() { }


// Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {


    e.preventDefault();
});