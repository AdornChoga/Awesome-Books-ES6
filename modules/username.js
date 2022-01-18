
const modalContainer = document.querySelector('.modal-container');

function userName() {
  modalContainer.innerHTML = `
  <div class="modal">
    <h1 class="greeting">
       <span>Hey there new friend.</span>
       <span>I'm your personal library.</span>
    </h1>
    <input type="text" placeholder="What should I call you?" value="" class="user">
    <div class="modal-buttons">
      <button type="button" class="close">Close</button>
      <button type="button" class="enter">Enter</button>
    </div>
  </div>
  `
}

class userData {
  static fetchData() {
    return JSON.parse(localStorage.getItem('user'))
  }
  static setData(data) {
    localStorage.setItem('user', JSON.stringify(data))
  }
}

export {modalContainer, userName, userData};