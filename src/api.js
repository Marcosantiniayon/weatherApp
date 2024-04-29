import { unitSign, updateBackground, showLoad, hideLoad, displayHourlyForecast, displayDailyForecast, updateIcon } from '../src/ui'
import { localFormattedDate, localFormattedTime, dayName, getUnits, getHours, setCurrentTime, getNight, setNight, getForecastUTC, setforecastUTC, convertTime, clearForecasts, dayTemps, calculateAverages } from '../src/utilities'

const locationOutput = document.querySelector('.locationOutput');
const timeOutput = document.querySelector('.timeOutput');
const currentTemp = document.querySelector('.currentTemp');
const realtimeLow = document.querySelector('.realtimeLow');
const realtimeHigh = document.querySelector('.realtimeHigh');
const realtimeDescription = document.querySelector('.realtimeDescription');

let localDate = new Date();
let hourlyTemp = 0;

const apiKey = "b08904ed3132c3c9a46ef2abcacb62d6";

export async function getGeoCode(locationSearch) { //Gets location info, runs getWeather & getForecast, displays content
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${locationSearch}&limit=5&appid=${apiKey}`
    showLoad();

  try {
      //Make fetch request and stores it as response
      const response = await fetch(url, { mode: 'cors' });
      
      //Store the JSON 
      const geocode = await response.json();
      let city = geocode[0].name;
      let state = geocode[0].state;
      let country = geocode[0].country;
      let latitude = geocode[0].lat;
      let longitude = geocode[0].lon;

      //Display Location
      if (country === 'US') {
            locationOutput.innerHTML = city + ", " + state;
      } else {
            locationOutput.innerHTML = city + ", " + state + ", " + country;
      }

      getWeather(latitude, longitude);
      getForecast(latitude, longitude);
      hideLoad();

  } catch (e){
      console.log(e)
      locationOutput.innerHTML = 'City Error... Please enter correct city name';

      hideLoad();
  };  
  
}
async function getWeather(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=${getUnits()}&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    try {
        //Fetch request and store it as response
        const response = await fetch(url, { mode: 'cors' });
      
        //Store the JSON 
        const weatherData = await response.json();
        console.log(weatherData);

        //Get Time
        setCurrentTime(true);
        const timezone = weatherData.timezone;
        const currentDate = new Date();
        const currentUTC = (currentDate.getTime()) / 1000; 
    
        convertTime(currentUTC, timezone);
        updateBackground(localDate);

        // Update if day or night
        if (getHours() >= 18 || getHours() <= 5) {
            setNight(true);
        } else {
            setNight(false);
        }

        //Display temp values
        timeOutput.innerHTML = `${localFormattedDate} | ${localFormattedTime}`;
        currentTemp.innerHTML = Math.round(weatherData.main.temp);
        realtimeDescription.innerHTML = weatherData.weather[0].description;

        if (getUnits() === 'imperial') {
            realtimeLow.innerHTML = "L: " + Math.round(weatherData.main.temp_min) + "°F";
            realtimeHigh.innerHTML = "H: " + Math.round(weatherData.main.temp_max) + "°F";
        } else {
            realtimeLow.innerHTML = "L: " + Math.round(weatherData.main.temp_min) + "°C";
            realtimeHigh.innerHTML = "H: " + Math.round(weatherData.main.temp_max) + "°C";
        }

        //Update icon
        updateIcon(realtimeDescription);
        
  } catch (e){
    console.log(e)
  };  
}
async function getForecast(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?units=${getUnits()}&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    try {
        //Make fetch request and stores it as response
        const response = await fetch(url, { mode: 'cors' });
      
        //Store the JSON 
        const forecastData = await response.json();
        console.log(forecastData);

        //Store city time zone (offset seconds)
        let localTimezone = forecastData.city.timezone;

        // Clear Old Data
        clearForecasts();

        // Get Hourly Forecast Data 
        forecastData.list.forEach(index => {
            hourlyTemp = Math.round(index.main.temp) + unitSign;
            setforecastUTC(index.dt);

            convertTime(getForecastUTC(), localTimezone);
            displayHourlyForecast();
            
            dayTemps(hourlyTemp, dayName);
        });
        
        convertTime(forecastData.list[0].dt, localTimezone);
        calculateAverages();
        displayDailyForecast();
        
  } catch (e){
    console.log(e)
  };  
}

export { hourlyTemp };