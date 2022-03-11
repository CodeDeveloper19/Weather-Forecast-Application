var search = document.getElementById("search");
var search2 = document.getElementById("search2");
var temperature = document.getElementById("temperature");
var city = document.getElementById("city");
var country = document.getElementById("country");
var sunrise = document.getElementById("up");
var sunset = document.getElementById("down");
var currentCondition = document.getElementById("condition");
var time = document.getElementById("time");
var emoji = document.getElementById("emoji");
var weathericon = document.getElementById("weathericon");
var weather = document.getElementById("weather");
var image = document.getElementById("rainstorm");
var chanceOfRain = document.getElementById("chanceofrain");
var chanceOfNoRain = document.getElementById("chanceofnorain");
var chanceOfSnow = document.getElementById("chanceofsnow");
var chanceOfNoSnow = document.getElementById("chanceofnosnow");
var windDegree = document.getElementById("winddegree");
var windSpeed = document.getElementById("windspeed");
var windSpeedMile = document.getElementById("windspeedmile");
var windDirection = document.getElementById("winddirection");
var precipitation = document.getElementById("precipitation");
var pressure = document.getElementById("pressure");
var pressure2 = document.getElementById("pressure2");
var ultraviolet = document.getElementById("ultraviolet");
var container = document.getElementById("container");
var hightemperature = document.getElementsByClassName("hightemperature");
var hightempprogress = document.getElementsByClassName("hightempprogress");
var lowtemperature0 = document.getElementById("lowtemperature0");
var lowtemperature1 = document.getElementById("lowtemperature1");
var lowtemperature2 = document.getElementById("lowtemperature2");
var lowtemperature3 = document.getElementById("lowtemperature3");
var lowtemperature4 = document.getElementById("lowtemperature4");
var lowtemperature5 = document.getElementById("lowtemperature5");
var lowtemperature6 = document.getElementById("lowtemperature6");
var lowtemperature7 = document.getElementById("lowtemperature7");
var lowtemperature8 = document.getElementById("lowtemperature8");
var lowtemperature9 = document.getElementById("lowtemperature9");
var lowtemperature10 = document.getElementById("lowtemperature10");
var lowtemperature11 = document.getElementById("lowtemperature11");
var lowtemperature12 = document.getElementById("lowtemperature12");
var lowtemperature13 = document.getElementById("lowtemperature13");
var lowtemperature14 = document.getElementById("lowtemperature14");
var lowtemperature15 = document.getElementById("lowtemperature15");
var lowtemperature16 = document.getElementById("lowtemperature16");
var lowtemperature17 = document.getElementById("lowtemperature17");
var lowtemperature18 = document.getElementById("lowtemperature18");
var lowtemperature19 = document.getElementById("lowtemperature19");
var lowtemperature20 = document.getElementById("lowtemperature20");
var lowtemperature21 = document.getElementById("lowtemperature21");
var lowtemperature22 = document.getElementById("lowtemperature22");
var lowtemperature23 = document.getElementById("lowtemperature23");


var lowtempprogress0 = document.getElementById("lowtempprogress0");
var lowtempprogress1 = document.getElementById("lowtempprogress1");
var lowtempprogress2 = document.getElementById("lowtempprogress2");
var lowtempprogress3 = document.getElementById("lowtempprogress3");
var lowtempprogress4 = document.getElementById("lowtempprogress4");
var lowtempprogress5 = document.getElementById("lowtempprogress5");
var lowtempprogress6 = document.getElementById("lowtempprogress6");
var lowtempprogress7 = document.getElementById("lowtempprogress7");
var lowtempprogress8 = document.getElementById("lowtempprogress8");
var lowtempprogress9 = document.getElementById("lowtempprogress9");
var lowtempprogress10 = document.getElementById("lowtempprogress10");
var lowtempprogress11 = document.getElementById("lowtempprogress11");
var lowtempprogress12 = document.getElementById("lowtempprogress12");
var lowtempprogress13 = document.getElementById("lowtempprogress13");
var lowtempprogress14 = document.getElementById("lowtempprogress14");
var lowtempprogress15 = document.getElementById("lowtempprogress15");
var lowtempprogress16 = document.getElementById("lowtempprogress16");
var lowtempprogress17 = document.getElementById("lowtempprogress17");
var lowtempprogress18 = document.getElementById("lowtempprogress18");
var lowtempprogress19 = document.getElementById("lowtempprogress19");
var lowtempprogress20 = document.getElementById("lowtempprogress20");
var lowtempprogress21 = document.getElementById("lowtempprogress21");
var lowtempprogress22 = document.getElementById("lowtempprogress22");
var lowtempprogress23 = document.getElementById("lowtempprogress23");

