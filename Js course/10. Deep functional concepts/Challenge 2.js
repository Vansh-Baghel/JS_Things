// Immediately-Invoked Function
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    // header is callback function here.
    header.style.color = "blue";
  });
  // last empty parenthesis is a part of its syntax
})();
