const apiKey = "b08904ed3132c3c9a46ef2abcacb62d6";

const unitBtn = document.querySelector('.unitBtn');
const locationInput = document.querySelector('.locationInput');
const locationOutput = document.querySelector('.locationOutput');
const timeOutput = document.querySelector('.timeOutput');
const currentTemp = document.querySelector('.currentTemp');
const realtimeLow = document.querySelector('.realtimeLow');
const realtimeHigh = document.querySelector('.realtimeHigh');
const realtimeDescription = document.querySelector('.realtimeDescription');
const icon = document.querySelector('.icon');
const hourlyForecastData = document.querySelector('.hourlyForecastData');
const dailyForecastData = document.querySelector('.dailyForecastData');
const body = document.querySelector('body');

let iconImg = "";
let units = "imperial";
let unitSign = "F°"
let locationSearch = 'Phoenix';
let hourlyTemp = 0;
let forecastUTC = 0;
let localTimezone = 0;
let localDate = new Date();
let localFormattedDate = '';
let localFormattedTime = '';
let currentTime = false;
let formattedDate = '';
let dayName = '';
let dayOfWeek = '';
let currentDay = '';
let formattedTime = '';
let averageTemp = 0;
let temperaturesByDay = {
    'Sun': [],
    'Mon': [],
    'Tues': [],
    'Wed': [],
    'Thur': [],
    'Fri': [],
    'Sat': []
};
let averageTemps = {
    'Sun': [],
    'Mon': [],
    'Tues': [],
    'Wed': [],
    'Thur': [],
    'Fri': [],
    'Sat': []
}


const todayDate = getTodaysDate();

window.onload = function(){
    getGeoCode(locationSearch);
}

locationInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        locationSearch = locationInput.value;
        getGeoCode(locationSearch);
    }
});

unitBtn.addEventListener('click', function () {
    if (units === "imperial") {
        unitBtn.classList.remove('imperial');
        unitBtn.classList.add('metric');
        units = "metric";
        unitSign = "C°"
        getGeoCode(locationSearch);
    } else {
        unitBtn.classList.remove('metric');
        unitBtn.classList.add('imperial');
        units = "imperial";
        unitSign = "F°"
        getGeoCode(locationSearch);
    }
    unitBtn.innerHTML = unitSign;
});

