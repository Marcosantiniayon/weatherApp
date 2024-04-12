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
let hours = 0;
let night = false;
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
    hours = localDate.getUTCHours();
    const minutes = ('0' + localDate.getUTCMinutes()).slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    let hours12 = hours % 12;
    hours12 = hours12 ? hours12 : 12; // Convert 0 to 12 for midnight

    // Format the local time with AM or PM
    if (currentTime === true) {
        formatted = hours12+ ':'+ minutes+ ampm;
    } else {
        formatted = hours12+ ampm;
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
    //Clear temps used to calculate average after calculating 
    temperaturesByDay = {
        'Sun': [],
        'Mon': [],
        'Tues': [],
        'Wed': [],
        'Thur': [],
        'Fri': [],
        'Sat': []
    };

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


function showLoad() {
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.content').style.display = 'none';
}

function hideLoad() {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.content').style.display = 'flex';
}