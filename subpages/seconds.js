let loading = true;

const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");

function updateTime() {
  const time = new Date();

  const second = time.getSeconds();

  if (!loading) {
    secondElement.style.transition = `${
      second === 0 ? "none" : "all 1s ease-in"
    }`;
  } else {
    secondElement.style.transition = `${
      second === 0 ? "none" : "all 0.3s ease-in"
    }`;
  }

  secondElement.style.transform = `translate(-50%,-100%) rotate(${scale(
    second,
    0,
    59,
    0,
    359
  )}deg)`;

  loading = false;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function updateRealTime() {
  var time = new Date();
  var realTime = time.getSeconds();

  document.getElementById("num").innerHTML = realTime;
}

setInterval(updateTime, 100);
setInterval(updateRealTime, 100);

function toggle() {
  if (document.getElementById("num").style.opacity == 0) {
    console.log("1");
    document.getElementById("num").style.opacity = 1;
    console.log("2");
    document.getElementById("clock").style.opacity = 0.25;
    console.log("3");
  } else {
    document.getElementById("num").style.opacity = 0;
    console.log("4");
    document.getElementById("clock").style.opacity = 1;
    console.log("5");
  }
}

document.getElementById("clock").addEventListener("click", toggle);
