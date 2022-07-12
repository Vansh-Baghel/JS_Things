"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");

let header = document.querySelector(".header");

let message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We use cookies for improved functionality <button class = "btn btn--close-cookie"> Close </button`;

// header.prepend(message);
header.after(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    console.log("idk");
  });

// Smooth scrolling
document
  .querySelector(".btn--scroll-to")
  .addEventListener("click", function () {
    section1.scrollIntoView({ behavior: "smooth" });
  });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log(e.target);
  let id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// Workiing on tabs
tabsContainer.addEventListener("click", function (e) {
  /* closest function is being used */
  /* classList is not wokring here, bcoz froEach function chahiye uske liye! */
  let clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  /* if tabsContainer k bahar click kiya toh to avoid the error we use this */
  // Guard clause
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  // Activating content area

  /* We must write the remove fn before add */
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
