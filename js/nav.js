"use strict";
const nav = document.querySelector(".mainnav");
const hamburger = document.querySelector("#hamburger");
const cross = document.querySelector("#cross");
hamburger.addEventListener("click", function openNav() {
    hamburger.style.display = "none";
    cross.style.display = "block";
    nav.style.width = "45vw";
});
cross.addEventListener("click", function closeNav() {
    cross.style.display = "none";
    hamburger.style.display = "block";
    nav.style.width = "0";
});
const breakpoint = window.matchMedia("(min-width: 1024px)");
function checkWindowSize(breakpoint) {
    if (breakpoint.matches) {
        nav.style.width = "500px";
        hamburger.style.display = "none";
        cross.style.display = "none";
    }
    else {
        nav.style.width = "0";
        hamburger.style.display = "block";
    }
}
checkWindowSize(breakpoint);
breakpoint.addListener(checkWindowSize);
