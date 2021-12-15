function renderTime() {
  // Date() is an object built into javascript to get anything time related
  var current = new Date();

  // get seconds, minutes, and hours using Date()
  var sec = current.getSeconds();
  var min = current.getMinutes();
  var hrs = current.getHours();
  //var hrs = 17;

  //console.log(sec);

  // make 24th hour 0th hour instead
  if (hrs == 24) {
    h = 0;
  }

  // cut off hours at 12, restarting at 0
  if (hrs > 12) {
    hrs = hrs - 12;
  }

  // make clock have "0" in front if only one digit
  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  // display hrs, min, and sec separately
  var hrsDisplay = document.getElementById("hrsDisplay");
  hrsDisplay.textContent = hrs;
  hrsDisplay.innerText = hrs;

  var minDisplay = document.getElementById("minDisplay");
  minDisplay.textContent = min;
  minDisplay.innerText = min;

  var secDisplay = document.getElementById("secDisplay");
  secDisplay.textContent = sec;
  secDisplay.innerText = sec;
}
setInterval("renderTime()", 100);
