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
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${locationSearch}&apikey=eXZliAD3an9k8KdO5lUN64n8o5hsVc0f`;
  
  try {
    //Make fetch request and stores it as response
    const response = await fetch(url, { mode: 'cors' });
      console.log(response);
      
    //Stores the JSON formated response into 'weatherData' and performs action on it
      const weatherData = await response.json();
      console.log(weatherData);
      console.log(weatherData.location);
      locationOutput.innerHTML = weatherData.location.name;
  } catch (e){
    console.log(e)
  };  
  
    locationOutput.innerHTML = 'Loading...';
  
}

getWeather(locationSearch);
