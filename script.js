const bookShelf = document.getElementById('bookshelf');

let books = [];

const addBtn = document.getElementById('add');
const title = document.getElementById('newName');
const author = document.getElementById('newAuthor');

function savedata() {
  localStorage.setItem('booksdata', JSON.stringify(books));
}

function removeBook(event) {
  books.splice(event.target.id, 1);
  savedata();
  document.location.reload();
}

function retrievedata() {
  if (localStorage.getItem('booksdata') != null) {
    books = JSON.parse(localStorage.getItem('booksdata'));
  }
  for (let i = 0; i < books.length; i += 1) {
    const bookname = document.createElement('div');
    bookname.innerHTML = books[i].name;
    bookShelf.appendChild(bookname);
    const bookauthor = document.createElement('div');
    bookauthor.innerHTML = books[i].author;
    bookShelf.appendChild(bookauthor);
    const removeButton = document.createElement('button');
    bookShelf.appendChild(removeButton);
    removeButton.innerHTML = 'Remove';
    removeButton.className = 'remove';
    removeButton.id = `${i}`;
    removeButton.addEventListener('click', removeBook);
    const separator = document.createElement('hr');
    bookShelf.appendChild(separator);
  }
}

function addNewBook() {
  // const book = new Book(title.value, author.value);
  const book = { name: title.value, author: author.value };
  books.push(book);
  savedata();
}

addBtn.addEventListener('click', addNewBook);

window.addEventListener('load', retrievedata());