document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }

    
    const modal = document.getElementById("myModal");
    const createBtn = document.querySelector(".create-btn");  
    const closeBtn = document.getElementsByClassName("close")[0];

    
    if (createBtn) {
        createBtn.addEventListener('click', function (e) {
            e.preventDefault(); 
            openModal();  
        });
    }

    
    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
    
        };
    }

    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    
    function openModal() {
        if (modal) {
            modal.style.display = "block";  
        }
    }

    
    const navItems = document.querySelectorAll('nav ul li');
    if (navItems.length > 0) {
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();  

                
                this.classList.toggle('active');
            });
        });

        
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav')) {
                
                navItems.forEach(item => item.classList.remove('active'));
            }
        });
    }
});


 setTimeout(function() {
    document.querySelector('.add-clock').click();  
}, 1000);  


// // Function to generate the greeting message
//   function getGreetingMessage() {
//     const hours = new Date().getHours();
//     let greeting;

//     if (hours >= 5 && hours < 12) {
//       greeting = "Good Morning";
//     } else if (hours >= 12 && hours < 16) {
//       greeting = "Good Afternoon";
//     } else if (hours >= 16 && hours < 21) {
//       greeting = "Good Evening";
//     } else {
//       greeting = "Good Night";
//     }

//     return greeting;
//   }

//   // Function to create and display the pop-up message
//   function createPopup() {
//     const message = getGreetingMessage();
//     const popup = document.createElement('div');
//     popup.classList.add('popup-message');
//     popup.innerText = message;

//     // Append the popup to the body
//     document.body.appendChild(popup);

//     // Trigger the show effect by adding the 'show' class after a small delay
//     setTimeout(() => {
//       popup.classList.add('show');
//     }, 100); // Delay to allow the browser to apply the initial state

//     // After 3 seconds, fade out the popup and remove it
//     setTimeout(() => {
//       popup.classList.remove('show');
//       setTimeout(() => popup.remove(), 1000); // Remove after the fade-out transition
//     }, 3000); // Stay visible for 3 seconds before disappearing
//   }

