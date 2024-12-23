let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

console.log(`Year: ${currentYear}, Month: ${currentMonth + 1}`); 


let importantDates = [];  

// Update the calendar display
function updateCalendar() {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthYearDisplay = document.getElementById("calendar-month-year");
    monthYearDisplay.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendarDays = document.querySelector('.calendar-days');
    calendarDays.innerHTML = '';  

    
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        calendarDays.appendChild(emptyCell);
    }

    
    for (let day = 1; day <= totalDaysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');
        dayCell.textContent = day;

        
        const dateStr = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const importantDate = importantDates.find(item => item.date === dateStr);

        
        if (importantDate) {
            dayCell.classList.add('highlight');
            dayCell.title = importantDate.description;  

            const marker = document.createElement('span');
            marker.classList.add('date-marker');
            marker.style.color = 'red';
            marker.textContent = '•';
            dayCell.appendChild(marker);
        }

        
        dayCell.addEventListener('mouseenter', function () {
            dayCell.style.backgroundColor = '#f0f0f0';
            dayCell.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });

        dayCell.addEventListener('mouseleave', function () {
            dayCell.style.backgroundColor = '';
            dayCell.style.boxShadow = '';
        });

        
        calendarDays.appendChild(dayCell);
    }

    
    const importantDatesList = document.getElementById('important-dates-list');
    importantDatesList.innerHTML = '';  

    importantDates.forEach(item => {
        if (parseInt(item.date.split('-')[1]) - 1 === currentMonth && parseInt(item.date.split('-')[0]) === currentYear) {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.date}: ${item.description}`;
            listItem.style.cursor = 'pointer';
            listItem.style.color = 'red';  
            importantDatesList.appendChild(listItem);
        }
    });
}async function fetchImportantDates() {
    let usernameFromLocalStorage = localStorage.getItem('username');

    if (!usernameFromLocalStorage) {
        usernameFromLocalStorage = 'janesmith';
        console.log("No username found in localStorage");
    }

    
    const usernames = [usernameFromLocalStorage];

    try {
    
        const professionResponse = await fetch('http://localhost:4001/api/professions');
        const professions = await professionResponse.json();

        if (!professionResponse.ok) {
            console.error('Failed to fetch professions.');
            return;
        }

        console.log('Fetched professions:', professions);

        
        for (const profession of professions) {
            try {
                
                for (let username of usernames) {
                    const userResponse = await fetch(`http://localhost:4001/api/important-dates?username=${username}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    const userResult = await userResponse.json();
                    console.log(`Important dates for user ${username}:`, userResult);

                    if (userResponse.ok) {
                        const newUserDates = userResult.filter(item =>
                            !importantDates.some(existingItem => existingItem.date === item.date)
                        );

                        importantDates = [...importantDates, ...newUserDates];
                        updateCalendar(); 
                    } else {
                        console.error(`Failed to fetch dates for user ${username}.`);
                    }
                }

                
                const professionResponse = await fetch(`http://localhost:4001/api/important-dates?profession=${encodeURIComponent(profession)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const professionResult = await professionResponse.json();
                console.log(`Important dates for profession "${profession}":`, professionResult);

                if (professionResponse.ok) {
                    const newProfessionDates = professionResult.filter(item =>
                        !importantDates.some(existingItem => existingItem.date === item.date)
                    );

                    importantDates = [...importantDates, ...newProfessionDates];
                    updateCalendar(); 
                } else {
                    console.error(`Failed to fetch dates for profession "${profession}".`);
                }
            } catch (err) {
                console.error(`Error fetching dates for profession "${profession}":`, err);
            }
        }
    } catch (err) {
        console.error('Error fetching professions:', err);
    }
}



function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();  
}

async function addEvent() {
    const dateInput = document.getElementById('event-date');
    const descriptionInput = document.getElementById('event-description');

    const date = dateInput.value;
    const description = descriptionInput.value;

    let username = localStorage.getItem('username');
    if (!username) {
        username = 'SRK';  
        console.log("No username found in localStorage. Using 'SRK'.");
    }

    const profession = localStorage.getItem('profession');
    if (!profession) {
        console.error("No profession found in localStorage.");
        alert("Profession is missing. Please set it in your profile.");
        return;
    }

    if (!date || !description) {
        alert("Please fill in both date and description.");
        return;
    }

    const eventData = {
        userId: "125",  
        username: username,
        date: date,
        description: description,
        profession_name: profession  
    };

    try {
        const response = await fetch('http://localhost:4001/api/add-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Event added successfully!");
            fetchImportantDates();  
        } else {
            alert("Error adding event: " + result.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while adding the event.");
    }
}


document.getElementById('add-event-button').addEventListener('click', addEvent);




document.addEventListener('DOMContentLoaded', () => {
    fetchImportantDates();  
});


