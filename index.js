import displayLibrary from './modules/display-books.js';
import manipulateBooks from './modules/edit-library.js';
import { navigation } from './modules/navigations.js';
import booksData from './modules/books-data.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';
import { modalContainer, userName, userData } from './modules/username.js';

const addButton = document.querySelector('#add');
const listContainer = document.querySelector('.books');
const list = document.querySelector('#list');
const goAddBook = document.querySelector('#add-book');
const contact = document.querySelector('#contact');
const date = document.querySelector('#date');
const emptyMessage = document.querySelector('.empty-message');
const goToAddPage = document.querySelector('.add-message');
const bookAuthor = document.querySelector('#author');
const bookTitle = document.querySelector('#title');
const greet = document.querySelector('#greet');

const displayDate = () => {
  const dt = DateTime.now();
  date.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

function greetUser() {
  const { hour } = DateTime.now();
  if (hour < 12) {
    greet.innerHTML = `${'Good Morning'} ${userData.fetchData()[0].username}`;
  } else if (hour >= 12 && hour < 18) {
    greet.innerHTML = `${'Good Afternoon'} ${userData.fetchData()[0].username}`;
  } else if (hour >= 18) {
    greet.innerHTML = `${'Good Evening'} ${userData.fetchData()[0].username}`;
  }
}

function libraryMessage() {
  if (booksData.fetchData().length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }
}

function keyUp(e, btn) {
  if (e.keyCode === 13) {
    e.preventDefault();
    btn.click();
  }
}

setInterval(displayDate, 1000);

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

libraryMessage();

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