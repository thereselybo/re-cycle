"use strict";
const contactForm = document.querySelector("#contact_form");
contactForm.addEventListener("submit", validateForm);
function validateForm(event) {
    event.preventDefault();
    const firstName = document.querySelector("#firstName");
    const firstNameValue = firstName.value;
    const firstNameError = document.querySelector("#firstNameError");
    if (checkLength(firstNameValue)) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
    const lastName = document.querySelector("#lastName");
    const lastNameValue = lastName.value;
    const lastNameError = document.querySelector("#lastNameError");
    if (checkLength(lastNameValue)) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }
    const email = document.querySelector("#email");
    const emailValue = email.value;
    const noEmailError = document.querySelector("#noEmailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    if (checkLength(emailValue)) {
        noEmailError.style.display = "none";
        if (validateEmail(emailValue)) {
            invalidEmailError.style.display = "none";
        }
        else {
            invalidEmailError.style.display = "block";
        }
    }
    else {
        noEmailError.style.display = "block";
    }
    const message = document.querySelector("#message");
    const messageValue = message.value;
    const messageError = document.querySelector("#messageError");
    if (checkLength(messageValue)) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }
    const validated = document.querySelector("#formValidated");
    if ((firstNameError.style.display &&
        lastNameError.style.display &&
        noEmailError.style.display &&
        invalidEmailError.style.display &&
        messageError.style.display) === "none") {
        validated.style.display = "block";
    }
    else {
        validated.style.display = "none";
    }
}
function checkLength(value) {
    const trimmedValue = value.trim();
    if (trimmedValue) {
        return true;
    }
    else {
        return false;
    }
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}
