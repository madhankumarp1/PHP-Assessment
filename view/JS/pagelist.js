fetch("http://localhost/Madhan/controller_Api/getUsers.php")
  .then((response) => response.json())
  .then((data) => {
    let originalUsers = data.users;

    let filterUsersByEmail = (email) => {
      let filteredUsers = originalUsers.filter((user) =>
        user.email.toLowerCase().includes(email.toLowerCase())
      );
      displayUsers(filteredUsers);
    };

    let searchInput = document.getElementById("search-email");
    searchInput.addEventListener("input", (event) => {
        let searchValue = event.target.value.trim();
      if (searchValue) {
        filterUsersByEmail(searchValue);
      } else {
        displayUsers(originalUsers);
      }
    });

    let userList = document.getElementById("user_list");

    let displayUsers = (users) => {
      userList.innerHTML = "";

      users.forEach((user) => {
        let userCard = createUserCard(user);
        userList.appendChild(userCard);
      });

      if (users.length === 0) {
        userList.innerHTML = "<p>No users found.</p>";
      }
    };

    let createUserCard = (user) => {
      let userCard = document.createElement("div");
      userCard.classList.add("user_card");

      let avatar = document.createElement("img");
      avatar.src = user.imageFile;
      userCard.appendChild(avatar);

      let userDetails = document.createElement("div");
      userDetails.classList.add("user_details");
      let userName = document.createElement("h4");
      userName.textContent = user.email;
      let userId = document.createElement("p");
      userId.textContent = `ID: ${user.id}`;
      let userEmail = document.createElement("p");
      userEmail.textContent = `Email: ${user.email}`;
      userDetails.append(userName, userId, userEmail);

      let btn_div = document.createElement("div");
      btn_div.classList.add("btn_div");

      let btn_edit = document.createElement("button");
      btn_edit.textContent = "Edit";
      btn_edit.addEventListener("click", function () {

        let none = document.getElementById("container");
        none.style.display = "none";
        let block = document.getElementById("pop");
        block.style.display = "block";
        console.log("Edit button clicked for user: ", user.id);
        localStorage.setItem("user", user.id);
      });

      let btn_delete = document.createElement("button");
      btn_delete.textContent = "Delete";
      btn_delete.addEventListener("click", function () {
        console.log("Delete button clicked for user: ", user.id);
        if (confirm("Are you sure you want to delete this user?")) {
          deleteUser(user.id);
        }
      });

      btn_div.appendChild(btn_edit);
      btn_div.appendChild(btn_delete);

      userCard.appendChild(userDetails);
      userCard.appendChild(btn_div);

      return userCard;
    };

    let deleteUser = (userId) => {
      fetch(`http://localhost/Madhan/controller_Api/deleteUser.php`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data.message);

          fetchUsers(); 
        })
        .catch((error) => {
          console.error('Error deleting user:', error.message);
        });
    };

    let fetchUsers = () => {
      fetch("http://localhost/Madhan/controller_Api/getUsers.php")
        .then((response) => response.json())
        .then((data) => {
          originalUsers = data.users; 
          displayUsers(originalUsers);
        })
        .catch((error) => {
          console.error('Error fetching users:', error.message);
        });
    };

    displayUsers(originalUsers);
  })
  .catch((error) => {
    console.error('Error fetching initial users:', error.message);
  });






