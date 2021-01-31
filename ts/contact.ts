const contactForm = document.querySelector("#contact_form") as HTMLFormElement;

contactForm.addEventListener("submit", validateForm);

function validateForm(event: Event) {
  event.preventDefault();

  const firstName = document.querySelector("#firstName") as HTMLInputElement;
  const firstNameValue = firstName.value;
  const firstNameError = document.querySelector(
    "#firstNameError"
  ) as HTMLDivElement;

  if (checkLength(firstNameValue)) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  const lastName = document.querySelector("#lastName") as HTMLInputElement;
  const lastNameValue = lastName.value;
  const lastNameError = document.querySelector(
    "#lastNameError"
  ) as HTMLDivElement;

  if (checkLength(lastNameValue)) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  const email = document.querySelector("#email") as HTMLInputElement;
  const emailValue = email.value;
  const noEmailError = document.querySelector(
    "#noEmailError"
  ) as HTMLDivElement;
  const invalidEmailError = document.querySelector(
    "#invalidEmailError"
  ) as HTMLDivElement;

  if (checkLength(emailValue)) {
    noEmailError.style.display = "none";
    if (validateEmail(emailValue)) {
      invalidEmailError.style.display = "none";
    } else {
      invalidEmailError.style.display = "block";
    }
  } else {
    noEmailError.style.display = "block";
  }

  const message = document.querySelector("#message") as HTMLInputElement;
  const messageValue = message.value;
  const messageError = document.querySelector(
    "#messageError"
  ) as HTMLDivElement;

  if (checkLength(messageValue)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  const validated = document.querySelector("#formValidated") as HTMLDivElement;

  if (
    (firstNameError.style.display &&
      lastNameError.style.display &&
      noEmailError.style.display &&
      invalidEmailError.style.display &&
      messageError.style.display) === "none"
  ) {
    validated.style.display = "block";
  } else {
    validated.style.display = "none";
  }
}

function checkLength(value: string) {
  const trimmedValue = value.trim();

  if (trimmedValue) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email: string) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
