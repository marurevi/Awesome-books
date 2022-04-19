const bookShelf = document.getElementById('bookshelf');

let books = [];

class Book {
  constructor (name, author) {
    this.name = name;
    this.author = author;
  }
}



const addBtn = document.getElementById('add');
const title = document.getElementById('newName');
const author = document.getElementById('newAuthor');

function savedata() {
  localStorage.setItem('booksdata', JSON.stringify(books));
}

function retrievedata() {
  if (localStorage.getItem('booksdata') != null) {
    books = JSON.parse(localStorage.getItem('booksdata'));
  }
  for (let i = 0; i < books.length; i += 1) {
    const bookname = document.createElement('h4');
    bookname.innerHTML = books[i].name;
    bookShelf.appendChild(bookname);
    const bookauthor = document.createElement('h4');
    bookauthor.innerHTML = books[i].author;
    bookShelf.appendChild(bookauthor);
    const removeButton = document.createElement('button');
    bookShelf.appendChild(removeButton);
    removeButton.innerHTML = 'Remove';
    removeButton.className = 'remove';
    removeButton.id = `${i}`;
    // eslint-disable-next-line no-use-before-define
    removeButton.addEventListener('click', removeBook);
    const separator = document.createElement('hr');
    bookShelf.appendChild(separator);
  }
}

function removeBook(event) {
  books.splice(event.target.id, 1);
  savedata();
  bookShelf.innerHTML = '';
  retrievedata();
}

function addNewBook() {
  if (title.value !== '' && author.value !== '') {
    const book = new Book (title.value, author.value );
    books.push(book);
    savedata();
    bookShelf.innerHTML = '';
    retrievedata();
  }
}

addBtn.addEventListener('click', addNewBook);

window.addEventListener('load', retrievedata());