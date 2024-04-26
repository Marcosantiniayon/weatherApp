import { dayName, localFormattedTime, averageTemps, dayOfWeek, getUnits, setUnits, getHours } from "../src/utilities";
import { hourlyTemp, getGeoCode } from "../src/api";

const unitBtn = document.querySelector('.unitBtn');
const locationInput = document.querySelector('.locationInput');
const hourlyForecastData = document.querySelector('.hourlyForecastData');
const dailyForecastData = document.querySelector('.dailyForecastData');
const body = document.querySelector('body');

let locationSearch = 'Phoenix';
let iconImg = "";
let currentDay = '';
let unitSign = "F°";
let localDate = new Date();

window.onload = function(){
    getGeoCode(locationSearch);
}

document.addEventListener('DOMContentLoaded', function () {
    updateBackground(localDate);
    locationInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            locationSearch = locationInput.value;
            getGeoCode(locationSearch);
        }
    });
    unitBtn.addEventListener('click', function () {
        if (getUnits() === "imperial") { //Change to Metric (C), run getGeoCode
            unitBtn.classList.remove('imperial');
            unitBtn.classList.add('metric');
            setUnits('metric');
            unitSign = "C°"
            getGeoCode(locationSearch);
        } else { //Change to Imperial (F), run getGeoCode
            unitBtn.classList.remove('metric');
            unitBtn.classList.add('imperial');
            setUnits('imperial');
            unitSign = "F°"
            getGeoCode(locationSearch);
        }
        unitBtn.innerHTML = unitSign;
    });
});

export function displayHourlyForecast() {    
    const hourDiv = document.createElement('div');
    hourDiv.className = 'hourDiv';
    hourlyForecastData.appendChild(hourDiv);

    const hourDay = document.createElement('p');
    hourDay.innerHTML = `${dayName} • ${localFormattedTime}`;
    hourDay.className = 'hourDay';
    hourDiv.appendChild(hourDay);

    const hourTemp = document.createElement('p');
    hourTemp.innerHTML = hourlyTemp;
    hourTemp.className = 'hourTemp';
    hourDiv.appendChild(hourTemp);
}
export function displayDailyForecast() {
    console.log(averageTemps);
    
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
export function updateBackground() {
    console.log(getHours());
    const hours = getHours();
    if(hours >=4 && hours<=7){
        body.className = 'dawn'; //Dawn
    } else if(hours >=7 && hours <=12) {
        body.className = 'morning'; //Morning
    } else if (hours >= 12 && hours <=17) {
        body.className = 'afternoon';  // Afternoon
    } else if(hours >= 17 && hours <= 20) {
        body.className = 'evening';
    } else {
        body.className = 'night'; //Night
    }
    console.log(body.className);
}
export function updateIcon(weatherDescription) {
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
export function showLoad() {
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.content').style.display = 'none';
}
export function hideLoad() {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.content').style.display = 'flex';
}
export { hourlyForecastData, dailyForecastData, unitSign };