document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginLink = document.getElementById("signup-link");
  const signupLink = document.getElementById("login-link");

  // Switch between forms
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

  // Login form validation
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Logged in successfully!");

    this.reset();
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById(
      "signup-confirm-password"
    ).value;

    // Check for password match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    alert("Signup validation successful!");

    this.reset();
  });
});
