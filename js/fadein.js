"use strict";
const spinContainer = document.querySelector("#spin-container");
const allElements = document.querySelectorAll(".invisible");
// const allElements = document.querySelectorAll(".invisible") as NodeList;
window.onload = function () {
    spinContainer.style.display = "none";
    allElements.forEach(function (element) {
        element.classList.add("fade-in");
        element.classList.remove("invisible");
    });
};
