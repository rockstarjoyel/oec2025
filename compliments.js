

async function checkBirthdays(pool) {
    const today = moment(); // Get today's date
    const todayMonth = today.month() + 1; // Month is 0-indexed, so add 1
    const todayDay = today.date(); // Day of the month

    console.log(`Today's Date: ${today.format('YYYY-MM-DD')}`); // Log today's date

    try {
        // Query to get active users whose birthday is today (month and day match)
        const result = await pool.request()
            .input('todayMonth', sql.Int, todayMonth)
            .input('todayDay', sql.Int, todayDay)
            .query(`
                SELECT name, date_of_birth  -- Correct column names for username and birthdate
                FROM Users
                WHERE 
                    status = 'active' AND
                    MONTH(date_of_birth) = @todayMonth AND
                    DAY(date_of_birth) = @todayDay
            `);

        // Log the raw result from the database
        console.log("Database Query Result:", result.recordset); // Log the query result

        return result.recordset; // Return all active users with birthdays today
    } catch (err) {
        console.error('Error checking birthdays:', err);
        return [];
    }
}
async function fetchBirthdayWishes() {
    const messageContainer = document.getElementById('birthdayMessages');
    messageContainer.innerHTML = '<div class="loading">Loading...</div>';  // Show loading state

    try {
        const response = await fetch('http://localhost:5000/birthday-wishes');
        if (!response.ok) {
            throw new Error(`Failed to fetch birthday wishes: ${await response.text()}`);
        }

        const data = await response.json();  // Parse JSON response
        console.log('Fetched Birthday Wishes:', data);  // Log the data for debugging

        messageContainer.innerHTML = '';  // Clear loading message

        if (Array.isArray(data) && data.length > 0) {
            data.forEach(birthday => {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.textContent = birthday.message;  // Display the birthday message
                messageContainer.appendChild(messageDiv);
            });
        } else {
            messageContainer.innerHTML = '<div class="no-birthdays">No birthdays today!</div>';
        }
    } catch (error) {
        console.error('Error fetching birthday wishes:', error);
        messageContainer.innerHTML = `Error: ${error.message}`;
    }
}

window.onload = () => {
    fetchBirthdayWishes();  // Call the function to fetch birthday wishes on page load
};


async function fetchThoughtOfTheDay() {
    console.log("fetchThoughtOfTheDay called");  // Check if the function is being triggered

    try {
        const response = await fetch('http://localhost:5000/thought-of-the-day');
        
        // Check if the response is successful (status code 200)
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Failed to fetch thought of the day: ${errorMessage}`);
        }

        // Parse the response as JSON
        const data = await response.json();
        console.log("Fetched Thought of the Day:", data);  // Debugging log

        const thoughtContainer = document.getElementById('thoughtOfTheDay');

        if (data && data.message) {
            thoughtContainer.textContent = data.message;
        } else {
            thoughtContainer.textContent = "No thought of the day available!";
        }

    } catch (error) {
        console.error('Error fetching thought of the day:', error);
        const thoughtContainer = document.getElementById('thoughtOfTheDay');
        thoughtContainer.textContent = `Error: ${error.message}`;
    }
}
window.onload = () => {
    fetchThoughtOfTheDay();  // Call the function to load the thought of the day
    fetchBirthdayWishes();
};
