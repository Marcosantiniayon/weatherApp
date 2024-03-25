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

let units = "imperial";
let unitSign = "F°"
let locationSearch = 'Phoenix';
let forecastTemp = 0;
let forecastUTC = 0;
let localTimezone = 0;
let localFormattedDate = '';
let localFormattedTime = '';
let formattedDate = '';
let dayName = '';
let dayOfWeek = '';
let formattedTime = '';

const todayDate = getTodaysDate();

window.onload = function(){
    getGeoCode(locationSearch);
}

locationInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        getGeoCode(locationInput.value);
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
      getHourForecast(latitude, longitude);

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

        //Display values
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
async function getHourForecast(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?units=${units}&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    try {
        //Make fetch request and stores it as response
        const response = await fetch(url, { mode: 'cors' });
      
        //Store the JSON 
        const hourlyData = await response.json();
        console.log(hourlyData);

        //Store city time zone (offset seconds)
        localTimezone = hourlyData.city.timezone;

        // Clear Old Data
        clearForecasts();

        //Pull and convert forecast times to local city time zone
        for (let i = 0; i < 17; i++) {
            const index = hourlyData.list[i];
            forecastTemp = Math.round(index.main.temp) + unitSign;
            forecastUTC = index.dt;
            convertTime(forecastUTC, localTimezone);
            displayForecast();
        }       
        //Display values

        //Update icons
        
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
    const localDate = new Date(localTimestamp * 1000);

    // Format the local date and time
    localFormattedDate = localDate.toISOString().split('T')[0]; // Gets the date in YYYY-MM-DD format
    localFormattedTime = formatTime(localDate);

    // Get day of the week
    dayName = getDay(localDate);

    // console.log(`UTC Date and Time: ${utcFormattedDate} ${utcFormattedTime}`);
    console.log(`${dayName},  ${localFormattedDate} ${localFormattedTime}`);
}
function displayForecast() {    
    //Hourly ForecastData
    console.log(formattedDate + ", " + formattedTime + " : " + forecastTemp + "°");

    const hourDiv = document.createElement('div');
    hourDiv.className = 'hourDiv';
    hourlyForecastData.appendChild(hourDiv);

    const hourDay = document.createElement('p');
    hourDay.innerHTML = `${dayName}`;
    hourDay.className = 'hourDay';
    hourDiv.appendChild(hourDay);

    const hourTime = document.createElement('p');
    hourTime.innerHTML = `${localFormattedTime}`;
    hourTime.className = 'hourTime';
    hourDiv.appendChild(hourTime);

    const hourIcon = document.createElement('img');
    hourIcon.src = 'icons/cloudy-sun.png';
    hourIcon.className = 'hourIcon';
    hourDiv.appendChild(hourIcon);

    const hourTemp = document.createElement('p');
    hourTemp.innerHTML = forecastTemp;
    hourTemp.className = 'hourTemp';
    hourDiv.appendChild(hourTemp);
    console.log('added');
    // console.log(dayOfWeek + ": " + formattedDate + ", " + formattedTime + " : " + forecastTemp);
}
function clearForecasts() {
    //Hourly ForecastData
    while (hourlyForecastData.firstChild) {
        hourlyForecastData.removeChild(hourlyForecastData.firstChild);
        console.log('cleared');
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
    // Calculate AM or PM
    let hours = localDate.getUTCHours();
    const minutes = ('0' + localDate.getUTCMinutes()).slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12 for midnight

    // Format the local time with AM or PM
    const localFormattedTime = ('0' + hours).slice(-2) + ':' + minutes + ' ' + ampm;

    return localFormattedTime;
}