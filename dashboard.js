function sanitizeIp(ip) {
    // Remove any non-printable characters (including newlines, tabs, etc.)
    ip = ip.replace(/[^0-9.]/g, '').trim();  // Remove non-numeric and non-period characters
    return ip;
}

function isValidIp(ip) {
    // Sanitize the IP address first
    ip = sanitizeIp(ip);
    
    // Validate using a regular expression for IPv4 format
    const pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return pattern.test(ip);
}

async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:5000/api/login-history'); // Change URL to match your API
        const users = await response.json();
        console.log(users);

        const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ''; // Clear existing rows

        users.forEach((user, index) => {
            console.log(`Raw IP Address: "${user.IPAddress}"`);  // Log the raw IP Address

            const row = tableBody.insertRow();
            row.insertCell(0).innerText = user.Username; // Adjust property names as per your API response
            row.insertCell(1).innerText = user.MachineInfo; // Adjust property names as per your API response
            
            // Ensure the IP address is valid
            const ipAddress = isValidIp(user.IPAddress) ? user.IPAddress : 'Invalid IP Address';
            row.insertCell(2).innerText = ipAddress; // Display the IP or a fallback message

            setTimeout(() => {
                row.classList.add('fadeIn');
            }, index * 100); 
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

window.onload = fetchUsers;


async function editUser(userId) {
    const newUsername = prompt("Enter new username:");
    const newMachineInfo = prompt("Enter new machine info:");
    const newIpAddress = prompt("Enter new IP address:");

    if (newUsername && newMachineInfo && newIpAddress) {
        try {
            await fetch(`http://localhost:5000/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Username: newUsername,
                    MachineInfo: newMachineInfo,
                    IPAddress: newIpAddress
                }),
            });

            fetchUsers();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }
}

async function deleteUser(userId) {
    if (confirm("Are you sure you want to delete this user?")) {
        try {
            await fetch(`http://localhost:5000/users/${userId}`, {
                method: 'DELETE',
            });

            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
}

window.onload = fetchUsers;