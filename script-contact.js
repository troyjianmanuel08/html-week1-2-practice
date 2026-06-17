// Find the form and inputs
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

// Function that checks if a field is empty
function isEmpty(value) {
  return value.trim() === "";
}

// What "trim" does: removes spaces from start and end.
// If someone types "   " (just spaces), trim makes it ""
// So isEmpty("   ") returns true — we treat it as empty.

// Function that validates the form
function validateForm() {
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (isEmpty(nameValue)) {
    alert("Please enter your name");
    return false;
  }

  if (isEmpty(emailValue)) {
    alert("Please enter your email");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

// Listen for form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});
