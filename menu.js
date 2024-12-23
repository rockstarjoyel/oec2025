 
// let selectedParentMenuId = null;
// let selectedSubmenuId = null;
// let selectedChildMenuId = null;

// document.addEventListener('DOMContentLoaded', () => {
//   const dropdown = document.getElementById('dropdown');
//   const textfield = document.getElementById('textfield');
//   const submenuDropdown = document.getElementById('submenuDropdown');
//   const submenuTextfield = document.getElementById('submenuTextfield');
//   const childDropdown = document.getElementById('childDropdown');
//   const childTextfield = document.getElementById('childTextfield');
  
//   let allMenus = []; // Store fetched menus

//   // Fetch and populate menus
//   function fetchAllMenus() {
//     fetch('http://localhost:3006/getAllMenus')
//       .then(response => response.json())
//       .then(data => {
//         allMenus = data;
//         populateParentDropdown(allMenus);
//       })
//       .catch(error => console.error('Error fetching menus:', error));
//   }

//   // Populate parent dropdown
//   function populateParentDropdown(menus) {
//     dropdown.innerHTML = '<option value="" disabled selected>Select a parent menu</option>';
//     menus.filter(item => item.parent_id === null).forEach(item => {
//       const option = document.createElement('option');
//       option.value = item.id;
//       option.textContent = item.name;
//       dropdown.appendChild(option);
//     });
//   }

//   // Fetch submenus for a parent
//   function fetchSubmenus(parentId) {
//     const submenus = allMenus.filter(item => item.parent_id === parentId);
//     submenuDropdown.innerHTML = '<option value="" disabled selected>Select a submenu</option>';
//     submenuTextfield.value = '';
//     submenus.forEach(submenu => {
//       const option = document.createElement('option');
//       option.value = submenu.id;
//       option.textContent = submenu.name;
//       submenuDropdown.appendChild(option);
//     });
//   }

//   // Fetch child menus for a submenu
//   function fetchChildMenus(submenuId) {
//     const children = allMenus.filter(item => item.parent_id === submenuId);
//     childDropdown.innerHTML = '<option value="" disabled selected>Select a child menu</option>';
//     childTextfield.value = '';
//     children.forEach(child => {
//       const option = document.createElement('option');
//       option.value = child.id;
//       option.textContent = child.name;
//       childDropdown.appendChild(option);
//     });
//   }

//   // Add parent menu
//   document.getElementById('addBtn').addEventListener('click', () => {
//     const newMenuName = document.getElementById('newMenuName').value.trim();
//     if (newMenuName) {
//       const newMenu = {
//         name: newMenuName,
//         url: `/${newMenuName.toLowerCase()}`,
//         parent_id: null,
//         user_id: 1,
//         level: 1,
//       };
//       fetch('http://localhost:3006/addMenu', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newMenu),
//       })
//         .then(response => response.json())
//         .then(data => {
//           alert('Parent menu added successfully!');
//           fetchAllMenus(); // Refresh menus
//         })
//         .catch(error => console.error('Error adding menu:', error));
//     } else {
//       alert('Please enter a valid menu name.');
//     }
//   });

//   // Add submenu
//   document.getElementById('addSubmenuBtn').addEventListener('click', () => {
//     const newSubmenuName = document.getElementById('newSubMenuName').value.trim();
//     if (!newSubmenuName || !selectedParentMenuId) {
//       alert('Please select a parent menu and enter a submenu name.');
//       return;
//     }
//     const newSubmenu = {
//       name: newSubmenuName,
//       parent_id: selectedParentMenuId,
//       user_id: 1,
//     };
//     fetch('http://localhost:3006/addSubMenu', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newSubmenu),
//     })
//       .then(response => response.json())
//       .then(data => {
//         alert('Submenu added successfully!');
//         fetchSubmenus(selectedParentMenuId);
//       })
//       .catch(error => console.error('Error adding submenu:', error));
//   });

//   // Add child menu
//   document.getElementById('addChildMenuBtn').addEventListener('click', () => {
//     const newChildMenuName = document.getElementById('newChildMenuName').value.trim();
//     if (!newChildMenuName || !selectedSubmenuId) {
//       alert('Please select a submenu and enter a child menu name.');
//       return;
//     }
//     const newChildMenu = {
//       name: newChildMenuName,
//       parent_id: selectedSubmenuId,
//       user_id: 1,
//     };
//     fetch('http://localhost:3006/addChildMenu', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newChildMenu),
//     })
//       .then(response => response.json())
//       .then(data => {
//         alert('Child menu added successfully!');
//         fetchChildMenus(selectedSubmenuId);
//       })
//       .catch(error => console.error('Error adding child menu:', error));
//   });

