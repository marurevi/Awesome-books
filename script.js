/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const bookShelf = document.getElementById('bookshelf');

const book1 = { name: 'Name1', author: 'Author1' };
const book2 = { name: 'Name2', author: 'Author2' };
let books = [];

const addBtn = document.getElementById('add');
const removeBtn = document.querySelectorAll('.remove');
const title = document.getElementById('newName');
const author = document.getElementById('newAuthor');

function savedata() {
  console.log('savedata');
  localStorage.setItem('booksdata', JSON.stringify(books));
}

function retrievedata() {
  if (localStorage.getItem('booksdata') != null) {
    books = JSON.parse(localStorage.getItem('booksdata'));
  }
  for (let i = 0; i < books.length; i++) {
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
    removeButton.addEventListener ('click', addEventListener('click', removeBook(removeButton.id)));
    const separator = document.createElement('hr');
    bookShelf.appendChild(separator);
  }
}

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}

function addNewBook() {
  // const book = new Book(title.value, author.value);
  const book = { name: title.value, author: author.value };
  books.push(book);
  savedata();
}

function removeBook (idBtn) {
    books.splice(idBtn, 1);
    
}

addBtn.addEventListener('click', addNewBook);


window.addEventListener('load', retrievedata());