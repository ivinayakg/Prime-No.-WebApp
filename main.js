var input_txt = document.querySelector("#txt-input");
var output_txt = document.querySelector("#txt-output");
var btn = document.querySelector("#btn");

function primeFinder(no) {
  var ans = true;
  for (var i = 2; i < no; i++) {
    if (no % i === 0) {
      ans = false;
      break;
    }
  }
  return ans;
}

btn.addEventListener("click", clickHandler);

function clickHandler() {
  var no_given = parseInt(input_txt.value);

  var ans = primeFinder(no_given);

  if (ans) {
    output_txt.innerText = `Yay! your number ${no_given} is a prime number `;
  } else {
    output_txt.innerText = `Sorry your number ${no_given} is not a prime number `;
  }
}
