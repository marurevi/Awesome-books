import { DateTime } from './luxon.js';

export default function displayClock() {
  const dt = DateTime.now();
  document.getElementById('dateandtime').innerHTML = dt.toLocaleString(DateTime.DATETIME_FULL);
  setTimeout(displayClock, 1000);
}
