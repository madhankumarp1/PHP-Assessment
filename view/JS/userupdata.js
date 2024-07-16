// Function to handle form submission
function updateUser(email, imageFile) {
    let userId = localStorage.getItem('userId');

    let formData = new FormData();
    formData.append('userId', userId);
    formData.append('email', email);
    if (imageFile) {
        formData.append('imageFile', imageFile);
    }

    fetch('http://localhost/Madhan/controller_Api/updateUser.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => console.error('Error updating user:', error));
}



