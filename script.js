var uk = document.querySelectorAll("#uk li");
var sign = document.querySelector("#sign");
var lastItem = document.querySelector("#uk li.last");

lastItem.addEventListener("animationend", function () {
  text();
});
console.log(uk.length);

function classAddRemove(el, i) {
  el.classList.remove("active");
  setTimeout(function () {
    el.classList.add("active");
  }, i * 600);
}

function text() {
  uk.forEach((el, index) => {
    el.classList.remove("active");
    setTimeout(() => {
      el.classList.add("active");
    }, index * 600);
  });
}

text();
