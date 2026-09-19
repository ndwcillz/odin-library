const myLibrary = [];

function Book(title, author, pageNumber, read, id) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(title, author, pageNumber, read) {
    let id = crypto.randomUUID();
    myLibrary.push(new Book(title, author, pageNumber, read, id));
}

function displayBooks() {
    myLibrary.forEach((book) => {
        
    })
}