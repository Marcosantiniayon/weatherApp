const locationInput = document.querySelector('.locationInput');
const locationOutput = document.querySelector('.locationOutput');
const timeOutput = document.querySelector('.timeOutput');
const currentTemp = document.querySelector('.currentTemp');
const todayLow = document.querySelector('.todayLow');
const todayHigh = document.querySelector('.todayHigh');
let locationSearch = 'Phoenix'
let todayData = document.querySelector('.todayData');

locationInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        getWeather(locationInput.value);
    }
});

async function getWeather(locationSearch) {
  //Set up API url request + searchSubject\
    console.log(locationSearch);
    const realtime = `https://api.tomorrow.io/v4/weather/realtime?location=${locationSearch}&units=imperial&apikey=eXZliAD3an9k8KdO5lUN64n8o5hsVc0f`;
    const forecast = `https://api.tomorrow.io/v4/weather/forecast?location=${locationSearch}&units=imperial&apikey=eXZliAD3an9k8KdO5lUN64n8o5hsVc0f`;
    locationOutput.innerHTML = 'Loading...';
  try {
      //Make fetch request and stores it as response
      const realtimeResponse = await fetch(realtime, { mode: 'cors' });
      const forecastResponse = await fetch(forecast, { mode: 'cors' });

      
      //Store the JSON formated response into 'weatherData' and performs action on it
      const realtimeData = await realtimeResponse.json();
      console.log(realtimeData);
      const forecastData = await forecastResponse.json();
      console.log(forecastData); 
    

      //Display Location 
      locationOutput.innerHTML = parseLocation(realtimeData.location.name);

      //Update Today's Data
      currentTemp.innerHTML = realtimeData.data.values.temperature + "°F";
      todayLow.innerHTML = forecastData.timelines.daily[0].values.temperatureMin + "°F";
      todayHigh.innerHTML = forecastData.timelines.daily[0].values.temperatureMax + "°F";

  } catch (e){
    console.log(e)
  };  
  
    
  
}

getWeather(locationSearch);


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

