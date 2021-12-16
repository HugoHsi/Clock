function refresh() {
  //get real time
  var time = new Date();
  var min = time.getMinutes();

  //set var fives for minutes divided by 5
  var fives = Math.floor(min / 5);
  //console.log(fives);

  //rem of min divided by 5
  var rem = min % 5;
  console.log(rem);

  //display fives into webpage
  document.getElementById("fives").innerHTML = fives;

  //set var for each Id
  var zero = document.getElementById("zero");
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");

  //add "underline" class if remainder = the number

  if (rem == 0) {
    zero.classList.add("underline");
  } else {
    zero.classList.remove("underline");
  }

  if (rem == 1) {
    one.classList.add("underline");
  } else {
    one.classList.remove("underline");
  }

  if (rem == 2) {
    two.classList.add("underline");
  } else {
    two.classList.remove("underline");
  }

  if (rem == 3) {
    three.classList.add("underline");
  } else {
    three.classList.remove("underline");
  }

  if (rem == 4) {
    four.classList.add("underline");
  } else {
    four.classList.remove("underline");
  }
}
setInterval("refresh()", 1000);
