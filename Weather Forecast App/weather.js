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
var image = document.getElementById("rainstorm");
var chanceOfRain = document.getElementById("chanceofrain");
var chanceOfNoRain = document.getElementById("chanceofnorain");
var chanceOfSnow = document.getElementById("chanceofsnow");
var chanceOfNoSnow = document.getElementById("chanceofnosnow");
var windDegree = document.getElementById("winddegree")
var windSpeed = document.getElementById("windspeed")
var windSpeedMile = document.getElementById("windspeedmile")
var windDirection = document.getElementById("winddirection")
var precipitation = document.getElementById("precipitation")
var pressure = document.getElementById("pressure")
var pressure2 = document.getElementById("pressure2")
var ultraviolet = document.getElementById("ultraviolet")
var hightemperature = document.getElementsByClassName("hightemperature");
var lowtemperature0 = document.getElementsByClassName("lowtemperature0");
var lowtemperature1 = document.getElementsByClassName("lowtemperature1");
var lowtemperature2 = document.getElementsByClassName("lowtemperature2");
var lowtemperature3 = document.getElementsByClassName("lowtemperature3");
var lowtemperature4 = document.getElementsByClassName("lowtemperature4");
var lowtemperature5 = document.getElementsByClassName("lowtemperature5");
var lowtemperature6 = document.getElementsByClassName("lowtemperature6");
var lowtemperature7 = document.getElementsByClassName("lowtemperature7");
var lowtemperature8 = document.getElementsByClassName("lowtemperature8");
var lowtemperature9 = document.getElementsByClassName("lowtemperature9");
var lowtemperature10 = document.getElementsByClassName("lowtemperature10");
var lowtemperature11 = document.getElementsByClassName("lowtemperature11");
var lowtemperature12 = document.getElementsByClassName("lowtemperature12");
var lowtemperature13 = document.getElementsByClassName("lowtemperature13");
var lowtemperature14 = document.getElementsByClassName("lowtemperature14");
var lowtemperature15 = document.getElementsByClassName("lowtemperature15");
var lowtemperature16 = document.getElementsByClassName("lowtemperature16");
var lowtemperature17 = document.getElementsByClassName("lowtemperature17");
var lowtemperature18 = document.getElementsByClassName("lowtemperature18");
var lowtemperature19 = document.getElementsByClassName("lowtemperature19");
var lowtemperature20 = document.getElementsByClassName("lowtemperature20");
var lowtemperature21 = document.getElementsByClassName("lowtemperature21");
var lowtemperature22 = document.getElementsByClassName("lowtemperature22");
var lowtemperature23 = document.getElementsByClassName("lowtemperature23");
var Humidity0 = document.getElementById("humidity0");
var Humidity1 = document.getElementById("humidity1");
var Humidity2 = document.getElementById("humidity2");
var Humidity3 = document.getElementById("humidity3");
var Humidity4 = document.getElementById("humidity4");
var Humidity5 = document.getElementById("humidity5");
var Humidity6 = document.getElementById("humidity6");
var Humidity7 = document.getElementById("humidity7");
var Humidity8 = document.getElementById("humidity8");
var Humidity9 = document.getElementById("humidity9");
var Humidity10 = document.getElementById("humidity10");
var Humidity11 = document.getElementById("humidity11");
var Humidity12 = document.getElementById("humidity12");
var Humidity13 = document.getElementById("humidity13");
var Humidity14 = document.getElementById("humidity14");
var Humidity15 = document.getElementById("humidity15");
var Humidity16 = document.getElementById("humidity16");
var Humidity17 = document.getElementById("humidity17");
var Humidity18 = document.getElementById("humidity18");
var Humidity19 = document.getElementById("humidity19");
var Humidity20 = document.getElementById("humidity20");
var Humidity21 = document.getElementById("humidity21");
var Humidity22 = document.getElementById("humidity22");
var Humidity23 = document.getElementById("humidity23");




