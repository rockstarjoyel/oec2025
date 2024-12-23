// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form'); // Get form element

    if (!form) {
        console.error('Form element not found!');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission behavior

        // Get username and password from the form fields
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMessage = document.getElementById('errorMessage');

        // Clear previous error messages
        errorMessage.textContent = '';

        // Send login request to the backend
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }
            return response.json();  // Assuming backend sends JSON response
        })
        .then(data => {
            if (data.success) {
                // Store the username and profession in localStorage
                localStorage.setItem('username', data.username);
                localStorage.setItem('profession', data.profession);  // Store profession
        
                // Log a welcome message to the console
                console.log(`Welcome ${data.username} - Profession: ${data.profession}`);
        
                // Display an alert with the profession
                alert(`Login successful! Welcome ${data.username}. Your profession is: ${data.profession}`);
        
                // Redirect to the next page after successful login
                window.location.href = 'index.html';  // Redirect to index.html or another page
            } else {
                // If login failed, display the error message from backend
                errorMessage.textContent = data.message || "Invalid credentials";
            }
        })
        .catch(err => {
            console.error('Error:', err);
            errorMessage.textContent = err.message; // Show error message to user
        });
    });

    // Fetch login history after successful login (if required)
    function fetchLoginHistory() {
        fetch('http://localhost:5000/api/login-history', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch login history');
            }
            return response.json();
        })
        .then(data => {
            console.log('Login History:', data); // Log login history if required
        })
        .catch(err => {
            console.error('Error fetching login history:', err);
        });
    }
});
