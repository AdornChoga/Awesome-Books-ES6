import { DateTime } from 'luxon/src/luxon.js';

const displayDate = () => {
  const desktopDate = document.querySelector('.desktop-date');
  const mobileDate = document.querySelector('.mobile-date');
  const dt = DateTime.now();
  desktopDate.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  mobileDate.innerHTML = `
  <span>${dt.toLocaleString(DateTime.TIME_WITH_SECONDS)}</span> <br/>
  <span>${dt.toLocaleString()}</span>`;
};

export default displayDate;