import { DateTime } from 'luxon/src/luxon.js';

const displayDate = () => {
  const date = document.querySelector('#date');
  const dt = DateTime.now();
  date.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default displayDate;