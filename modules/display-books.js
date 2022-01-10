class displayLibrary {
  static loadBooks() {
    listContainer.innerHTML = '';
    const localBooks = booksData.fetchData();
    for (let i = 0; i < localBooks.length; i += 1) {
      listContainer.innerHTML += `
        <li class="book">
          <p>${localBooks[i].title.toUpperCase()}</p>
          <p>by</p>
          <p>${localBooks[i].author.toUpperCase()}</p>
          <button id="${i}" class="remove" type="button">Remove</button>
        </li>`;
    }
  }
}

export {displayLibrary}