const apiKey = "b08904ed3132c3c9a46ef2abcacb62d6";


const unitBtn = document.querySelector('.unitBtn');
const locationInput = document.querySelector('.locationInput');
const locationOutput = document.querySelector('.locationOutput');
const timeOutput = document.querySelector('.timeOutput');
const currentTemp = document.querySelector('.currentTemp');
const todayLow = document.querySelector('.todayLow');
const todayHigh = document.querySelector('.todayHigh');
const todayDescription = document.querySelector('.todayDescription');
const icon = document.querySelector('.icon');
let units = "imperial";
let locationSearch = 'Phoenix';
let todayData = document.querySelector('.todayData');

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
        unitBtn.innerHTML = "°C"
        units = "metric";
        getGeoCode(locationSearch);
    } else {
        unitBtn.classList.remove('metric');
        unitBtn.classList.add('imperial');
        unitBtn.innerHTML = "°F"
        units = "imperial";
        getGeoCode(locationSearch);
    }
});

async function getGeoCode(locationSearch) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${locationSearch}&limit=5&appid=${apiKey}`     
    locationOutput.innerHTML = 'Loading...';
  try {
      //Make fetch request and stores it as response
      const response = await fetch(url, { mode: 'cors' });
      
      //Store the JSON 
      const geocode = await response.json();
      console.log(geocode[0]);
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

        //Store values
        currentTemp.innerHTML = Math.round(weatherData.main.temp);
        if (units === 'imperial') {
            todayLow.innerHTML = "L: " + Math.round(weatherData.main.temp_min) + "°F";
            todayHigh.innerHTML = "H: " + Math.round(weatherData.main.temp_max) + "°F";
        } else {
            todayLow.innerHTML = "L: " + Math.round(weatherData.main.temp_min) + "°C";
            todayHigh.innerHTML = "H: " + Math.round(weatherData.main.temp_max) + "°C";
        }
        
        todayDescription.innerHTML = weatherData.weather[0].description;

        //Update icon
        if (todayDescription.innerHTML.includes('clouds')){
            icon.src = "icons/overcast.png"
        } else if (todayDescription.innerHTML.includes('thunderstorm')){
            icon.src = "icons/thunder.png"
        } else if (todayDescription.innerHTML.includes('drizzle')){
            icon.src = "icons/sprinkles.png"
        } else if (todayDescription.innerHTML.includes('rain')){
            icon.src = "icons/rainy.png"
        } else if (todayDescription.innerHTML.includes('snow')){
            icon.src = "icons/snow.png"
        } else if (todayDescription.innerHTML.includes('clear')){
            icon.src = "icons/clear-day.png"
        };
  } catch (e){
    console.log(e)
  };  
  
}

getGeoCode(locationSearch);

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

