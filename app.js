// ES5 OOP
// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() { }

UI.prototype.addBookToList = function (book) {
    console.log(book);
}

// Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('ISBN').value;
    
    // Instantiate a new book
    const book = new Book(title, author, isbn);

    const ui = new UI();

    ui.addBookToList(book);

    e.preventDefault();
});