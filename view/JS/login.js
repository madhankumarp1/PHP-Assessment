
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formData = new FormData(this);

//     fetch('http://localhost/Madhan/controller_Api/login.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.message === 'Login successful') {
//             alert('Login successful');
//         } else {
//             // Handle login error
//             alert('Login failed');
//             // console.log('Login failed:', data.message);

//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         // Handle network error or other exceptions
//     });
// });


// Function to validate email format
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Reset previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Validate email
    let email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        setTimeout(() => {
            document.getElementById('emailError').textContent = '';
        }, 4000); // Clear error message after 4 seconds
        return;
    }

    // Validate password
    let password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        setTimeout(() => {
            document.getElementById('passwordError').textContent = '';
        }, 4000); // Clear error message after 4 seconds
        return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch('http://localhost/Madhan/controller_Api/login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login successful') {
            alert('Login successful');
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle network error or other exceptions
    });
});
