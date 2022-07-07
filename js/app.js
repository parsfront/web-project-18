const hamburger = document.querySelector(".hamburger-menu");
const responsiveMenu = document.querySelector(".navbar-responsive");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const submenu = document.querySelectorAll(".submenu");

submenu.forEach((item) => {
    item.addEventListener("click", function () {
        item.classList.toggle("show-iconview");
        const mega = item.nextElementSibling;
        mega.classList.toggle("show-megamenu");
    });
});

hamburger.addEventListener("click", function () {
    responsiveMenu.classList.add("active");
    overlay.classList.add("show");
});

close.addEventListener("click", function () {
    closeNavbar();
});

overlay.addEventListener("click", function () {
    closeNavbar();
});

function closeNavbar() {
    responsiveMenu.classList.remove("active");
    overlay.classList.remove("show");
}
