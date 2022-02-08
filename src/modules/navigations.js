const booksContainer = document.querySelector('.books-container');
const goAddBook = document.querySelectorAll('.add-book, .fa-plus-square');
const contact = document.querySelectorAll('.contact');
const list = document.querySelectorAll('.list');
const inputField = document.querySelector('.input-field');
const contactInfo = document.querySelector('.contact-info');

class navigation {
  static showList() {
    booksContainer.style.display = 'flex';
    inputField.style.display = 'none';
    contactInfo.style.display = 'none';
    list.forEach((n) => {
      n.classList.add('list-focus');
    });
    goAddBook.forEach((n) => {
      if (n.classList.contains('add-book')) {
        n.classList.remove('add-book-focus');
      }
    });
    contact.forEach((n) => {
      n.classList.remove('contact-focus');
    });
  }

  static showAddBook() {
    inputField.style.display = 'flex';
    booksContainer.style.display = 'none';
    contactInfo.style.display = 'none';
    goAddBook.forEach((n) => {
      if (n.classList.contains('add-book')) {
        n.classList.add('add-book-focus');
      }
    });
    list.forEach((n) => {
      n.classList.remove('list-focus');
    });
    contact.forEach((n) => {
      n.classList.remove('contact-focus');
    });
  }

  static showContactInfo() {
    contactInfo.style.display = 'flex';
    booksContainer.style.display = 'none';
    inputField.style.display = 'none';
    contact.forEach((n) => {
      n.classList.add('contact-focus');
    });
    goAddBook.forEach((n) => {
      if (n.classList.contains('add-book')) {
        n.classList.remove('add-book-focus');
      }
    });
    list.forEach((n) => {
      n.classList.remove('list-focus');
    });
  }
}

export { navigation, booksContainer };