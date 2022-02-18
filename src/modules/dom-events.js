import {
  modalContainer, userData, greetUser, userName,
} from './user.js';
import { displayLibrary, libraryMessage } from './display-books.js';
import manipulateBooks from './edit-library.js';
import { navigation } from './navigations.js';
import booksData from './books-data.js';

const keyUp = (e, btn) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    btn.click();
  }
};

const events = () => {
  const addButton = document.querySelector('#add');
  const listContainer = document.querySelector('.books');
  const list = document.querySelectorAll('.list, .fa-book');
  const goAddBook = document.querySelectorAll('.add-book, .fa-plus-square');
  const contact = document.querySelectorAll('.contact');
  const goToAddPage = document.querySelector('.add-message');
  const bookAuthor = document.querySelector('#author');
  const bookTitle = document.querySelector('#title');
  const menu = document.querySelector('.fa-bars');
  const mobileMenu = document.querySelector('.nav-links.mobile');
  const homeHeader = document.querySelector('.header-home');
  const closeMenu = document.querySelector('.fa-times');
  const booksIcon = document.querySelector('.fa-book');
  const addBookIcon = document.querySelector('.fa-plus-square');

  window.addEventListener('load', () => {
    list.forEach((n) => {
      n.classList.add('list-focus');
    });
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

  menu.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    homeHeader.style.display = 'none';
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    homeHeader.style.display = 'flex';
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

  list.forEach((n) => {
    n.addEventListener('click', () => {
      navigation.showList();
      libraryMessage();
      addBookIcon.style.display = 'block';
      booksIcon.style.display = 'none';
    });
  });

  goAddBook.forEach((n) => {
    n.addEventListener('click', () => {
      navigation.showAddBook();
      libraryMessage();
      addBookIcon.style.display = 'none';
      booksIcon.style.display = 'block';
    });
  });

  contact.forEach((n) => {
    n.addEventListener('click', () => {
      navigation.showContactInfo();
      libraryMessage();
      addBookIcon.style.display = 'none';
      booksIcon.style.display = 'block';
    });
  });

  goToAddPage.addEventListener('click', () => {
    navigation.showAddBook();
    libraryMessage();
  });

  listContainer.addEventListener('click', (event) => {
    manipulateBooks.removeBook(event);
    displayLibrary.loadBooks();
    libraryMessage();
  });
};

export default events;
