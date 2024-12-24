
  const userId = localStorage.getItem('userId');

if (userId) {
    console.log(`User ID: ${userId}`);
} else {
    // console.log('User ID not found. Please log in.');
}

const username = localStorage.getItem("username");
const profession = localStorage.getItem("profession");
console.log("Fetched Profession is:" + profession);


if (username) {
    
    console.log("Welcome, " + username + " " + profession); 
   
} else {
    
    window.location.href = " ";
}

function logout() {
  
  localStorage.removeItem("username");

  
  window.location.href = "login.html";
}

  





    const modal = document.getElementById('myModal');
    const createMenuModal = document.getElementById('createMenuModal');
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.querySelectorAll('.close'); // Close buttons for both modals
    const createMenuButton = document.getElementById('createMenuButton');
    const submitMenuButton = document.getElementById('submitMenu');

    document.addEventListener('DOMContentLoaded', function() {
      var profileButton = document.getElementById('profile-btn');
      
      if (profileButton) {
        profileButton.onclick = function() {
          modal.style.display = 'block';
          console.log('Profile button clicked');
        };
      } else {
        console.error('Element with ID "profile-btn" not found');
      }
    });
    
;
  

  // Close the modals when the 'x' is clicked
  closeModalButton.forEach(function(btn) {
    btn.onclick = function() {
      modal.style.display = 'none';
      createMenuModal.style.display = 'none';
    };
  });

  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
    if (event.target === createMenuModal) {
      createMenuModal.style.display = 'none';
    }
  };

  
  createMenuButton.onclick = function() {
    modal.style.display = 'none'; // Hide the first modal
    createMenuModal.style.display = 'block'; // Show the second modal
  };

  // Handle the "Submit" button for creating the menu
 


// Check if the profession is 'admin' or 'manager'
document.addEventListener('DOMContentLoaded', async () => {
  const createMenuButton = document.getElementById('createMenuButton');

  try {
      // Fetch the list of professions from the server
      const response = await fetch('http://127.0.0.1:4001/api/professions'); // Update backend URL if needed
      if (!response.ok) {
          throw new Error('Failed to fetch professions');
      }
      const professions = await response.json(); // List of professions from DB
      console.log('Fetched professions from DB:', professions);

      // Retrieve the current user's profession from localStorage
      const profession = localStorage.getItem('profession');
      console.log('Current user profession:', profession);

      // Check if the user's profession exists in the fetched list
      if (profession && professions.includes(profession)) {
          createMenuButton.style.display = 'block'; // Show button
      } else {
          createMenuButton.style.display = 'none'; // Hide button
      }
  } catch (error) {
      console.error('Error fetching professions:', error);
      createMenuButton.style.display = 'none'; // Hide button on error
  }
});




document.addEventListener("DOMContentLoaded", function () {
  
  const profileBtn = document.getElementById("profile-btn");
  const modal = document.getElementById("profile-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const usernameElement = document.getElementById("username");
  const profileNameElement = document.getElementById("profile-name");
  const bioElement = document.getElementById("bio");
  const profileImgElement = document.getElementById("profile-img");

  
  const username = localStorage.getItem("username");
  const bio = localStorage.getItem("profession") || ""; 
  const profileImage = localStorage.getItem("profileImage") || "YELLOW-GLOBE.jpg"; 

  
  profileBtn.addEventListener("click", function () {
    if (username) {
      
      usernameElement.textContent = username;
      profileNameElement.textContent = `Welcome, ${username}`;
      bioElement.textContent = `Designation - ${bio}`;
      profileImgElement.src = profileImage; 
      modal.style.display = "block"; 
    } else {
      alert("No user logged in.");
    }
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none"; 
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none"; 
    }
  });
});

