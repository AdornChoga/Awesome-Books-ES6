import displayLibrary from './modules/display-books.js';
import manipulateBooks from './modules/edit-library.js';
import navigation from './modules/navigations.js';
import booksData from './modules/books-data.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const addButton = document.querySelector('#add');
const listContainer = document.querySelector('.books');
const list = document.querySelector('#list');
const goAddBook = document.querySelector('#add-book');
const contact = document.querySelector('#contact');
const date = document.querySelector('#date');
const emptyMessage = document.querySelector('.empty-message');
const goToAddPage = document.querySelector('.add-message');

const displayDate = () => {
  const dt = DateTime.now();
  date.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

function libraryMessage() {
  if(booksData.fetchData().length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }
}

function mouseChange(e) {
  e.style.cursor = 'pointer';
}

libraryMessage()

setInterval(displayDate, 1000);

window.addEventListener('load', () => {
  list.classList.add('list');
  if (localStorage.getItem('books') === null) {
    booksData.updateData([]);
  }
  displayLibrary.loadBooks();
  libraryMessage()
});

addButton.addEventListener('click', () => {
  manipulateBooks.addBook();
  displayLibrary.loadBooks();
  libraryMessage()
});
list.addEventListener('click', () => {
  navigation.showList();
  libraryMessage()

});
goAddBook.addEventListener('click', () => {
  navigation.showAddBook();
  libraryMessage()
});
contact.addEventListener('click', () => {
  navigation.showContactInfo();
  libraryMessage()
});

listContainer.addEventListener('click', (event) => {
  manipulateBooks.removeBook(event);
  displayLibrary.loadBooks();
  libraryMessage()
});

goToAddPage.addEventListener('click', () => {
  navigation.showAddBook();
  libraryMessage()
})

goToAddPage.addEventListener('mouseover', (event) => {
  mouseChange(event.target);
})

list.addEventListener('mouseover', (event) => {
  mouseChange(event.target);
})

contact.addEventListener('mouseover', (event) => {
  mouseChange(event.target);
})
goAddBook.addEventListener('mouseover', (event) => {
  mouseChange(event.target);
})