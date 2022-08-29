const passwordError = document.querySelector("#password-error")
const pass = document.querySelector("#password")
const confirmPass = document.querySelector("#confirm-password")

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error")

const phone = document.querySelector('#phone-number');
const phoneError = document.querySelector("#phone-error")

confirmPass.addEventListener("input", function(event) {
  if(pass.value !== confirmPass.value) {
    passwordError.textContent = "*Passwords do not match!";
  }
  else {
    passwordError.textContent = "";
  }

});

email.addEventListener("input", function(event) {
  if(email.validity.typeMismatch) {
    emailError.textContent = '*Please enter a valid email (ex: 123John@example.com)';
  }
  else {
    emailError.textContent = '';
  }
}) 

phone.addEventListener("input", function(event) {
  if(phone.validity.patternMismatch) {
    phoneError.textContent = "Please enter valid 9 digit phone number";
  }
  else {
    phoneError.textContent = "";
  }
})


