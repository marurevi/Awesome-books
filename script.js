/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const bookShelf = document.getElementById('bookshelf');

const book1 = { name: 'Name1', author: 'Author1' };
const book2 = { name: 'Name2', author: 'Author2' };
const books = [book1, book2];

const addBtn = document.getElementById('add');
const title = document.getElementById('newName');
const author = document.getElementById('newAuthor');

class Book {
    constructor (name_book, author_book) {
        this.name_book = name_book;
        this.author_book = author_book;
    }
}

for (let i = 0; i < books.length; i++) {
  const name = document.createElement('div');
  name.innerHTML = books[i].name;
  bookShelf.appendChild(name);
  const author = document.createElement('div');
  author.innerHTML = books[i].author;
  bookShelf.appendChild(author);
  const removeButton = document.createElement('button');
  bookShelf.appendChild(removeButton);
  removeButton.innerHTML = 'Remove';
  removeButton.className = 'remove';
  removeButton.id = 'remove'+`${i}`;
  const separator = document.createElement('hr');
  bookShelf.appendChild(separator);
}

addBtn.addEventListener('click', addNewBook);

function addNewBook() {
  const book = new Book (title.value, author.value);
  books.push(book);
  const name = document.createElement('div');
  name.innerHTML = title.value;
  bookShelf.appendChild(name);
  const author = document.createElement('div');
  author.innerHTML = author.value;
  bookShelf.appendChild(author);
  const removeButton = document.createElement('button');
  bookShelf.appendChild(removeButton);
  removeButton.innerHTML = 'Remove';
  removeButton.className = 'remove';
  removeButton.id = 'remove'+`${books.length}`;
  const separator = document.createElement('hr');
  bookShelf.appendChild(separator);
}