//   // Set an interval to show the pop-up every 60 seconds (60000 ms)
//   setInterval(createPopup, 180000);





  document.addEventListener('DOMContentLoaded', function () {
    const userId = 123;  
    const apiUrl = `http://localhost:5000/api/menu/${userId}`;
    const baseUrl = 'http://localhost:3006/files';  
  
    
    fetch('http://localhost:5000/api/settings')
      .then((response) => response.json())
      .then((data) => {
        const totalmenus = data.totalmenus || 0; 
  
        
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((menuData) => {
            console.log('Menu Data:', menuData);  
            renderNavbar(menuData, totalmenus, baseUrl);  
          })
          .catch((error) => {
            console.error('Error fetching menu data:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching settings:', error);
      });
  
    
function renderNavbar(menuData, totalmenus, baseUrl) {
  const navbar = document.getElementById('navbar');
  if (!navbar) {
    console.error('Navbar container not found!');
    return;
  }

  menuData.sort((a, b) => a.name.localeCompare(b.name));

  const ul = document.createElement('ul');

  menuData.slice(0, totalmenus).forEach((menuItem) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.style.color = "yellow";
    a.style.textDecoration = "none"; 

    
    const menuUrl = baseUrl + (menuItem.url || ''); 

    
    if (!menuItem.subMenu || menuItem.subMenu.length === 0) {
      a.href = menuUrl;
    } else {
      a.href = '#'; 
      
      a.addEventListener('click', function (e) {
        e.preventDefault(); 
        const subMenuUl = li.querySelector('ul');
        const isVisible = subMenuUl.style.display === 'block';
        subMenuUl.style.display = isVisible ? 'none' : 'block'; 
      });
    }

    a.textContent = menuItem.name;
    li.appendChild(a);

    
    if (menuItem.subMenu && menuItem.subMenu.length > 0) {
      const subMenuUl = document.createElement('ul');

      
      menuItem.subMenu.sort((a, b) => a.name.localeCompare(b.name));

      renderSubMenu(menuItem.subMenu, subMenuUl, baseUrl); 
      li.appendChild(subMenuUl);
    }

    ul.appendChild(li);
  });

  navbar.appendChild(ul);
}

  
    
    function renderSubMenu(subMenuData, parentUl, baseUrl) {
      if (!parentUl) {
        console.error("Parent <ul> element not found.");
        return;
      }
  
      parentUl.innerHTML = '';
  
      subMenuData.forEach(subMenuItem => {
        const li = document.createElement('li');
        const a = document.createElement('a');
  
        
        const subMenuUrl = baseUrl + (subMenuItem.url || '');  
  
        if (subMenuItem.subMenu && subMenuItem.subMenu.length > 0) {
          a.href = '#';
          a.addEventListener('click', function (e) {
            e.preventDefault();
            const subMenuUl = li.querySelector('ul');
            const isVisible = subMenuUl.style.display === 'block';
            subMenuUl.style.display = isVisible ? 'none' : 'block';
          });
  
          const subMenuUl = document.createElement('ul');
          subMenuItem.subMenu.forEach(childMenuItem => {
            const childLi = document.createElement('li');
            const childA = document.createElement('a');
            const childMenuUrl = baseUrl + (childMenuItem.url || ''); 
            childA.href = childMenuUrl;
            childA.textContent = childMenuItem.name;
            childLi.appendChild(childA);
            subMenuUl.appendChild(childLi);
          });
  
          li.appendChild(subMenuUl);
        } else {
          a.href = subMenuUrl;  
        }
  
        a.textContent = subMenuItem.name;
        li.appendChild(a);
  
        parentUl.appendChild(li);
      });
    }
  });
  








  document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("tencommendments").onclick = function() {
      var modal = document.getElementById("tenselectosModal");
  
      
      modal.scrollIntoView({ behavior: 'smooth' });
  
    
      modal.style.display = "block";
    }
  
    
    document.getElementsByClassName("tenm-close")[0].onclick = function() {
      var modal = document.getElementById("tenselectosModal");
      modal.style.display = "none";
    }
  
    
    window.onclick = function(event) {
      var modal = document.getElementById("tenselectosModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  });
  


  document.addEventListener('DOMContentLoaded', () => {
  
    fetch('http://localhost:5000/guidelines')
        .then(response => response.json())
        .then(data => {
            
            const list = document.getElementById('guidelines-list');
            
            if (!list) {
                console.error("Element with ID 'guidelines-list' not found in the DOM.");
                return;
            }

            
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.Content;
                list.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching guidelines:', error);
        });
});


fetch('http://localhost:5000/api/about-orient-exchange') 
  .then(response => {
    if (!response.ok) {
      
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    if (data.success) {
      console.log('Content:', data.content); 
    } else {
      console.log('Error:', data.message); 
    }
  })
  .catch(error => {
    console.error('Error fetching the data:', error); 
  });




  document.addEventListener('DOMContentLoaded', function () {
    const aboutOrientBtn = document.getElementById('aboutOrientBtn');
    const aboutOrientModal = document.getElementById('aboutOrientModal');
    const aboutOrientClose = document.getElementById('aboutOrientClose');
    const aboutOrientContent = document.getElementById('aboutOrientContent');
  
    // Open modal when the <a> tag is clicked
    aboutOrientBtn.addEventListener('click', async (event) => {
      event.preventDefault(); // Prevent default link behavior (i.e., page reload)
      aboutOrientModal.style.display = "block"; // Show the modal
  
      try {
        const response = await fetch('http://localhost:5000/api/about-orient-exchange');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        aboutOrientContent.innerHTML = data.success ? data.content : 'No content available.';
      } catch (error) {
        aboutOrientContent.innerHTML = 'Error loading content.';
        console.error(error);
      }
    });
  
    // Close modal when the close button is clicked
    aboutOrientClose.addEventListener('click', () => {
      aboutOrientModal.style.display = "none";
    });
  
    // Close modal if the user clicks outside of the modal
    window.addEventListener('click', (event) => {
      if (event.target === aboutOrientModal) {
        aboutOrientModal.style.display = "none";
      }
    });
  });
  
  

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Get the button element by its ID
  const createMenuButton = document.getElementById("createMenuButton");

  // Attach a click event listener
  createMenuButton.addEventListener("click", () => {
      // Redirect to the specified URL
      window.location.href = "http://127.0.0.1:5501/index.html";
  });
});





document.addEventListener('DOMContentLoaded', function() {
  // Get the logout button
  const logoutButton = document.getElementById('logoutButton');

  // Add an event listener for the click event
  logoutButton.addEventListener('click', function() {
    // Clear all data stored in local storage
    localStorage.clear();

    // Redirect to the login page
    window.location.href = '';  // Change 'login.html' to the correct path to your login page
  });
});






document.addEventListener('DOMContentLoaded', function() {
  // Show dropdown on hover
  document.getElementById('navbarButton').addEventListener('mouseover', function() {
    document.getElementById('dropdownMenu').style.display = 'block';
  });

  // Hide dropdown when mouse leaves the button or dropdown
  document.getElementById('navbarButton').addEventListener('mouseout', function() {
    document.getElementById('dropdownMenu').style.display = 'none';
  });

  document.getElementById('dropdownMenu').addEventListener('mouseover', function() {
    this.style.display = 'block';
  });

  document.getElementById('dropdownMenu').addEventListener('mouseout', function() {
    this.style.display = 'none';
  });
});





