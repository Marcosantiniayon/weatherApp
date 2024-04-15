import {getGeoCode} from '../src/api'

const apiKey = "b08904ed3132c3c9a46ef2abcacb62d6";

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


// const todayDate = getTodaysDate();

window.onload = function(){
    getGeoCode(locationSearch);
}




