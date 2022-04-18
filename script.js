/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const bookShelf = document.getElementById('bookshelf');

const libro1 = { nombre: 'Nombre1', autor: 'Autor1' };
const libro2 = { nombre: 'Nombre2', autor: 'Autor2' };
const books = [libro1, libro2];
const libro = [];
for (let i = 0; i < books.length; i++) {
  const nombre = document.createElement('div');
  nombre.innerHTML = books[i].nombre;
  bookShelf.appendChild(nombre);
  const autor = document.createElement('div');
  autor.innerHTML = books[i].autor;
  bookShelf.appendChild(autor);
  const removeButton = document.createElement('button');
  bookShelf.appendChild(removeButton);
  removeButton.innerHTML = 'Remove';
}
