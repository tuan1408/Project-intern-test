const menuBar = document.querySelector("#menu-nav");
const menuUser = document.querySelector("#menu-user");

menuBar.onclick = () => {
  document.querySelector(".header-container .menu").classList.toggle("active");
  menuBar.classList.toggle("fa-times");

  document.querySelector(".header-auth").classList.remove("active");
  menuUser.classList.remove("active");
};

menuUser.onclick = () => {
  menuUser.classList.toggle("active");
  document.querySelector(".header-auth").classList.toggle("active");

  document.querySelector(".header-container .menu").classList.remove("active");
  menuBar.classList.remove("fa-times");
};

window.onscroll = () => {
  document.querySelector(".header-auth").classList.remove("active");
  menuUser.classList.remove("active");

  document.querySelector(".header-container .menu").classList.remove("active");
  menuBar.classList.remove("fa-times");
};
