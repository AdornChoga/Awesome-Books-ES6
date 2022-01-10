import {displayLibrary} from "./modules/display-books.js";
import {manipulateBooks} from "./modules/edit-library";
import {navigation} from "./modules/navigations.js";
import {booksData} from "./modules/books-data.js";

let addButton = document.querySelector('#add');
let listContainer = document.querySelector('.books');
let bookAuthor = document.querySelector('#author');
let bookTitle = document.querySelector('#title');
let list = document.querySelector('#list');
let goAddBook = document.querySelector('#add-book');
let contact = document.querySelector('#contact');
let booksContainer = document.querySelector('.books-container');
let inputField = document.querySelector('.input-field');
let contactInfo = document.querySelector('.contact-info');

window.addEventListener('load', () => {
  list.classList.add('list');
  if (localStorage.getItem('books') === null) {
    booksData.updateData([])
  }
  displayLibrary.loadBooks()
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

