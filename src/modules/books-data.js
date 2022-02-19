export default class booksData {
  static fetchData() {
    if (localStorage.getItem('books') === null) {
      localStorage.setItem('books', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('books'));
  }

  static updateData(data) {
    localStorage.setItem('books', JSON.stringify(data));
  }
}