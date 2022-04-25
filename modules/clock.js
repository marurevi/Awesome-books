export default function displayClock() {
  document.getElementById('dateandtime').innerHTML = Date();
  setTimeout(displayClock, 1000);
}
