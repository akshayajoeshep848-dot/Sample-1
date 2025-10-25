//weather
const apiKey='4de9aa79a11e0daaac485eb05eadf23b';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox= document.getElementById('input');
let weatherIcon=document.getElementById('weather-icon');


async function checkWheat(city) {
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    document.getElementById('city').textContent=data.name;
    document.getElementById('temp').innerHTML=Math.round(data.main.temp) + '°C';
    document.getElementById('humidity').innerHTML=data.main.humidity + '%';
    document.getElementById('wind').innerHTML=data.wind.speed + 'km/h';

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
   else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    document.getElementById('weather').style.display='block'
}

function finalResult(){
    checkWheat(searchBox.value);
}