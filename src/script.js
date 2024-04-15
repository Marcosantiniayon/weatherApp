import {getGeoCode} from '../src/api'

let iconImg = "";
let locationSearch = 'Phoenix';
let hourlyTemp = 0;
let forecastUTC = 0;
let localTimezone = 0;
let night = false;
let formattedDate = '';
let dayName = '';
let dayOfWeek = '';
let currentDay = '';
let formattedTime = '';
let averageTemp = 0;



// const todayDate = getTodaysDate();

window.onload = function(){
    getGeoCode(locationSearch);
}




