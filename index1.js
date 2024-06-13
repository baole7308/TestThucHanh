document.addEventListener("DOMContentLoaded", function () {
  const square = document.querySelector(".square");
  square.addEventListener("click", function () {
    this.classList.toggle("animate");
  });
});

function myFunction() {
  var arrowUp = document.querySelector(".arrow");
  arrowUp.classList.toggle("rotate");
}
