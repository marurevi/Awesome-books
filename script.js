/* eslint-disable max-classes-per-file */
const bookShelf = document.getElementById('bookshelf');
const addBtn = document.getElementById('add');
const title = document.getElementById('newName');
const author = document.getElementById('newAuthor');
const listBtn = document.getElementById('list');
const listDisplay = document.getElementById('listsection');
const addNewBtn = document.getElementById('addNew');
const addNewDisplay = document.getElementById('addnewsection');
const contactBtn = document.getElementById('contact');
const contactDisplay = document.getElementById('contactsection');
const smallmsg = document.querySelector('small');

function displayClock() {
  document.getElementById('dateandtime').innerHTML = Date();
  setTimeout(displayClock, 1000);
}

setTimeout(displayClock, 1000);

function hidemessage() {
  if (!smallmsg.classList.contains('hideslowly')) smallmsg.classList.add('hideslowly');
}
class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}
class Bookshelf {
  constructor() {
    this.books = [];
  }

  #savedata() {
    localStorage.setItem('booksdata', JSON.stringify(this.books));
  }

  retrievedata() {
    if (localStorage.getItem('booksdata') != null) {
      this.books = JSON.parse(localStorage.getItem('booksdata'));
    }
    for (let i = 0; i < this.books.length; i += 1) {
      const container = document.createElement('div');
      bookShelf.appendChild(container);
      if (i % 2 === 0) {
        container.className = 'class0';
      } else {
        container.className = 'class1';
      }
      const bookNameByAuthor = document.createElement('h4');
      bookNameByAuthor.innerHTML = `"${this.books[i].name}" by ${this.books[i].author}`;
      container.appendChild(bookNameByAuthor);

      const removeButton = document.createElement('button');
      container.appendChild(removeButton);
      removeButton.innerHTML = 'Remove';
      removeButton.className = 'remove';
      removeButton.id = `${i}`;
      removeButton.addEventListener('click', this.removeBook.bind(this));
      const separator = document.createElement('hr');
      bookShelf.appendChild(separator);
    }
  }

  removeBook(event) {
    this.books.splice(event.target.id, 1);
    this.#savedata();
    bookShelf.innerHTML = '';
    this.retrievedata();
  }

  addNewBook() {
    if (title.value !== '' && author.value !== '') {
      const book = new Book(title.value, author.value);
      title.value = '';
      author.value = '';
      if (smallmsg.classList.contains('hideslowly')) smallmsg.classList.remove('hideslowly');
      setTimeout(hidemessage, 3000);
      this.books.push(book);
      this.#savedata();
      bookShelf.innerHTML = '';
      this.retrievedata();
    }
  }
}

function hidepages(event) {
  switch (event.target.id) {
    case 'list':
      if (!addNewDisplay.classList.contains('hidden')) addNewDisplay.classList.add('hidden');
      if (!contactDisplay.classList.contains('hidden')) contactDisplay.classList.add('hidden');
      if (listDisplay.classList.contains('hidden')) listDisplay.classList.remove('hidden');
      if (!listBtn.classList.contains('rightmenuSelected')) listBtn.classList.add('rightmenuSelected');
      if (addNewBtn.classList.contains('rightmenuSelected')) addNewBtn.classList.remove('rightmenuSelected');
      if (contactBtn.classList.contains('rightmenuSelected')) contactBtn.classList.remove('rightmenuSelected');
      break;

    case 'addNew':
      if (!listDisplay.classList.contains('hidden')) listDisplay.classList.add('hidden');
      if (!contactDisplay.classList.contains('hidden')) contactDisplay.classList.add('hidden');
      if (addNewDisplay.classList.contains('hidden')) addNewDisplay.classList.remove('hidden');
      if (!addNewBtn.classList.contains('rightmenuSelected')) addNewBtn.classList.add('rightmenuSelected');
      if (listBtn.classList.contains('rightmenuSelected')) listBtn.classList.remove('rightmenuSelected');
      if (contactBtn.classList.contains('rightmenuSelected')) contactBtn.classList.remove('rightmenuSelected');
      break;

    case 'contact':
      if (!listDisplay.classList.contains('hidden')) listDisplay.classList.add('hidden');
      if (!addNewDisplay.classList.contains('hidden')) addNewDisplay.classList.add('hidden');
      if (contactDisplay.classList.contains('hidden')) contactDisplay.classList.remove('hidden');
      if (!contactBtn.classList.contains('rightmenuSelected')) contactBtn.classList.add('rightmenuSelected');
      if (listBtn.classList.contains('rightmenuSelected')) listBtn.classList.remove('rightmenuSelected');
      if (addNewBtn.classList.contains('rightmenuSelected')) addNewBtn.classList.remove('rightmenuSelected');
      break;
    default:
      break;
  }
}

const mybookshelf = new Bookshelf();

addBtn.addEventListener('click', mybookshelf.addNewBook.bind(mybookshelf));
listBtn.addEventListener('click', hidepages);
addNewBtn.addEventListener('click', hidepages);
contactBtn.addEventListener('click', hidepages);

window.addEventListener('load', mybookshelf.retrievedata.bind(mybookshelf));