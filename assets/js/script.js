"use strict";
const overlay = document.querySelector("[data-overlay]"),
  navOpenBtn = document.querySelector("[data-nav-open-btn]"),
  navbar = document.querySelector("[data-navbar]"),
  navCloseBtn = document.querySelector("[data-nav-close-btn]"),
  navElems = [overlay, navOpenBtn, navCloseBtn];
for (let e = 0; e < navElems.length; e++) navElems[e].addEventListener("click", function () {
  navbar.classList.toggle("active"), overlay.classList.toggle("active")
});
const header = document.querySelector("[data-header]"),
  goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  window.scrollY >= 80 ? (header.classList.add("active"), goTopBtn.classList.add("active")) : (header.classList.remove("active"), goTopBtn.classList.remove("active"))
}), window.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementById("product-list"),
    t = function (e) {
      for (let t = e.length - 1; t > 0; t--) {
        const n = Math.floor(Math.random() * (t + 1));
        [e[t], e[n]] = [e[n], e[t]]
      }
      return e
    }(Array.from(e.querySelectorAll(".product-item")));
  e.innerHTML = "", t.forEach(t => {
    e.appendChild(t)
  })
});