async function getGeoCode(locationSearch) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${locationSearch}&limit=5&appid=${apiKey}`     
    locationOutput.innerHTML = 'Loading...';
  try {
      //Make fetch request and stores it as response
      const response = await fetch(url, { mode: 'cors' });
      
      //Store the JSON 
      const geocode = await response.json();
      city = geocode[0].name;
      state = geocode[0].state;
      country = geocode[0].country;
      latitude = geocode[0].lat;
      longitude = geocode[0].lon;

      //Display Location
      if (country === 'US') {
            locationOutput.innerHTML = city + ", " + state;
      } else {
            locationOutput.innerHTML = city + ", " + state + ", " + country;
      }

      getWeather(latitude, longitude);
      getForecast(latitude, longitude);

  } catch (e){
      console.log(e)
      locationOutput.innerHTML = 'City Error... Please enter correct city name';
  };  
  
}
async function getWeather(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    try {
        //Make fetch request and stores it as response
        const response = await fetch(url, { mode: 'cors' });
      
        //Store the JSON 
        const weatherData = await response.json();
        console.log(weatherData);

        //Get and Convert Current Time
        currentTime = true;
        const timezone = weatherData.timezone;
        const currentDate = new Date();
        const currentUTC = (currentDate.getTime())/1000; 
        convertTime(currentUTC, timezone);
        updateBackground(localDate);
        

        if (localFormattedTime) {
            console.log(localFormattedTime);
        }

        //Display values
        timeOutput.innerHTML = `${localFormattedDate} | ${localFormattedTime}`;
        currentTemp.innerHTML = Math.round(weatherData.main.temp);
        if (units === 'imperial') {
            realtimeLow.innerHTML = "L: " + Math.round(weatherData.main.temp_min) + "°F";
            realtimeHigh.innerHTML = "H: " + Math.round(weatherData.main.temp_max) + "°F";
        } else {
            realtimeLow.innerHTML = "L: " + Math.round(weatherData.main.temp_min) + "°C";
            realtimeHigh.innerHTML = "H: " + Math.round(weatherData.main.temp_max) + "°C";
        }
        
        realtimeDescription.innerHTML = weatherData.weather[0].description;

        //Update icon
        
        if (realtimeDescription.innerHTML.includes('clouds')){
            icon.src = "icons/overcast.png"
        } else if (realtimeDescription.innerHTML.includes('thunderstorm')){
            icon.src = "icons/thunder.png"
        } else if (realtimeDescription.innerHTML.includes('drizzle')){
            icon.src = "icons/sprinkles.png"
        } else if (realtimeDescription.innerHTML.includes('rain')){
            icon.src = "icons/rainy.png"
        } else if (realtimeDescription.innerHTML.includes('snow')){
            icon.src = "icons/snow.png"
        } else if (realtimeDescription.innerHTML.includes('clear')){
            icon.src = "icons/clear-day.png"
        };
  } catch (e){
    console.log(e)
  };  
}
async function getForecast(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?units=${units}&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    try {
        //Make fetch request and stores it as response
        const response = await fetch(url, { mode: 'cors' });
      
        //Store the JSON 
        const forecastData = await response.json();
        console.log(forecastData);

        //Store city time zone (offset seconds)
        localTimezone = forecastData.city.timezone;

        // Clear Old Data
        clearForecasts();

        // Get Hourly Forecast Data 
        forecastData.list.forEach(index => {
            hourlyTemp = Math.round(index.main.temp) + unitSign;
            forecastUTC = index.dt;

            convertTime(forecastUTC, localTimezone);
            displayHourlyForecast();
            dayTemps(hourlyTemp, dayName);
        });
        
        convertTime(forecastData.list[0].dt, localTimezone);
        displayDailyForecast();
        
  } catch (e){
    console.log(e)
  };  
}
function parseLocation(locationString) {
    const parts = locationString.split(',');
    // Extract parts to keep
    let city = parts[0].trim(); // Removes leading and trailing whitespace
    let state = '';
    let country = '';

    // Check if there are enough parts
    if (parts.length >= 3) {
        // If the last part is "United States", replace it with "USA"
        if (parts[parts.length - 1].trim() === 'United States') {
            country = 'USA';
        } else {
            country = parts[parts.length - 1].trim(); // Otherwise, assume the last part is the country
        }
        // If the second last part is not a state abbreviation, use it as the state
        if (parts[parts.length - 2].trim().length !== 2) {
            state = parts[parts.length - 2].trim();
        }
    } else if (parts.length === 2) {
        // If only two parts, assume the second part is the country
        country = parts[1].trim();
    }

    // Concatenate the parts into the desired format
    let parsedLocation = city;
    if (state !== '') {
        parsedLocation += `, ${state}`;
    }
    if (country !== '') {
        parsedLocation += `, ${country}`;
    }
    return parsedLocation;
}
function convertTime(forecastUTC, localTimezone) {
    // Adjust the timestamp by the timezone offset to get the local time
    const localTimestamp = forecastUTC + localTimezone;
    localDate = new Date(localTimestamp * 1000);
    localTime = localDate.getTime();

    // Array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Extract the month, day, and year from localDate
    const month = monthNames[localDate.getUTCMonth()]; // getUTCMonth() returns a zero-based index
    const day = localDate.getUTCDate();
    const year = localDate.getUTCFullYear();

    // Format the local date and time
    localFormattedDate = `${month} ${day}, ${year}`; // Format the local date as "Month D, YYYY"
    localFormattedTime = formatTime(localDate);

    // Get day of the week
    dayName = getDay(localDate);

}
function dayTemps(hourlyTemp, dayName) {
    // Convert hourlyTemp from string to number and remove the unit
    const tempValue = parseFloat(hourlyTemp);
    // Store the temperature value in the corresponding day array
    if (!isNaN(tempValue)) {
        temperaturesByDay[dayName].push(tempValue);
    }
}
function displayHourlyForecast() {    
    const hourDiv = document.createElement('div');
    hourDiv.className = 'hourDiv';
    hourlyForecastData.appendChild(hourDiv);

    const hourDay = document.createElement('p');
    hourDay.innerHTML = `${dayName} • ${localFormattedTime}`;
    hourDay.className = 'hourDay';
    hourDiv.appendChild(hourDay);

    // const hourTime = document.createElement('p');
    // hourTime.innerHTML = `${localFormattedTime}`;
    // hourTime.className = 'hourTime';
    // hourDiv.appendChild(hourTime);

    const hourTemp = document.createElement('p');
    hourTemp.innerHTML = hourlyTemp;
    hourTemp.className = 'hourTemp';
    hourDiv.appendChild(hourTemp);
}
function displayDailyForecast() {
    calculateAverages();
    
    // Input days in order of week starting with the day after the current day
    const orderedDays = [];
    currentDay = dayOfWeek;
    for (let i = 0; i <= 6; i++) {
        const dayOfWeek = (currentDay + i) % 7;
        const dayName = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'][dayOfWeek];
        if (averageTemps[dayName] !== null) {
            orderedDays.push(dayName);
        }
    }

    // Display day temps in specified order
    orderedDays.forEach(day => {    
        const dayDiv = document.createElement('div');
        dayDiv.className = 'dayDiv';
        dailyForecastData.appendChild(dayDiv);

        const dayDay = document.createElement('p');
        dayDay.innerHTML = `${day}`;
        dayDay.className = 'dayDay';
        dayDiv.appendChild(dayDay);

        const dayTemp = document.createElement('p');
        dayTemp.innerHTML = averageTemps[day] + unitSign;
        dayTemp.className = 'dayTemp';
        dayDiv.appendChild(dayTemp);
    });
}
function clearForecasts() {
    //Hourly ForecastData
    while (hourlyForecastData.firstChild) {
        hourlyForecastData.removeChild(hourlyForecastData.firstChild);
    }
    while (dailyForecastData.firstChild) {
        dailyForecastData.removeChild(dailyForecastData.firstChild);
    }
}

// Helper Functions
function getTodaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero if needed
    const todayDate = `${year}-${month}-${day}`;
    return todayDate;
}
function getDay(localDate) {
    dayOfWeek = localDate.getUTCDay();
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    dayName = daysOfWeek[dayOfWeek];

    return dayName;
}
function formatTime(localDate) {
    let formatted = '';
    // Calculate AM or PM
    let hours = localDate.getUTCHours();
    const minutes = ('0' + localDate.getUTCMinutes()).slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12 for midnight

    // Format the local time with AM or PM
    if (currentTime === true) {
        formatted = hours+ ':'+ minutes+ ampm;
    } else {
        formatted = hours+ ampm;
    }
    
    currentTime = false;
    return formatted;
}
function calculateAverages() {
    // Loop through temperaturesByDay assigning both the day and temperature
    for (const [day, temps] of Object.entries(temperaturesByDay)) {

        //Calculate Average Temp (only for days with temperature data)
        if (temps.length > 0) { 
            let sum = 0;
            for (let i = 0; i < temps.length; i++) {
                sum += temps[i];
            }
            averageTemp = sum / temps.length
            averageTemps[day] = averageTemp.toFixed(0);
        }else {
            averageTemps[day] = null; // Indicate no data for this day
        }
    }

}
function updateBackground(localDate) {
    const hours = localDate.getUTCHours(); // Use getUTCHours() because you've manually adjusted localDate to represent local time

    if(hours >= 17) {
        body.className = 'evening';
    } else if (hours >= 12) {
        body.className = 'afternoon';  // Afternoon
    } else if(hours >=6) {
        body.className = 'morning'; //Morning
    } else if(hours >=4){
        body.className = 'dawn'; //Dawn
    } else {
        body.className = 'night'; //Night
    }
}
function updateIcon(weatherDescription) {
    if (weatherDescription.innerHTML.includes('clouds')){
        iconImg = "icons/overcast.png"
    } else if (weatherDescription.innerHTML.includes('thunderstorm')){
        iconImg = "icons/thunder.png"
    } else if (weatherDescription.innerHTML.includes('drizzle')){
        iconImg = "icons/sprinkles.png"
    } else if (weatherDescription.innerHTML.includes('rain')){
        iconImg = "icons/rainy.png"
    } else if (weatherDescription.innerHTML.includes('snow')){
        iconImg = "icons/snow.png"
    } else if (weatherDescription.innerHTML.includes('clear')){
        iconImg = "icons/clear-day.png"
    };
    
    return iconImg;
}
document.addEventListener('DOMContentLoaded', function() {
    updateBackground(localDate);
});
