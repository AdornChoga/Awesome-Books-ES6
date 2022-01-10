import {displayLibrary} from "./modules/display-books.js";
import {manipulateBooks} from "./modules/edit-library.js";
import {navigation} from "./modules/navigations.js";
import {booksData} from "./modules/books-data.js";

let addButton = document.querySelector('#add');
let listContainer = document.querySelector('.books');
let list = document.querySelector('#list');
let goAddBook = document.querySelector('#add-book');
let contact = document.querySelector('#contact');


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

