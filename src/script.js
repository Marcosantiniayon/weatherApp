import {getGeoCode} from '../src/api'

let iconImg = "";
let locationSearch = 'Phoenix';
let hourlyTemp = 0;
let forecastUTC = 0;
let localTimezone = 0;
let localFormattedDate = '';
let localFormattedTime = '';
let hours = 0;
let night = false;
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




