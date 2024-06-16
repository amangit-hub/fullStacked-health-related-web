let subMenu = document.getElementById("subMenu");
// function toggleMenu() {
//   subMenu.classList.toggle('open-menu ');
// }

const showSignUpButton = document.getElementById("showSignUp");
const showLoginButton = document.getElementById("showLogin");
const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");
const showLoginFormLink = document.getElementById("showLoginForm");
const showRegistrationFormLink = document.getElementById(
  "showRegistrationForm"
);

showSignUpButton.addEventListener("click", (event) => {
  event.preventDefault();
  registrationForm.style.display = "block";
  loginForm.style.display = "none";
});

showLoginButton.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.style.display = "block";
  registrationForm.style.display = "none";
});

showLoginFormLink.addEventListener("click", (event) => {
  event.preventDefault();
  registrationForm.style.display = "none";
  loginForm.style.display = "block";
});

showRegistrationFormLink.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.style.display = "none";
  registrationForm.style.display = "block";
});

document.getElementById("show-login").addEventListener("click", function () {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("registration-form").style.display = "none";
});

document
  .getElementById("show-registration")
  .addEventListener("click", function () {
    document.getElementById("registration-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
  });
