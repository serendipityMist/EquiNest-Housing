document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginLink = document.getElementById("login-link");
  const signupLink = document.getElementById("signup-link");

  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    signupForm.style.opacity = 0;
    signupForm.style.transform = "translateY(-20px)";
    setTimeout(function () {
      signupForm.classList.remove("active");
      loginForm.classList.add("active");
      loginForm.style.opacity = 1;
      loginForm.style.transform = "translateY(0)";
    }, 500);
  });

  signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.opacity = 0;
    loginForm.style.transform = "translateY(-20px)";
    setTimeout(function () {
      loginForm.classList.remove("active");
      signupForm.classList.add("active");
      signupForm.style.opacity = 1;
      signupForm.style.transform = "translateY(0)";
    }, 500);
  });
});
