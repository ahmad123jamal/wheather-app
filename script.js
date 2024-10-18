
const apiKey = "582b8fcfe35bbe1c86f4c2f89a325de1";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchBo = document.querySelector(".search input");
var btn = document.querySelector(".search button");

var weatherIcon = document.querySelector(".wheather-icon");

async function checkWheather(city) {
    const resp = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (resp.status == 404) {
        document.querySelector(".eror").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    } else {

        var data = await resp.json();
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloud.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
    
    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".eror").style.display = "none";

    }

    
}
btn.addEventListener("click", ()=> {
    checkWheather(searchBo.value);
})

checkWheather();