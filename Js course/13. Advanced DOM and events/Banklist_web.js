"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

let header = document.querySelector(".header");

let message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `Mangal bhawan , mangal haari eeee , ram siya ram siya ram je je ram <button class = "btn btn--close"> Close </button`;

// header.prepend(message);
header.after(message);
