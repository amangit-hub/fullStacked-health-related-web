const darkModeToggle = document.getElementById("darkMode");
const webpageBody = document.body;

darkModeToggle.addEventListener("click", () => {
  darkModeToggle.classList.toggle("active");
  webpageBody.classList.toggle("night");
});

document.getElementById("profilePic").addEventListener("change", function () {
  let file = this.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = (event) => {
      let avatarImg = document.getElementById("avatar");
      avatarImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});
function loginShowMenu() {
  let loginForm = document.getElementById("login-form");
  let signUpForm = document.getElementById("open-signUp");

  loginForm.classList.toggle("open");
  signUpForm.classList.remove("signOpen");
}

function signUPshown() {
  let signUpForm = document.getElementById("open-signUp");
  let loginForm = document.getElementById("login-form");

  signUpForm.classList.toggle("signOpen");
  loginForm.classList.remove("open");
}
