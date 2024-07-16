document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
  
    fetch('http://localhost/Madhan/controller_Api/registration.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // const messageDiv = document.getElementById('message');
        // messageDiv.innerHTML = data.message;
  alert(data.message);
        // if (data.user) {
        //     messageDiv.innerHTML += `<br>Email: ${data.user.email}<br>Image: <img src="${data.user.imageFile}" alt="User Image" style="max-width: 100px;">`;
        // }
    })
    .catch(error => {
        console.error('Error:', error);
  alert('An error occurred: ' + error.message);
    });
  });



  