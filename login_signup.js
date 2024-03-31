document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginLink = document.getElementById("signup-link");
  const signupLink = document.getElementById("login-link");

  // Switching between forms when clicked on the signup and login
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  });

  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  });

  // Form Validation for login form
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Logged in successfully!");

    this.reset();
  });

  // Form validation for signup form
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById(
      "signup-confirm-password"
    ).value;

    // Checking for password match and returning nothing if the password and confirm password doesn't match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    alert("Signup validation successful!");

    this.reset();
  });
});
