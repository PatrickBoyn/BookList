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
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('ISBN').value;
    
    console.log(title, author, isbn);

    e.preventDefault();
});