var humidity0 = document.getElementById("humidity0");
var humidity1 = document.getElementById("humidity1");
var humidity2 = document.getElementById("humidity2");
var humidity3 = document.getElementById("humidity3");
var humidity4 = document.getElementById("humidity4");
var humidity5 = document.getElementById("humidity5");
var humidity6 = document.getElementById("humidity6");
var humidity7 = document.getElementById("humidity7");
var humidity8 = document.getElementById("humidity8");
var humidity9 = document.getElementById("humidity9");
var humidity10 = document.getElementById("humidity10");
var humidity11 = document.getElementById("humidity11");
var humidity12 = document.getElementById("humidity12");
var humidity13 = document.getElementById("humidity13");
var humidity14 = document.getElementById("humidity14");
var humidity15 = document.getElementById("humidity15");
var humidity16 = document.getElementById("humidity16");
var humidity17 = document.getElementById("humidity17");
var humidity18 = document.getElementById("humidity18");
var humidity19 = document.getElementById("humidity19");
var humidity20 = document.getElementById("humidity20");
var humidity21 = document.getElementById("humidity21");
var humidity22 = document.getElementById("humidity22");
var humidity23 = document.getElementById("humidity23");

var weather0 = document.getElementById("weathericon0");
var weather1 = document.getElementById("weathericon1");
var weather2 = document.getElementById("weathericon2");
var weather3 = document.getElementById("weathericon3");
var weather4 = document.getElementById("weathericon4");
var weather5 = document.getElementById("weathericon5");
var weather6 = document.getElementById("weathericon6");
var weather7 = document.getElementById("weathericon7");
var weather8 = document.getElementById("weathericon8");
var weather9 = document.getElementById("weathericon9");
var weather10 = document.getElementById("weathericon10");
var weather11 = document.getElementById("weathericon11");
var weather12 = document.getElementById("weathericon12");
var weather13 = document.getElementById("weathericon13");
var weather14 = document.getElementById("weathericon14");
var weather15 = document.getElementById("weathericon15");
var weather16 = document.getElementById("weathericon16");
var weather17 = document.getElementById("weathericon17");
var weather18 = document.getElementById("weathericon18");
var weather19 = document.getElementById("weathericon19");
var weather20 = document.getElementById("weathericon20");
var weather21 = document.getElementById("weathericon21");
var weather22 = document.getElementById("weathericon22");
var weather23 = document.getElementById("weathericon23");


var animationsRefresh = () => {
    weather.style.animationName = "opacity";
};

window.onload = loading();

function loading() {
    container.classList.add("background2");
};


function gettinglocation(){
    // fetch("https://apiip.net/api/check&7134d316-4578-4914-aa90-66382819bf16 = YOUR_ACCESS_KEY")
    // .then(response => response.json())
    // .then(data => {console.log(data)})
}

