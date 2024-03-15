let locationSearch = 'Phoenix'
const locationInput = document.querySelector('.locationInput');
const submitBtn = document.querySelector('.submit');
const locationOutput = document.querySelector('.locationOutput');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    locationSearch = locationInput.value;
    getWeather(locationSearch);
});

async function getWeather(locationSearch) {
  //Set up API url request + searchSubject\
    console.log(locationSearch);
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${locationSearch}&units=imperial&apikey=eXZliAD3an9k8KdO5lUN64n8o5hsVc0f`;
    locationOutput.innerHTML = 'Loading...';
  try {
      //Make fetch request and stores it as response
      const response = await fetch(url, { mode: 'cors' });
      
      //Store the JSON formated response into 'weatherData' and performs action on it
      const weatherData = await response.json();
      console.log(weatherData.timelines.daily);

      //Daily Data
      const dailyData = weatherData.timelines.daily;
      console.log(dailyData);
      dailyData.forEach(day => {
          console.log(day.time + " | Avg: " + day.values.temperatureAvg + " | Min: " + day.values.temperatureMin + " | Max: " + day.values.temperatureMax);
      });

      //


      //Display Location 
      locationOutput.innerHTML = parseLocation(weatherData.location.name);
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

