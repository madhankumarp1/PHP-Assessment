// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
  let valid = true;

  function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Email
  let email = document.getElementById('email').value;
  let emailError = document.getElementById('emailError');
  if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Password
  let password = document.getElementById('password').value;
  let passwordError = document.getElementById('passwordError');
  if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long.';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  // Image
  let image = document.getElementById('imageFile').files[0];
  let imageError = document.getElementById('imageError');
  if (!image) {
    imageError.textContent = 'Please select an image.';
    valid = false;
  } else {
    imageError.textContent = '';
  }

  // clear error messages 
  setTimeout(() => {
    emailError.textContent = '';
    passwordError.textContent = '';
    imageError.textContent = '';
  }, 4000);

  if (!valid) {
    event.preventDefault();
    console.log(false);
  }
});









