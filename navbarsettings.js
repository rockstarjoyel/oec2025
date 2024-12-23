// // script.js

// console.log("JavaScript file loaded");

// document.getElementById('updateForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form from submitting normally

//   const newValue = document.getElementById('newValue').value; // Get the new value entered by the user

//   console.log("Submitting value:", newValue); // Log the value to verify

//   // Send the update request to the back-end using Fetch
//   fetch('/update-endvalue', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ endvalue: newValue }) // Send the new value in the request body
//   })
//   .then(response => response.json()) // Assuming the server responds with JSON
//   .then(data => {
//     document.getElementById('result').textContent = 'Updated successfully!';
//   })
//   .catch(error => {
//     document.getElementById('result').textContent = 'Error updating value.';
//     console.error('Error:', error);
//   });
// });
