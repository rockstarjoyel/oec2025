const availableCities = {
    // Cities in GMT +13 (4 hours ahead of JST)
    "Pacific/Auckland": "New Zealand (Auckland)",  // GMT +13

    // Cities in GMT +10 (1 hour ahead of JST)
    "Australia/Sydney": "Australia (Sydney)",  // GMT +10

    // Cities in GMT +9 (JST)
    "Asia/Tokyo": "Japan (Tokyo)",  // GMT +9

    // Cities in GMT +8 (1 hour behind JST)
    "Asia/Singapore": "Singapore (Singapore)",  // GMT +8
    "Asia/Hong_Kong": "Hong Kong (Hong Kong)",  // GMT +8
    "Asia/Kuala_Lumpur": "Malaysia (Kuala Lumpur)",  // GMT +8
    "Asia/Shanghai": "China (Shanghai)",  // GMT +8
    "Asia/Manila": "Philippines (Manila)",  // GMT +8
    "Asia/Seoul": "South Korea (Seoul)",  // GMT +8

    // Cities in GMT +7 (2 hours behind JST)
    "Asia/Jakarta": "Indonesia (Jakarta)",  // GMT +7
    "Asia/Bangkok": "Thailand (Bangkok)",  // GMT +7

    // Cities in GMT +5:30 (3.5 hours behind JST)
    "Asia/Kolkata": "India (New Delhi)",  // GMT +5:30
    "Asia/Colombo": "Sri Lanka (Colombo)",  // GMT +5:30

    // Cities in GMT +5 (4 hours behind JST)
    "Asia/Dhaka": "Bangladesh (Dhaka)",  // GMT +5
    "Asia/Karachi": "Pakistan (Karachi)",  // GMT +5

    // Cities in GMT +4 (5 hours behind JST)
    "Asia/Dubai": "UAE (Dubai)",  // GMT +4
    "Asia/Baku": "Azerbaijan (Baku)",  // GMT +4
    "Asia/Yerevan": "Armenia (Yerevan)",  // GMT +4

    // Cities in GMT +3 (6 hours behind JST)
    "Asia/Riyadh": "Saudi Arabia (Riyadh)",  // GMT +3
    "Africa/Nairobi": "Kenya (Nairobi)",  // GMT +3
    "Europe/Moscow": "Russia (Moscow)",  // GMT +3
    "Asia/Kuwait": "Kuwait (Kuwait City)",  // GMT +3
    "Asia/Qatar": "Qatar (Doha)",  // GMT +3
    "Asia/Baghdad": "Iraq (Baghdad)",  // GMT +3
    "Asia/Amman": "Jordan (Amman)",  // GMT +3

    // Cities in GMT +2 (7 hours behind JST)
    "Africa/Cairo": "Egypt (Cairo)",  // GMT +2
    "Europe/Athens": "Greece (Athens)",  // GMT +2

    // Cities in GMT +1 (8 hours behind JST)
    "Africa/Tripoli": "Libya (Tripoli)",  // GMT +1
    "Europe/Berlin": "Germany (Berlin)",  // GMT +1
    "Europe/Paris": "France (Paris)",  // GMT +1
    "Africa/Lagos": "Nigeria (Lagos)",  // GMT +1
    "Europe/Madrid": "Spain (Madrid)",  // GMT +1
    "Europe/Oslo": "Norway (Oslo)",  // GMT +1
    "Europe/Stockholm": "Sweden (Stockholm)",  // GMT +1
    "Africa/Casablanca": "Morocco (Casablanca)",  // GMT +1

    // Cities in GMT +0 (9 hours behind JST)
    "Europe/London": "United Kingdom (London)",  // GMT +0

    // Cities in GMT -4 (13 hours behind JST)
    "America/New_York": "USA (New York)",  // GMT -4 (DST)

    // Cities in GMT -5 (14 hours behind JST)
    "America/Toronto": "Canada (Toronto)",  // GMT -5

    // Cities in GMT -8 (17 hours behind JST)
    "America/Los_Angeles": "USA (Los Angeles)",  // GMT -8
    "America/San_Francisco": "USA (San Francisco)",  // GMT -8
    "America/Las_Vegas": "USA (Las Vegas)",  // GMT -8
};



let clockCount = 0;

// Function to add a new clock
function addClock() {
  if (clockCount < 1) {
      clockCount++;
      const clockContainer = document.createElement("div");
      clockContainer.classList.add("clock-container");
      
      const clockElement = document.createElement("div");
      clockElement.classList.add("clock");

      // Create the dropdown for selecting a city
      const selectElement = document.createElement("select");
      selectElement.innerHTML = Object.keys(availableCities).map(city => 
          `<option value="${city}">${availableCities[city]}</option>`
      ).join("");

      // Create the time display
      const timeDisplay = document.createElement("div");
      timeDisplay.classList.add("time-display");
      clockElement.appendChild(selectElement);
      clockElement.appendChild(timeDisplay);

      clockContainer.appendChild(clockElement);
      document.getElementById("clockArea").appendChild(clockContainer);

      // Event listener for city selection
      selectElement.addEventListener("change", () => {
          updateTime(timeDisplay, selectElement.value);
      });

      // Initialize the time for this clock
      updateTime(timeDisplay, selectElement.value);

      // Update the time every second
      setInterval(() => updateTime(timeDisplay, selectElement.value), 1000);
  }
}

// Function to update the time for a specific clock
function updateTime(timeDisplay, city) {
  let now = new Date();
  let utcTime = new Date(now.toLocaleString("en-US", { timeZone: city }));

  // Get the hours, minutes, and seconds
  let hours = utcTime.getHours();
  let minutes = utcTime.getMinutes();
  let seconds = utcTime.getSeconds();

  // Format time to always show two digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Update the time display
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}







const addClockButton = document.querySelector('.add-clock');

    // Hover effect for the 'Add Clock' button
    addClockButton.onmouseover = function() {
        addClockButton.style.backgroundColor = "rgba(0, 123, 255, 1)";
        addClockButton.style.transform = "scale(1.1)";
    };
    addClockButton.onmouseout = function() {
        addClockButton.style.backgroundColor = "rgba(0, 123, 255, 0.7)";
        addClockButton.style.transform = "scale(1)";
    };
    addClockButton.onmousedown = function() {
        addClockButton.style.transform = "scale(0.95)";
    };
    addClockButton.onmouseup = function() {
        addClockButton.style.transform = "scale(1.1)";
    };









