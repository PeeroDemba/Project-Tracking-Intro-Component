"use strict";

const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const dropdown = document.getElementById("dropdown");

hamburger.addEventListener("click", function () {
  hamburger.style.display = "none";
  close.style.display = "block";
  dropdown.style.display = "block";
});

close.addEventListener("click", function () {
  hamburger.style.display = "block";
  close.style.display = "none";
  dropdown.style.display = "none";
});

window.onresize = function () {
  hamburger.style.display = "block";
  close.style.display = "none";
  dropdown.style.display = "none";
};
