async function fetchCompanyMission() {
    try {
        const response = await fetch('http://localhost:5000/api/company-mission');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API Response:', data);

        const mission = data[0] ? data[0].mission_statement : 'Mission not found.';
        document.getElementById('mission-content').innerHTML = mission;
    } catch (error) {
        document.getElementById('mission-content').innerText = 'Failed to load mission.';
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchCompanyMission();

// Fetch and display the company vision
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/vision')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const visionStatement = data[0];
            const paragraph = document.querySelector('.spaced-paragraph');
            paragraph.textContent = visionStatement;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});


// Fetch and display the company values
document.addEventListener('DOMContentLoaded', () => {
    async function fetchCompanyValues() {
        try {
            const response = await fetch('http://localhost:5000/api/company-values');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            displayValues(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('values').innerText = 'Error fetching values.';
        }
    }


    function displayValues(values) {
        const valuesContainer = document.getElementById('values');
        valuesContainer.innerHTML = '';

        if (values.length === 0) {
            valuesContainer.innerText = 'No values found.';
            return;
        }

        values.forEach(value => {
            const valueElement = document.createElement('div');
            valueElement.innerHTML = `${value.Description}`;
            valuesContainer.appendChild(valueElement);
        });
    }

    fetchCompanyValues();
});



