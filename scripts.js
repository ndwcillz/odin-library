let myLibrary = [];

const cardContainer = document.getElementById("card-container");

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
    cardContainer.replaceChildren();
    myLibrary.forEach((book) => {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("card");
        cardContainer.appendChild(bookDiv);

        bookDiv.dataset.id = book.id;

        let bookTitle = document.createElement("h2");
        bookTitle.textContent = book.title;
        bookDiv.appendChild(bookTitle);

        let bookAuthor = document.createElement("h3");
        bookAuthor.textContent = book.author;
        bookDiv.appendChild(bookAuthor);

        let bookPageNumber = document.createElement("p");
        bookPageNumber.textContent = book.pageNumber;
        bookDiv.appendChild(bookPageNumber);

        let bookReadLabel = document.createElement("label");
        bookReadLabel.htmlFor = book.id;
        bookReadLabel.textContent = "Read?: ";

        let bookRead = document.createElement("input");
        bookRead.type = "checkbox";
        bookRead.checked = book.read;
        bookRead.id = book.id;
        bookDiv.appendChild(bookReadLabel);
        bookDiv.appendChild(bookRead);
        

        bookRead.addEventListener("change", (event) => {
            book.toggleRead();
            displayBooks();
        });

        let bookID = document.createElement("p");
        bookID.textContent = book.id;
        bookDiv.appendChild(bookID);

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        bookDiv.appendChild(removeBtn);

        removeBtn.addEventListener('click', () => {
            myLibrary = myLibrary.filter(b => b.id != book.id);
            displayBooks();
        });
    });
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

const newBookBtn = document.getElementById("newBook");
const closeFormBtn = document.getElementById("closeForm");
const formContainer = document.getElementById("formContainer");

newBookBtn.addEventListener('click', () => {
    formContainer.classList.add("show");
});

closeFormBtn.addEventListener('click', () => {
    formContainer.classList.remove("show");
})

const createBookBtn = document.getElementById("bookForm");

createBookBtn.addEventListener("submit", function(event) {
    event.preventDefault();

    let bTitle = document.getElementById("title");
    let bAuthor = document.getElementById("author");
    let bPgN = document.getElementById("pgNum");
    let bRead = document.getElementById("read");

    bTitleVal = bTitle.value;
    bAuthorVal = bAuthor.value;
    bPgNVal = bPgN.value;
    bReadVal = bRead.checked;

    addBookToLibrary(bTitleVal, bAuthorVal, bPgNVal, bReadVal);

    this.reset();
    displayBooks();
});


