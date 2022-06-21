let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");
let searchBtn = document.querySelector("#search-btn");
let cartBtn = document.querySelector("#cart-btn");
let formBox = document.querySelector(".search-form");
let cart = document.querySelector(".shopping-cart");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  formBox.classList.remove("active");
  cart.classList.remove("active");
  menuBtn.classList.toggle("fa-times");
});

window.addEventListener("scroll", () => {
  formBox.classList.remove("active");
  cart.classList.remove("active");
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
});

searchBtn.addEventListener("click", () => {
  cart.classList.remove("active");
  navbar.classList.remove("active");
  menuBtn.classList.remove("fa-times");
  formBox.classList.toggle("active");
});

cartBtn.addEventListener("click", () => {
  formBox.classList.remove("active");
  navbar.classList.remove("active");
  menuBtn.classList.remove("fa-times");
  cart.classList.toggle("active");
});
