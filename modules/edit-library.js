import booksData from './books-data.js';

const bookAuthor = document.querySelector('#author');
const bookTitle = document.querySelector('#title');
const addedMsg = document.querySelector('.book-added-msg');

export default class manipulateBooks {
  static removeBook(e) {
    if (e.target.classList.value === 'remove') {
      const id = Number(e.target.id);
      const storedBooks = booksData.fetchData();
      manipulateBooks.deleteBook(id, storedBooks);
    }
  }

  static deleteBook(index, arr) {
    delete arr[index];
    const newBooks = arr.filter((val) => val !== null);
    booksData.updateData(newBooks);
  }

  static addBook() {
    if (localStorage.getItem('books') === null) {
      booksData.updateData([]);
    }
    if (bookAuthor.value !== '' && bookTitle.value !== '') {
      const newBooks = booksData.fetchData();
      const newBook = { author: bookAuthor.value, title: bookTitle.value };
      newBooks.push(newBook);
      booksData.updateData(newBooks);
      bookAuthor.value = '';
      bookTitle.value = '';
      setTimeout(() => { addedMsg.style.display = 'block'; }, 300);
      setTimeout(() => { addedMsg.style.display = 'none'; }, 1500);
    }
  }
}
