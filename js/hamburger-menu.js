const HamburgerMenuContainer = document.querySelector("#hamburger-menu-container");
const HamburgerContainer = document.querySelector("#hamburger-container");

HamburgerContainer.addEventListener("click", event => {
    event.currentTarget.classList.toggle("show");
    HamburgerMenuContainer.classList.toggle("show");

});