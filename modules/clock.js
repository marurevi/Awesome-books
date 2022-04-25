import { DateTime } from './luxon.js';

const displayClock = () => {
  const dt = DateTime.now();
  document.getElementById('dateandtime').innerHTML = dt.toLocaleString(DateTime.DATETIME_FULL);
};

export default displayClock;
