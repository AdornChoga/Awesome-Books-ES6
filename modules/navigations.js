const booksContainer = document.querySelector('.books-container');
const goAddBook = document.querySelector('#add-book');
const contact = document.querySelector('#contact');
const list = document.querySelector('#list');
const inputField = document.querySelector('.input-field');
const contactInfo = document.querySelector('.contact-info');

class navigation {
  static showList() {
    booksContainer.style.display = 'flex';
    inputField.style.display = 'none';
    contactInfo.style.display = 'none';
    list.classList.add('list');
    goAddBook.classList.remove('add-book');
    contact.classList.remove('contact');
  }

  static showAddBook() {
    inputField.style.display = 'flex';
    booksContainer.style.display = 'none';
    contactInfo.style.display = 'none';
    goAddBook.classList.add('add-book');
    list.classList.remove('list');
    contact.classList.remove('contact');
  }

  static showContactInfo() {
    contactInfo.style.display = 'flex';
    booksContainer.style.display = 'none';
    inputField.style.display = 'none';
    contact.classList.add('contact');
    goAddBook.classList.remove('add-book');
    list.classList.remove('list');
  }
}

export {navigation, booksContainer}