const click = () => (
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=5279c1bb31344eda98d224055221002&q=${search.value}`)
        .then(response => response.json())
        .then(data => {
            const temp = data.current.temp_c
            const condition = data.current.condition.text 
            const isDay = data.current.is_day;
            const valueOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
            const valueOfNoRain = 100 - valueOfRain;
            const valueOfSnow = data.forecast.forecastday[0].day.daily_chance_of_snow;
            const valueOfNoSnow = 100 - valueOfSnow;

/************************Use of the DOM events to effect the data starts here**********************************************************/
            temperature.innerHTML = temp;
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

/***************************************************Functionality of the humidity for each hour of the day******************************************/
            Humidity0.innerHTML = data.forecast.forecastday[0].hour[0].humidity;
            Humidity1.innerHTML = data.forecast.forecastday[0].hour[1].humidity;
            Humidity2.innerHTML = data.forecast.forecastday[0].hour[2].humidity;
            Humidity3.innerHTML = data.forecast.forecastday[0].hour[3].humidity;
            Humidity4.innerHTML = data.forecast.forecastday[0].hour[4].humidity;
            Humidity5.innerHTML = data.forecast.forecastday[0].hour[5].humidity;
            Humidity6.innerHTML = data.forecast.forecastday[0].hour[6].humidity;
            Humidity7.innerHTML = data.forecast.forecastday[0].hour[7].humidity;
            Humidity8.innerHTML = data.forecast.forecastday[0].hour[8].humidity;
            Humidity9.innerHTML = data.forecast.forecastday[0].hour[9].humidity;
            Humidity10.innerHTML = data.forecast.forecastday[0].hour[10].humidity;
            Humidity11.innerHTML = data.forecast.forecastday[0].hour[11].humidity;
            Humidity12.innerHTML = data.forecast.forecastday[0].hour[12].humidity;
            Humidity13.innerHTML = data.forecast.forecastday[0].hour[13].humidity;
            Humidity14.innerHTML = data.forecast.forecastday[0].hour[14].humidity;
            Humidity15.innerHTML = data.forecast.forecastday[0].hour[15].humidity;
            Humidity16.innerHTML = data.forecast.forecastday[0].hour[16].humidity;
            Humidity17.innerHTML = data.forecast.forecastday[0].hour[17].humidity;
            Humidity18.innerHTML = data.forecast.forecastday[0].hour[18].humidity;
            Humidity19.innerHTML = data.forecast.forecastday[0].hour[19].humidity;
            Humidity20.innerHTML = data.forecast.forecastday[0].hour[20].humidity;
            Humidity21.innerHTML = data.forecast.forecastday[0].hour[21].humidity;
            Humidity22.innerHTML = data.forecast.forecastday[0].hour[22].humidity;
            Humidity23.innerHTML = data.forecast.forecastday[0].hour[23].humidity;
/****************************************************************************************************************************************************************** */

/**************************************************This is the functionality for changing the value of the temperature for the hours of the day********************* */
            for (var i = 0; i < hightemperature.length; i++) {
                hightemperature[i].innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
                hightemperature[i].value = data.forecast.forecastday[0].day.maxtemp_c;
            }

            for (var i = 0; i < lowtemperature0.length; i++) {
                lowtemperature0[i].innerHTML = data.forecast.forecastday[0].hour[0].temp_c;
                lowtemperature0[i].value = data.forecast.forecastday[0].hour[0].temp_c;
            }
            for (var i = 0; i < lowtemperature1.length; i++) {
                lowtemperature1[i].innerHTML = data.forecast.forecastday[0].hour[1].temp_c;
                lowtemperature1[i].value = data.forecast.forecastday[0].hour[1].temp_c;
            }
            for (var i = 0; i < lowtemperature2.length; i++) {
                lowtemperature2[i].innerHTML = data.forecast.forecastday[0].hour[2].temp_c;
                lowtemperature2[i].value = data.forecast.forecastday[0].hour[2].temp_c;
            }
            for (var i = 0; i < lowtemperature3.length; i++) {
                lowtemperature3[i].innerHTML = data.forecast.forecastday[0].hour[3].temp_c;
                lowtemperature3[i].value = data.forecast.forecastday[0].hour[3].temp_c;
            }
            for (var i = 0; i < lowtemperature4.length; i++) {
                lowtemperature4[i].innerHTML = data.forecast.forecastday[0].hour[4].temp_c;
                lowtemperature4[i].value = data.forecast.forecastday[0].hour[4].temp_c;
            }
            for (var i = 0; i < lowtemperature5.length; i++) {
                lowtemperature5[i].innerHTML =  data.forecast.forecastday[0].hour[5].temp_c;
                lowtemperature5[i].value =  data.forecast.forecastday[0].hour[5].temp_c;
            }
            for (var i = 0; i < lowtemperature6.length; i++) {
                lowtemperature6[i].innerHTML =  data.forecast.forecastday[0].hour[6].temp_c;
                lowtemperature6[i].value =  data.forecast.forecastday[0].hour[6].temp_c;
            }
            for (var i = 0; i < lowtemperature7.length; i++) {
                lowtemperature7[i].innerHTML = data.forecast.forecastday[0].hour[7].temp_c;
                lowtemperature7[i].value = data.forecast.forecastday[0].hour[7].temp_c;
            }
            for (var i = 0; i < lowtemperature8.length; i++) {
                lowtemperature8[i].innerHTML = data.forecast.forecastday[0].hour[8].temp_c;
                lowtemperature8[i].value = data.forecast.forecastday[0].hour[8].temp_c;
            }
            for (var i = 0; i < lowtemperature9.length; i++) {
                lowtemperature9[i].innerHTML = data.forecast.forecastday[0].hour[9].temp_c;
                lowtemperature9[i].value = data.forecast.forecastday[0].hour[9].temp_c;
            }
            for (var i = 0; i < lowtemperature10.length; i++) {
                lowtemperature10[i].innerHTML = data.forecast.forecastday[0].hour[10].temp_c;
                lowtemperature10[i].value = data.forecast.forecastday[0].hour[10].temp_c;
            }
            for (var i = 0; i < lowtemperature11.length; i++) {
                lowtemperature11[i].innerHTML = data.forecast.forecastday[0].hour[11].temp_c;
                lowtemperature11[i].value = data.forecast.forecastday[0].hour[11].temp_c;
            }
            for (var i = 0; i < lowtemperature12.length; i++) {
                lowtemperature12[i].innerHTML = data.forecast.forecastday[0].hour[12].temp_c;
                lowtemperature12[i].value = data.forecast.forecastday[0].hour[12].temp_c;
            }
            for (var i = 0; i < lowtemperature13.length; i++) {
                lowtemperature13[i].innerHTML = data.forecast.forecastday[0].hour[13].temp_c;
                lowtemperature13[i].value = data.forecast.forecastday[0].hour[13].temp_c;
            }
            for (var i = 0; i < lowtemperature14.length; i++) {
                lowtemperature14[i].innerHTML = data.forecast.forecastday[0].hour[14].temp_c;
                lowtemperature14[i].value = data.forecast.forecastday[0].hour[14].temp_c;
            }
            for (var i = 0; i < lowtemperature15.length; i++) {
                lowtemperature15[i].innerHTML = data.forecast.forecastday[0].hour[15].temp_c;
                lowtemperature15[i].value = data.forecast.forecastday[0].hour[15].temp_c;
            }
            for (var i = 0; i < lowtemperature16.length; i++) {
                lowtemperature16[i].innerHTML = data.forecast.forecastday[0].hour[16].temp_c;
                lowtemperature16[i].value = data.forecast.forecastday[0].hour[16].temp_c;
            }
            for (var i = 0; i < lowtemperature17.length; i++) {
                lowtemperature17[i].innerHTML = data.forecast.forecastday[0].hour[17].temp_c;
                lowtemperature17[i].value = data.forecast.forecastday[0].hour[17].temp_c;
            }
            for (var i = 0; i < lowtemperature18.length; i++) {
                lowtemperature18[i].innerHTML = data.forecast.forecastday[0].hour[18].temp_c;
                lowtemperature18[i].value = data.forecast.forecastday[0].hour[18].temp_c;
            }
            for (var i = 0; i < lowtemperature19.length; i++) {
                lowtemperature19[i].innerHTML = data.forecast.forecastday[0].hour[19].temp_c;
                lowtemperature19[i].value = data.forecast.forecastday[0].hour[19].temp_c;
            }
            for (var i = 0; i < lowtemperature20.length; i++) {
                lowtemperature20[i].innerHTML = data.forecast.forecastday[0].hour[20].temp_c;
                lowtemperature20[i].value = data.forecast.forecastday[0].hour[20].temp_c;
            }
            for (var i = 0; i < lowtemperature21.length; i++) {
                lowtemperature21[i].innerHTML = data.forecast.forecastday[0].hour[21].temp_c;
                lowtemperature21[i].value = data.forecast.forecastday[0].hour[21].temp_c;
            }
            for (var i = 0; i < lowtemperature22.length; i++) {
                lowtemperature22[i].innerHTML = data.forecast.forecastday[0].hour[22].temp_c;
                lowtemperature22[i].value = data.forecast.forecastday[0].hour[22].temp_c;
            }
            for (var i = 0; i < lowtemperature23.length; i++) {
                lowtemperature23[i].innerHTML = data.forecast.forecastday[0].hour[23].temp_c;
                lowtemperature23[i].value = data.forecast.forecastday[0].hour[23].temp_c;
            }
/***********************************************************************************************************************************************************/

/********************************************This section is for the functionality of the emoji icons******************************************************/
            if (temp >=0 && temp <= 10){
                emoji.src = "emojis/icons8-downcast-face-with-sweat-96.png"; /*near freezing*/
            } else if (temp > 10 && temp <= 20){
                emoji.src = "emojis/icons8-slightly-smiling-face-96.png"; /*cool*/
            } else if (temp >= 30){
                emoji.src = "emojis/icons8-hot-face-96.png"; /*hot*/
            } else if (temp > 20 && temp < 30){
                emoji.src = "emojis/icons8-smiling-face-96.png"; /*Normal*/
            } else if (temp < 0){
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
        })
        .catch(err => {alert('Error:', err)})
        
)

// const click = () => (
//     fetch(`http://api.weatherapi.com/v1/forecast.json?key=5279c1bb31344eda98d224055221002&q=${search.value}`)
//         .then(response => response.json())
//         .then(data => console.log("Success: ", data))
//         // .then(data => console.log("Succs: ", data.error.message))
//         .catch(err => {
//             console.log(err.error.message)
//         })       
// )


// .then(data => console.log("Success: ", data))
// .catch(err => console.log('Error:', err))       
search2.addEventListener('click', click);


