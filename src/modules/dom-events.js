import {
  modalContainer, userData, greetUser, userName,
} from './user.js';
import { displayLibrary, libraryMessage } from './display-books.js';
import manipulateBooks from './edit-library.js';
import { navigation } from './navigations.js';
import booksData from './books-data.js';

function keyUp(e, btn) {
  if (e.keyCode === 13) {
    e.preventDefault();
    btn.click();
  }
}

const events = () => {
  const addButton = document.querySelector('#add');
  const listContainer = document.querySelector('.books');
  const list = document.querySelector('#list');
  const goAddBook = document.querySelector('#add-book');
  const contact = document.querySelector('#contact');
  const goToAddPage = document.querySelector('.add-message');
  const bookAuthor = document.querySelector('#author');
  const bookTitle = document.querySelector('#title');

  window.addEventListener('load', () => {
    list.classList.add('list');
    if (localStorage.getItem('books') === null) {
      booksData.updateData([]);
    }
    if (localStorage.getItem('user') === null) {
      userData.setData([]);
      userName();
    }
    if (localStorage.getItem('user') !== null && userData.fetchData().length > 0) {
      greetUser();
    }
    displayLibrary.loadBooks();
    libraryMessage();
  });

  modalContainer.addEventListener('click', (event) => {
    const name = document.querySelector('.user');
    if (event.target.classList.contains('enter')) {
      if (name.value !== '') {
        event.path[3].innerHTML = '';
        const userdata = { username: name.value };
        const localData = userData.fetchData();
        localData.push(userdata);
        userData.setData(localData);
        greetUser();
      }
    }
    if (event.target.classList.contains('close')) {
      modalContainer.innerHTML = '';
    }
  });

  addButton.addEventListener('click', () => {
    manipulateBooks.addBook();
    displayLibrary.loadBooks();
    libraryMessage();
  });

  bookAuthor.addEventListener('keyup', (event) => {
    keyUp(event, addButton);
  });

  bookTitle.addEventListener('keyup', (event) => {
    keyUp(event, addButton);
  });

  modalContainer.addEventListener('keyup', (event) => {
    if (event.target.classList.contains('user')) {
      const enterName = document.querySelector('.enter');
      keyUp(event, enterName);
    }
  });

  list.addEventListener('click', () => {
    navigation.showList();
    libraryMessage();
  });

  goAddBook.addEventListener('click', () => {
    navigation.showAddBook();
    libraryMessage();
  });

  contact.addEventListener('click', () => {
    navigation.showContactInfo();
    libraryMessage();
  });

  listContainer.addEventListener('click', (event) => {
    manipulateBooks.removeBook(event);
    displayLibrary.loadBooks();
    libraryMessage();
  });

  goToAddPage.addEventListener('click', () => {
    navigation.showAddBook();
    libraryMessage();
  });
};

export default events;
