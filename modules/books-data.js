class booksData {
  static fetchData() {
    return JSON.parse(localStorage.getItem('books'))
  }

  static updateData(data) {
    localStorage.setItem('books', JSON.stringify(data))
  }
}

export {booksData}