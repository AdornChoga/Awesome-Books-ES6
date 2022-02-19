import { DateTime } from 'luxon/src/luxon.js';

const modalContainer = document.querySelector('.modal-container');

class userData {
  static fetchData() {
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('user'));
  }

  static setData(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
}

const userName = () => {
  modalContainer.innerHTML = `
  <div class="modal">
    <img src="https://img.icons8.com/ios/50/000000/delete-sign--v2.png" alt="close" class="close"/>
    <p class="greeting">
       Hey there new friend!
       <br />
       I'm your personal library.
    </p>
    <input type="text" placeholder="What can I call you?..." value="" class="user-name">
    <img src="https://img.icons8.com/ios-filled/50/000000/up--v2.png" alt="enter" class="enter"/>
  </div>
  `;
  modalContainer.style.display = 'block';
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