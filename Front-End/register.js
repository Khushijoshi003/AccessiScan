document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // prevent actual form submission
  
      const fullName = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
  
      // Basic validation
      if (!fullName || !email || !password || !confirmPassword) {
        alert("Please fill in all the fields.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }
  
      // Simulate successful registration (replace this with API call later)
      alert("Registration successful!");
  
      // Clear form
      form.reset();
    });
  });
  