
const apiKey = "582b8fcfe35bbe1c86f4c2f89a325de1";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Peshawar";

async function checkWheather() {
    const resp = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await resp.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
}

checkWheather();