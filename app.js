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
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    // Dynamically create content
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

UI.prototype.showAlert = function (message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`
    
// Clear feilds prototype
UI.prototype.clearFeilds = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('ISBN').value = '';
}

// Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('ISBN').value;
    
    // Instantiate a new book
    const book = new Book(title, author, isbn);

    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        alert('Failed to create book.');
    } else {

        UI.showAlert('Please fill in all feilds', 'error');

        ui.addBookToList(book);

        ui.clearFeilds();
    }

    e.preventDefault();
});