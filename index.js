import displayLibrary from './modules/display-books.js';
import manipulateBooks from './modules/edit-library.js';
import navigation from './modules/navigations.js';
import booksData from './modules/books-data.js';

const addButton = document.querySelector('#add');
const listContainer = document.querySelector('.books');
const list = document.querySelector('#list');
const goAddBook = document.querySelector('#add-book');
const contact = document.querySelector('#contact');

window.addEventListener('load', () => {
  list.classList.add('list');
  if (localStorage.getItem('books') === null) {
    booksData.updateData([]);
  }
  displayLibrary.loadBooks();
});

addButton.addEventListener('click', () => {
  manipulateBooks.addBook();
  displayLibrary.loadBooks();
});
list.addEventListener('click', () => {
  navigation.showList();
});
goAddBook.addEventListener('click', () => {
  navigation.showAddBook();
});
contact.addEventListener('click', () => {
  navigation.showContactInfo();
});

listContainer.addEventListener('click', (event) => {
  manipulateBooks.removeBook(event);
  displayLibrary.loadBooks();
});
