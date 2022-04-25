import Bookshelf from './modules/bookShelf.js';
import hidepages from './modules/hidenMenus.js';
import displayClock from './modules/clock.js';

setTimeout(displayClock, 1000);
const mybookshelf = new Bookshelf();
const listBtn = document.getElementById('list');
const addNewBtn = document.getElementById('addNew');
const contactBtn = document.getElementById('contact');
const addBtn = document.getElementById('add');
addBtn.addEventListener('click', mybookshelf.addNewBook.bind(mybookshelf));

listBtn.addEventListener('click', hidepages);
addNewBtn.addEventListener('click', hidepages);
contactBtn.addEventListener('click', hidepages);

window.addEventListener('load', mybookshelf.retrievedata.bind(mybookshelf));