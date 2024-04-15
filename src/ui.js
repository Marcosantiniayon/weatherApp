
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

document.addEventListener('DOMContentLoaded', function () {
    updateBackground(localDate);
});
locationInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        locationSearch = locationInput.value;
        getGeoCode(locationSearch);
    }
});
unitBtn.addEventListener('click', function () {
    if (units === "imperial") { //Change to Metric (C), run getGeoCode
        unitBtn.classList.remove('imperial');
        unitBtn.classList.add('metric');
        units = "metric";
        unitSign = "C°"
        getGeoCode(locationSearch);
    } else { //Change to Imperial (F), run getGeoCode
        unitBtn.classList.remove('metric');
        unitBtn.classList.add('imperial');
        units = "imperial";
        unitSign = "F°"
        getGeoCode(locationSearch);
    }
    unitBtn.innerHTML = unitSign;
});
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
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.content').style.display = 'flex';
}
function hideLoad() {
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.content').style.display = 'none';
}