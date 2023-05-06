var input = document.getElementById("input");
var btn = document.getElementById("searchIcon");
var statusOfWeather = document.getElementById("status");
var temp = document.getElementById("temp");
var city = document.getElementById("city");
var backImage = document.getElementById("backImage")
var temp2 = document.getElementById("temp2")
var wind = document.getElementById("wind")
var pressure = document.getElementById("pressure")
var statusIcon = document.getElementById("statusIcon");
var container = document.querySelector(".container")

input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=eb77c7baad45f8e4b1fb10c55b8517dc')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                city.innerHTML = data['name']
                temp.innerHTML = (data['main']['temp']).toFixed(1) + "\xB0"
                statusOfWeather.innerHTML = data['weather'][0]['main']
                var temp2Value = (data['main']['feels_like']).toFixed(1) + "\xB0"
                temp2.innerHTML = temp2Value
                wind.innerHTML = data['wind']['speed']
                pressure.innerHTML = data['main']['pressure'] + " mbar"
                var icon = data['weather'][0]['icon']

                switch (icon) {
                    case "01d":
                        container.style.backgroundImage = "url('https://wallpapershome.com/images/pages/pic_v/3896.jpg')";
                        statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/clear.png"
                        break;
                    case "02d":
                        statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/mostlycloudy.png";
                        break;
                    case "03d":
                        statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/cloudy.png";
                        break;
                    case "04d":
                        statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/cloudy.png";
                        break;
                    case "09d":
                        statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/chancerain.png"
                        break;
                    case "10d":
                        container.style.backgroundImage = "url('https://i.pinimg.com/originals/c7/c5/43/c7c543e0346c5168d4efa480ae153fb5.gif')"
                        statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/nt_rain.png"
                        break;
                    case "11d":
                        statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/tstorms.png"
                        break;
                    case "13d":
                        statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/snow.png"
                        break;
                    case "50d":
                        statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/fog.png"
                        break;
                }
                input.value = "";
            })
            .catch(err => {
                console.log(err)
            })
    }
})
btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=eb77c7baad45f8e4b1fb10c55b8517dc')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            city.innerHTML = data['name']
            var tempValue = (data['main']['temp']).toFixed(1) + "\xB0"
            temp.innerHTML = tempValue;
            statusOfWeather.innerHTML = data['weather'][0]['main']
            var temp2Value = (data['main']['feels_like']).toFixed(1) + "\xB0"
            temp2.innerHTML = temp2Value
            wind.innerHTML = data['wind']['speed']
            pressure.innerHTML = data['main']['pressure'] + " mbar"
            var icon = data['weather'][0]['icon']

            switch (icon) {
                case "01d":
                    container.style.backgroundImage = "url('https://wallpapershome.com/images/pages/pic_v/3896.jpg')"
                    statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/clear.png"
                    break;
                case "02d":
                    statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/mostlycloudy.png";
                    break;
                case "03d":
                    statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/cloudy.png";
                    break;
                case "04d":
                    statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/cloudy.png";
                    break;
                case "09d":
                    statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/chancerain.png"
                    break;
                case "10d":
                    container.style.backgroundImage = "url('https://i.pinimg.com/originals/c7/c5/43/c7c543e0346c5168d4efa480ae153fb5.gif')"
                    statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/nt_rain.png"
                    break;
                case "11d":
                    statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/tstorms.png"
                    break;
                case "13d":
                    statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/snow.png"
                    break;
                case "50d":
                    statusIcon.src = "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/fog.png"
                    break;
            }
            input.value = "";
        })
        .catch(err => {
            console.log(err)
        })
})