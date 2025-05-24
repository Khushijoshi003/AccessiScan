document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const fullName = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // Basic validation
      if (!fullName.value.trim() || !email.value.trim() || !password.value || !confirmPassword.value) {
        alert("Please fill in all fields.");
        return;
      }

      // Validate email format
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.value.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Check password match
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        return;
      }

      // Optional: Store "Remember Me" preference
      const remember = document.querySelector('input[name="remember"]').checked;
      if (remember) {
        localStorage.setItem("rememberedEmail", email.value);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      // Simulate form submission success
      alert("Login successful! (This is a demo, implement backend logic)");
      form.reset(); // Reset form
    });

    // Auto-fill remembered email (demo)
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      email.value = rememberedEmail;
      document.querySelector('input[name="remember"]').checked = true;
    }
  });
