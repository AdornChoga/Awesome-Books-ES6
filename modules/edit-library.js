import {booksData} from "./books-data.js";

let bookAuthor = document.querySelector('#author');
let bookTitle = document.querySelector('#title');

class manipulateBooks {
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
      booksData.updateData([])
    }
    if (bookAuthor.value !== '' && bookTitle.value !== '') {
      const newBooks = booksData.fetchData();
      const newBook = { author: bookAuthor.value, title: bookTitle.value };
      newBooks.push(newBook);
      booksData.updateData(newBooks);
      bookAuthor.value = '';
      bookTitle.value = '';
    }
  }
}

export {manipulateBooks};