//   // Edit parent menu
//   document.getElementById('editBtn').addEventListener('click', () => {
//     const updatedName = textfield.value.trim();
//     if (!updatedName || !selectedParentMenuId) {
//       alert('Please select a parent menu to edit.');
//       return;
//     }
//     const updatedData = { id: selectedParentMenuId, name: updatedName };
//     fetch('http://localhost:3006/editMenu', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         alert('Parent menu updated successfully!');
//         fetchAllMenus(); // Refresh menus
//       })
//       .catch(error => console.error('Error updating menu:', error));
//   });


//   // Edit submenu
//   document.getElementById('editSubmenuBtn').addEventListener('click', () => {
//     const updatedSubmenuName = submenuTextfield.value.trim();
//     if (!updatedSubmenuName || !selectedSubmenuId) {
//       alert('Please select a submenu to edit and provide a new name.');
//       return;
//     }

//     const updatedSubmenuData = { id: selectedSubmenuId, name: updatedSubmenuName };
//     fetch('http://localhost:3006/editSubMenu', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedSubmenuData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         alert('Submenu updated successfully!');
//         fetchSubmenus(selectedParentMenuId); // Refresh submenu dropdown after edit
//       })
//       .catch(error => console.error('Error updating submenu:', error));
//   });

//   document.getElementById('editChildMenuBtn').addEventListener('click', () => {
//     const updatedChildMenuName = childTextfield.value.trim(); // Use childTextfield here
//     if (!updatedChildMenuName || !selectedChildMenuId) {
//       alert('Please select a child menu to edit and provide a new name.');
//       return;
//     }

//     const updatedChildMenuData = { id: selectedChildMenuId, name: updatedChildMenuName };
//     fetch('http://localhost:3006/editChildMenu', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedChildMenuData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         alert('Child menu updated successfully!');
//         // Optionally, refresh the child menus after update
//         fetchChildMenus(selectedSubmenuId); 
//       })
//       .catch(error => console.error('Error updating child menu:', error));
// });





//   // Event Listeners
//   dropdown.addEventListener('change', function () {
//     selectedParentMenuId = Number(this.value);
//     const selectedParentName = allMenus.find(menu => menu.id === selectedParentMenuId)?.name;
//     textfield.value = selectedParentName || '';
//     fetchSubmenus(selectedParentMenuId);
//      // Log selected parent menu id and name
//      console.log(`Selected Parent Menu: ID = ${selectedParentMenuId}, Name = ${selectedParentName}`);

//   });






//   submenuDropdown.addEventListener('change', function () {
//     selectedSubmenuId = Number(this.value); // Update selected submenu ID
//     const selectedSubmenuName = allMenus.find(menu => menu.id === selectedSubmenuId)?.name;
//     submenuTextfield.value = selectedSubmenuName || ''; // Set the submenu name in the text field
//     fetchChildMenus(selectedSubmenuId); // Fetch child menus based on selected submenu
//      // Log selected submenu id and name
//      console.log(`Selected Submenu: ID = ${selectedSubmenuId}, Name = ${selectedSubmenuName}`);
     

//   });


  
// // Add click event listener to the Delete button
// const deleteSubmenuBtn = document.getElementById('deleteSubmenuBtn');
// deleteSubmenuBtn.addEventListener('click', function () {
//     // Check if a submenu ID has been selected
//     if (!selectedSubmenuId) {
//         alert("Please select a submenu to delete.");
//         return;
//     }

//     // Call the backend to delete the submenu
//     deleteSubmenu(selectedSubmenuId);
// });

// // Function to delete submenu from the database
// function deleteSubmenu(id) {
//     fetch('http://localhost:3006/deleteSubmenu', {
//         method: 'DELETE', // Using DELETE method to send data to the backend
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ id: id }) // Send the ID as part of the request body
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Submenu deleted successfully!');
//             // Optionally, refresh the dropdowns or perform other actions here
//         } else {
//             alert('Error deleting submenu.');
//         }
//     })
//     .catch(error => {
//         console.error('Error deleting submenu:', error);
//         alert('An error occurred while deleting the submenu.');
//     });
// }





// // Assuming the dropdown element is called childDropdown

// const deleteButton = document.getElementById("deleteChildMenuBtn");


