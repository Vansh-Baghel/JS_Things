let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btnCloseModel = document.querySelector(".close-modal");
// All is used to select every show-model buttons and not just the first.
let btnOpenModel = document.querySelectorAll(".show-modal");

console.log(btnOpenModel);

let openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

let closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for loop is used as there are 3 buttons so that we dont need to repeat the code for all 3
for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener("click", openModal);
  btnCloseModel.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}
