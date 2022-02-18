import { DateTime } from 'luxon/src/luxon.js';

const modalContainer = document.querySelector('.modal-container');

class userData {
  static fetchData() {
    return JSON.parse(localStorage.getItem('user'));
  }

  static setData(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
}

const userName = () => {
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
  `;
};

const greetUser = () => {
  const greet = document.querySelector('#greet');
  const { hour } = DateTime.now();
  if (hour < 12) {
    greet.innerHTML = `${'Good Morning'} ${userData.fetchData()[0].username}`;
  } else if (hour >= 12 && hour < 18) {
    greet.innerHTML = `${'Good Afternoon'} ${userData.fetchData()[0].username}`;
  } else if (hour >= 18) {
    greet.innerHTML = `${'Good Evening'} ${userData.fetchData()[0].username}`;
  }
};

export {
  modalContainer, userName, greetUser, userData,
};