const click = () => (
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=5279c1bb31344eda98d224055221002&q=${search.value}`)
        .then(response => response.json())
        .then(data => {
            const temp = data.current.temp_c;
            const condition = data.current.condition.text 
            const isDay = data.current.is_day;
            const valueOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
            const valueOfNoRain = 100 - valueOfRain;
            const valueOfSnow = data.forecast.forecastday[0].day.daily_chance_of_snow;
            const valueOfNoSnow = 100 - valueOfSnow;

/************************Use of the DOM events to effect the data starts here**********************************************************/

            var interval = setInterval(() => {
                if (temperature.innerHTML == temp) {
                }
                if (temperature.innerHTML > temp) {
                    search.disabled = true;
                    if (temp % 1 == 0){
                        temperature.innerHTML = parseInt(temperature.innerHTML) - 1;
                    }
                    else if (temp % 1 != 0){
                        temperature.innerHTML = (parseFloat(temperature.innerHTML) - .1).toFixed(1); /*This was the only way to make the value of the temp equal to the inaccurate calculation */
                    }
                } else {
                    search.disabled = true;
                    if (temp % 1 == 0){
                        temperature.innerHTML = parseInt(temperature.innerHTML) + 1;
                    }
                    else if (temp % 1 != 0){
                        temperature.innerHTML = (parseFloat(temperature.innerHTML) + .1).toFixed(1);
                    }
                }
            },20)

            setInterval (() => {
                if (temperature.innerHTML == temp) {
                    clearInterval(interval);
                    search.disabled = false;
                }
            }, 10)

            currentCondition.innerHTML = condition;
            time.innerHTML = data.location.localtime;
            sunrise.innerHTML = data.forecast.forecastday[0].astro.sunrise;
            sunset.innerHTML = data.forecast.forecastday[0].astro.sunset;
            country.innerHTML = data.location.country;
            city.innerHTML = data.location.name;
            chanceOfRain.innerHTML =  valueOfRain;
            chanceOfNoRain.innerHTML = valueOfNoRain;
            chanceOfSnow.innerHTML = valueOfSnow;
            chanceOfNoSnow.innerHTML = valueOfNoSnow;
            windDegree.innerHTML = data.current.wind_degree
            windSpeed.innerHTML = data.current.wind_kph
            windSpeedMile.innerHTML = data.current.wind_mph
            windDirection.innerHTML = data.current.wind_dir
            precipitation.innerHTML = data.current.precip_mm
            pressure.innerHTML = data.current.pressure_mb;
            pressure2.innerHTML = data.current.pressure_in;
            ultraviolet.innerHTML = data.current.uv;
/**************************************************This is the functionality for changing the value of the temperature for the hours of the day********************* */
var lowtemperatures = [lowtemperature0, lowtemperature1, lowtemperature2, lowtemperature3, lowtemperature4, lowtemperature5, lowtemperature6, lowtemperature7, lowtemperature8, lowtemperature9,  lowtemperature10, lowtemperature11, lowtemperature12, lowtemperature13, lowtemperature14, lowtemperature15, lowtemperature16, lowtemperature17, lowtemperature18, lowtemperature19, lowtemperature20, lowtemperature21, lowtemperature22, lowtemperature23]
var setIntervalTimer;

// if (data.forecast.forecastday[0].day.maxtemp_c % 1 != 0){
//     setIntervalTimer = 1;
// } else {
//     setIntervalTimer = 20;
// }
for (var i = 0; i < 24; i++){
    lowtemperatures[i].innerHTML = data.forecast.forecastday[0].hour[i].temp_c;
}

for (var i = 0; i < 24; i++){
    hightemperature[i].innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
    hightempprogress[i].style.width = "0%";
}

if (data.forecast.forecastday[0].day.maxtemp_c > 0){
    var hightemp = setInterval(() => {
        if (data.forecast.forecastday[0].day.maxtemp_c % 1 == 0){
            for (let v = 0; v < 24; v++){
                hightempprogress[v].style.width = (parseInt(hightempprogress[1].style.width) + 1) + "%";}
            }
        else if (data.forecast.forecastday[0].day.maxtemp_c % 1 != 0){
            for (let v = 0; v < 24; v++){
                hightempprogress[v].style.width = ((parseFloat(hightempprogress[1].style.width) + .1).toFixed(1)) + "%";
            }
        }
    }, setIntervalTimer)

    setInterval (() => {
        if (hightempprogress[0].style.width == (data.forecast.forecastday[0].day.maxtemp_c + "%")){
            clearInterval(hightemp);
        }
    }, setIntervalTimer)
}


// let lowtemp0, lowtemp1, lowtemp2, lowtemp3, lowtemp4, lowtemp5, lowtemp6, lowtemp7, lowtemp8, lowtemp9, lowtemp10, lowtemp11, lowtemp12, lowtemp13, lowtemp14, lowtemp15, lowtemp16, lowtemp17, lowtemp18, lowtemp19, lowtemp20, lowtemp21, lowtemp22, lowtemp23
// var lowtemperaturess = [lowtempprogress0, lowtempprogress1, lowtempprogress2, lowtempprogress3, lowtempprogress4, lowtempprogress5, lowtempprogress6, lowtempprogress7, lowtempprogress8, lowtempprogress9,  lowtempprogress10, lowtempprogress11, lowtempprogress12, lowtempprogress13, lowtempprogress14, lowtempprogress15, lowtempprogress16, lowtempprogress17, lowtempprogress18, lowtempprogress19, lowtempprogress20, lowtempprogress21, lowtempprogress22, lowtempprogress23]
// var lowtemp = [lowtemp0, lowtemp1, lowtemp2, lowtemp3, lowtemp4, lowtemp5, lowtemp6, lowtemp7, lowtemp8, lowtemp9, lowtemp10, lowtemp11, lowtemp12, lowtemp13, lowtemp14, lowtemp15, lowtemp16, lowtemp17, lowtemp18, lowtemp19, lowtemp20, lowtemp21, lowtemp22, lowtemp23]

// for (let i = 0; i < lowtemperaturess.length; i++){
//     lowtemperaturess[i].style.width = "0%";


//     if (data.forecast.forecastday[0].hour[0].temp_c > 0){
//         lowtemp[i] = setInterval(() => {
//             if (lowtemperaturess[i].style.width > data.forecast.forecastday[0].hour[i].temp_c) {
//                 if (data.forecast.forecastday[0].hour[i].temp_c % 1 == 0){
//                     lowtemperaturess[i].style.width = (parseInt(lowtemperaturess[i].style.width) - 1) + "%";
//                 }
//                 else if (data.forecast.forecastday[0].hour[i].temp_c % 1 != 0){
//                     lowtemperaturess[i].style.width = ((parseFloat(lowtemperaturess[i].style.width) - .1).toFixed(1)) + "%";
//                 }
//             } else {
//                 if (data.forecast.forecastday[0].hour[i].temp_c % 1 == 0){
//                     lowtemperaturess[i].style.width = (parseInt(lowtemperaturess[i].style.width) + 1) + "%";
//                 }
//                 else if (data.forecast.forecastday[0].hour[0].temp_c % 1 != 0){
//                     lowtemperaturess[i].style.width = ((parseFloat(lowtemperaturess[0].style.width) + .1).toFixed(1)) + "%";
//                 }
//             }
//         }, 10)
//         setInterval (() => {
//             if (lowtemperaturess[i].style.width == (data.forecast.forecastday[0].hour[i].temp_c + "%")){
//                 clearInterval(lowtemp[i]);
//             }
//         }, 10)
//     } else {
//         return null;
//     }
// }




/***********************************************************************************************************************************************************/

/********************************************This section is for the functionality of the emoji icons******************************************************/
            if (temp > 0 && temp <= 10){
                emoji.src = "emojis/icons8-downcast-face-with-sweat-96.png"; /*near freezing*/
            } else if (temp > 10 && temp <= 20){
                emoji.src = "emojis/icons8-slightly-smiling-face-96.png"; /*cool*/
            } else if (temp >= 30){
                emoji.src = "emojis/icons8-hot-face-96.png"; /*hot*/
            } else if (temp > 20 && temp < 30){
                emoji.src = "emojis/icons8-smiling-face-96.png"; /*Normal*/
            } else if (temp <= 0){
                emoji.src = "emojis/icons8-cold-face-96.png"; /*freezing*/
            }
/**********************************************************************************************************************************************************/

/**********************************************This section is for the functionality of the weather icon***************************************************/
            if (condition == "Partly cloudy"  && isDay == 1){   
                weathericon.src = "weather icons/icons8-partly-cloudy-day-96.png";
                image.src = "weather/partly cloudy.jpg";
            } else if (condition == "Partly cloudy"  && isDay == 0){
                weathericon.src = "weather icons/icons8-night-96.png";
                image.src = "weather/partly cloudy night.jpg";
            } else if (condition == "Cloudy"){
                weathericon.src = "weather icons/icons8-cloudy-128.png";
                image.src = "weather/cloudy.jpg";
            } else if (condition == "Sunny"){
                weathericon.src = "weather icons/icons8-sun-64.png";
                image.src = "weather/sunny.jpg";
            } else if (condition == "Clear"){
                weathericon.src = "weather icons/icons8-moon-96.png";
                image.src = "weather/clear night.jpg";
            } else if (condition == "Overcast"){
                weathericon.src = "weather icons/icons8-overcast-96.png";
                image.src = "weather/overcast.jpg";
            } else if (condition == "Mist"){
                weathericon.src = "weather icons/icons8-haze-64.png";
                image.src = "weather/mist.jpg";
            } else if (condition == "Heavy freezing drizzle" || condition == "Patchy light drizzle" || condition == "Light drizzle" || condition == "Freezing drizzle" || condition == "Patchy freezing drizzle possible" || condition == "Heavy freezing drizzle"){
                weathericon.src = "weather icons/icons8-drizzle-64.png";
                image.src = "weather/drizzle.jpg";
            } else if (condition == "Patchy rain possible" || condition == "Patchy light rain" || condition == "Light rain" || condition == "Light freezing rain" || condition == "Light rain shower"){
                weathericon.src = "weather icons/icons8-light-rain-96.png";
                image.src = "weather/rainstorm.jpg";
            } else if (condition == "Patchy snow possible" || condition == "Patchy light snow" || condition == "Light snow" || condition == "Light snow showers"){
                weathericon.src = "weather icons/icons8-light-snow-96.png";
                image.src = "weather/snow.jpg";
            } else if (condition == "Patchy sleet possible" || condition == "Light sleet" || condition == "Moderate or heavy sleet" || condition == "Light sleet showers" || condition == "Moderate or heavy sleet showers"){
                weathericon.src = "weather icons/icons8-sleet-64.png";
                image.src = "weather/snow.jpg";
            } else if (condition == "Thundery outbreaks possible" || condition == "Moderate or heavy snow with thunder" || condition == "Moderate or heavy rain with thunder"  || condition == "Patchy light snow with thunder" || condition == "Patchy light rain with thunder" && isDay == 1){
                weathericon.src = "weather icons/icons8-stormy-66.png";
                image.src = "weather/thunderstorm.jpg";
            } else if (condition == "Thundery outbreaks possible" || condition == "Moderate or heavy snow with thunder" || condition == "Moderate or heavy rain with thunder"  || condition == "Patchy light snow with thunder" || condition == "Patchy light rain with thunder" && isDay == 0){
                weathericon.src = "weather icons/icons8-stormy-night-96.png";
                image.src = "weather/thunderstorm.jpg";
            } else if (condition == "Blizzard"){
                weathericon.src = "weather icons/icons8-blizzard-64.png";
                image.src = "weather/blizzard.jpg";
            } else if (condition == "Blowing snow" || condition == "Patchy moderate snow" || condition == "Moderate snow" && isDay == 1){
                weathericon.src = "weather icons/icons8-snow-96.png";
                image.src = "weather/snow.jpg";
            } else if (condition == "Blowing snow" || condition == "Patchy moderate snow" || condition == "Moderate snow" && isDay == 0){
                weathericon.src = "weather icons/icons8-snowy-night-100png";
                image.src = "weather/snow.jpg";
            } else if (condition == "Patchy heavy snow" || condition == "Heavy snow" || condition == "Moderate or heavy snow showers" || condition == "Ice pellets" || condition == "Light showers of ice pellets" || condition == "Moderate or heavy showers of ice pellets"){
                weathericon.src = "weather icons/icons8-snow-storm-96.png";
                image.src = "weather/snow.jpg";
            } else if (condition == "Moderate or heavy rain shower" || condition == "Moderate rain at times" || condition == "Moderate rain" && isDay == 1){
                weathericon.src = "weather icons/icons8-rain-cloud-96.png";
                image.src = "weather/rainstorm.jpg";
            } else if (condition == "Moderate or heavy rain shower" || condition == "Moderate rain at times" || condition == "Moderate rain" && isDay == 0){
                weathericon.src = "weather icons/icons8-rainy-night-96.png";
                image.src = "weather/rainstorm.jpg";
            } else if (condition == "Torrential rain shower" || condition == "Heavy rain at times" || condition == "Heavy rain" || condition == "Moderate rain" || condition == "Moderate or heavy freezing rain"){
                weathericon.src = "weather icons/icons8-heavy-rain-96.png";
                image.src = "weather/rainstorm.jpg";
            } else if (condition == "Fog" || condition == "Freezing fog"){
                weathericon.src = "weather icons/icons8-fog-64.png";
                image.src = "weather/fog.jpg";
            }
/*********************************************************************************************************************************************************** */

/*******************************************This Section is for the weather icons of each hour and Functionality of the humidity for each hour of the day*********************************************************/

var weathers = [weather0, weather1, weather2, weather3, weather4, weather5, weather6, weather7, weather8, weather9, weather10, weather11, weather12, weather13, weather14, weather15, weather16, weather17, weather18, weather19, weather20, weather21, weather22, weather23]
var humidity = [humidity0, humidity1, humidity2, humidity3, humidity4, humidity5, humidity6, humidity7, humidity8, humidity9, humidity10, humidity11, humidity12, humidity13, humidity14, humidity15, humidity16, humidity17, humidity18, humidity19, humidity20, humidity21, humidity22, humidity23]

for (var v = 0; v < 24; v++){
    weathers[v].src = data.forecast.forecastday[0].hour[v].condition.icon
    humidity[v].innerHTML = data.forecast.forecastday[0].hour[v].humidity;
}
/*************************************************************************************************************************************************/

if (isDay == 0){
    document.body.style.backgroundImage = "url('weather/nighttime.jpg')";
    container.classList.remove("background2");
    container.classList.add("background1");
} else if (isDay == 1){
    document.body.style.backgroundImage = "url('weather/noaa-ZVhm6rEKEX8-unsplash.jpg')";
    container.classList.remove("background1");
    container.classList.add("background2");
}

    })
        // .catch(err => {console.log('Error:', err)})
        
)

// const click = () => (
//     fetch(`http://api.weatherapi.com/v1/forecast.json?key=5279c1bb31344eda98d224055221002&q=${search.value}`)
//         .then(response => response.json())
//         .then(data => console.log("Success: ", data))
//         .catch(err => {
//             console.log(err)
//         })       
// )  
search2.addEventListener('click', () => {click(), animationsRefresh()});
// setInterval(click, 1000);