// // let selectedChildMenuId = null;  // Initialize the variable to store the selected menu ID

// // Listen for changes in the dropdown

// childDropdown.addEventListener('change', function () {
//   selectedChildMenuId = Number(this.value);  // Update selected child menu ID
//   const selectedChildName = allMenus.find(menu => menu.id === selectedChildMenuId)?.name;
//   childTextfield.value = selectedChildName || ''; // Update the text field with the name

//   // Log the selected child menu ID
//   console.log(`Selected Child Menu: ID = ${selectedChildMenuId}, Name = ${selectedChildName}`);
// });



// // Add click event listener to the delete button
// deleteButton.onclick = function() {
//   if (selectedChildMenuId) {
//     console.log(`Deleting Child Menu: ID = ${selectedChildMenuId}`);

//     // Send the ID to the backend to delete matching records
//     fetch('http://127.0.0.1:3006/delete-child-menu', {  // Corrected URL
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         id: selectedChildMenuId,
//       }),
//     })
//     .then(response => {
//       // Check if the response is valid JSON
//       if (!response.ok) {
//         throw new Error('Failed to delete child menu');
//       }
//       return response.json();
//     })
//     .then(data => {
//       if (data.success) {
//         console.log('Deletion successful:', data.message);
//       } else {
//         console.log('Deletion failed:', data.message);
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   } else {
//     console.log("No child menu selected to delete");
//   }
// };


//   fetchAllMenus(); // Initialize menu fetching
// });





// // Delete parent menu
// document.getElementById('deleteBtn').addEventListener('click', () => {
//   if (!selectedParentMenuId) {
//     alert('Please select a parent menu to delete.');
//     return;
//   }

//   if (confirm(`Are you sure you want to delete the parent menu with ID: ${selectedParentMenuId}?`)) {
//     fetch('http://localhost:3006/deleteMenu', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id: selectedParentMenuId }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           alert('Parent menu deleted successfully!');
//           fetchAllMenus(); // Refresh menus after deletion
//         } else {
//           alert('Error deleting menu.');
//         }
//       })
//       .catch(error => {
//         console.error('Error deleting menu:', error);
//         alert('Error deleting menu.');
//       });
//   }
// });
                 






// const browseBtn = document.getElementById('childMenuBrowseBtn');
// const fileInput = document.getElementById('childMenuFileUpload');
// const filePath = document.getElementById('childMenuFilePath');
// const saveBtn = document.getElementById('uploadFileBtn'); // The Save button

// let selectedFile = null; // Store the selected file

// // Trigger the file input dialog when the "Browse" button is clicked
// browseBtn.addEventListener('click', () => {
//   fileInput.click(); // This simulates a click on the hidden file input
// });

// // When the file is selected, update the file path in the text input
// fileInput.addEventListener('change', () => {
//   if (fileInput.files.length > 0) {
//     selectedFile = fileInput.files[0]; // Store the selected file
//     filePath.value = selectedFile.name; // Show the selected file name in the text input
//   } else {
//     filePath.value = "No file selected..."; // If no file is selected, show this text
//     selectedFile = null; // Reset selected file if none is selected
//   }
// });

// saveBtn.addEventListener('click', async () => {
//   console.log(`selectedSubmenuId before upload: ${selectedSubmenuId}`);
//   console.log(`selectedChildMenuId before upload: ${selectedChildMenuId}`);

//   if (!selectedFile) {
//     alert("Please select a file before uploading.");
//     return;
//   }

//   // Create FormData object
//   const formData = new FormData();
//   formData.append('file', selectedFile); 

//   // Conditionally append either submenuId or childMenuId
//   if (selectedSubmenuId && !selectedChildMenuId) {
//     formData.append('submenuId', selectedSubmenuId); 
//   } else if (selectedChildMenuId) {
//     formData.append('childMenuId', selectedChildMenuId); 
//   } else {
//     alert("Please select both submenu and/or child menu before uploading.");
//     return;
//   }

//   try {
//     const response = await fetch('http://localhost:3006/upload', {
//       method: 'POST',
//       body: formData,
//     });

//     const result = await response.json();
//     if (response.ok) {
//       alert(`File uploaded successfully: ${result.file.filename}`);
//       console.log(`Received submenuId: ${result.submenuId}`);
//       console.log(`Received childMenuId: ${result.childMenuId}`);
//     } else {
//       alert(`Upload failed: ${result.message}`);
//     }
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     alert('An error occurred while uploading the file.');
//   }
// });










// //











