import { unitSign, updateBackground, showLoad, hideLoad, displayHourlyForecast, displayDailyForecast } from '../src/ui'
import { localFormattedDate, localFormattedTime, dayName, getHours, setCurrentTime, getNight, setNight, getForecastUTC, setforecastUTC, convertTime, clearForecasts, dayTemps, calculateAverages } from '../src/utilities'

const locationOutput = document.querySelector('.locationOutput');
const timeOutput = document.querySelector('.timeOutput');
const currentTemp = document.querySelector('.currentTemp');
const realtimeLow = document.querySelector('.realtimeLow');
const realtimeHigh = document.querySelector('.realtimeHigh');
const realtimeDescription = document.querySelector('.realtimeDescription');
const icon = document.querySelector('.icon');

let units = "imperial";
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
    const url = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
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
        if (getHours() >= 17 || getHours() <= 5) {
            setNight(true);
        } else {
            setNight(false);
        }

        //Display temp values
        timeOutput.innerHTML = `${localFormattedDate} | ${localFormattedTime}`;
        currentTemp.innerHTML = Math.round(weatherData.main.temp);
        realtimeDescription.innerHTML = weatherData.weather[0].description;

        if (units === 'imperial') {
            realtimeLow.innerHTML = "L: " + Math.round(weatherData.main.temp_min) + "°F";
            realtimeHigh.innerHTML = "H: " + Math.round(weatherData.main.temp_max) + "°F";
        } else {
            realtimeLow.innerHTML = "L: " + Math.round(weatherData.main.temp_min) + "°C";
            realtimeHigh.innerHTML = "H: " + Math.round(weatherData.main.temp_max) + "°C";
        }

        //Update icon
        if (realtimeDescription.innerHTML.includes('clouds') && getNight() == false){
            icon.src = "../icons/overcast.png"
        } else if (realtimeDescription.innerHTML.includes('thunderstorm')){
            icon.src = "../icons/thunder.png"
        } else if (realtimeDescription.innerHTML.includes('drizzle')){
            icon.src = "../icons/sprinkles.png"
        } else if (realtimeDescription.innerHTML.includes('rain')){
            icon.src = "../icons/rainy.png"
        } else if (realtimeDescription.innerHTML.includes('snow')){
            icon.src = "../icons/snow.png"
        } else if (realtimeDescription.innerHTML.includes('clear') && getNight() == false){
            icon.src = "../icons/clear-day.png"
        } else if (realtimeDescription.innerHTML.includes('clear') && getNight() == true){
            icon.src = "../icons/clear-night.png"
        } else if (realtimeDescription.innerHTML.includes('clouds') && getNight() == true){
            icon.src = "../icons/cloudy-night.png"
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