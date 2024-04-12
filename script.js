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




