import booksData from './books-data.js';

const listContainer = document.querySelector('.books');

class displayLibrary {
  static loadBooks() {
    listContainer.innerHTML = '';
    const localBooks = booksData.fetchData();
    for (let i = 0; i < localBooks.length; i += 1) {
      listContainer.innerHTML += `
        <li class="book">
          <p class="book-info">${localBooks[i].title.toUpperCase()}
          <span>by</span>
          ${localBooks[i].author.toUpperCase()}</p>
          <button id="${i}" class="remove" type="button">Remove</button>
        </li>`;
    }
  }
}

function libraryMessage() {
  const emptyMessage = document.querySelector('.empty-message');
  if (booksData.fetchData().length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }
}

export { displayLibrary, libraryMessage };