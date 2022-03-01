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




// const click = () => (
//     fetch(`http://api.weatherapi.com/v1/forecast.json?key=5279c1bb31344eda98d224055221002&q=${search.value}`)
//         .then(response => response.json())
//         .then(data => {
// /*This section is for collecting the required data from the data in the response.json and storing it in different variables*/
//             const temp = data.current.temp_c
//             const condition = data.current.condition.text 
//             const localtime = data.location.localtime 
//             const sunRise = data.forecast.forecastday[0].astro.sunrise
//             const sunSet = data.forecast.forecastday[0].astro.sunset
//             const isDay = data.current.is_day;
//             const valueOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
//             const valueOfNoRain = 100 - valueOfRain;
//             const valueOfSnow = data.forecast.forecastday[0].day.daily_chance_of_snow;
//             const valueOfNoSnow = 100 - valueOfSnow;

//             const humidity0 = data.forecast.forecastday[0].hour[0].humidity
//             const temp0 = data.forecast.forecastday[0].hour[0].temp_c
//             const humidity1 = data.forecast.forecastday[0].hour[1].humidity
//             const temp1 = data.forecast.forecastday[0].hour[1].temp_c
//             const humidity2 = data.forecast.forecastday[0].hour[2].humidity
//             const temp2 = data.forecast.forecastday[0].hour[2].temp_c
//             const humidity3 = data.forecast.forecastday[0].hour[3].humidity
//             const temp3 = data.forecast.forecastday[0].hour[3].temp_c
//             const humidity4 = data.forecast.forecastday[0].hour[4].humidity
//             const temp4 = data.forecast.forecastday[0].hour[4].temp_c
//             const humidity5 = data.forecast.forecastday[0].hour[5].humidity
//             const temp5 = data.forecast.forecastday[0].hour[5].temp_c
//             const humidity6 = data.forecast.forecastday[0].hour[6].humidity
//             const temp6 = data.forecast.forecastday[0].hour[6].temp_c
//             const humidity7 = data.forecast.forecastday[0].hour[7].humidity
//             const temp7 = data.forecast.forecastday[0].hour[7].temp_c
//             const humidity8 = data.forecast.forecastday[0].hour[8].humidity
//             const temp8 = data.forecast.forecastday[0].hour[8].temp_c
//             const humidity9 = data.forecast.forecastday[0].hour[9].humidity
//             const temp9 = data.forecast.forecastday[0].hour[9].temp_c
//             const humidity10 = data.forecast.forecastday[0].hour[10].humidity
//             const temp10 = data.forecast.forecastday[0].hour[10].temp_c
//             const humidity11 = data.forecast.forecastday[0].hour[11].humidity
//             const temp11 = data.forecast.forecastday[0].hour[11].temp_c
//             const humidity12 = data.forecast.forecastday[0].hour[12].humidity
//             const temp12 = data.forecast.forecastday[0].hour[12].temp_c
//             const humidity13 = data.forecast.forecastday[0].hour[13].humidity
//             const temp13 = data.forecast.forecastday[0].hour[13].temp_c
//             const humidity14 = data.forecast.forecastday[0].hour[14].humidity
//             const temp14 = data.forecast.forecastday[0].hour[14].temp_c
//             const humidity15 = data.forecast.forecastday[0].hour[15].humidity
//             const temp15 = data.forecast.forecastday[0].hour[15].temp_c
//             const humidity16 = data.forecast.forecastday[0].hour[16].humidity
//             const temp16 = data.forecast.forecastday[0].hour[16].temp_c
//             const humidity17 = data.forecast.forecastday[0].hour[17].humidity
//             const temp17 = data.forecast.forecastday[0].hour[17].temp_c
//             const humidity18 = data.forecast.forecastday[0].hour[18].humidity
//             const temp18 = data.forecast.forecastday[0].hour[18].temp_c
//             const humidity19 = data.forecast.forecastday[0].hour[19].humidity
//             const temp19 = data.forecast.forecastday[0].hour[19].temp_c
//             const humidity20 = data.forecast.forecastday[0].hour[20].humidity
//             const temp20 = data.forecast.forecastday[0].hour[20].temp_c
//             const humidity21 = data.forecast.forecastday[0].hour[21].humidity
//             const temp21 = data.forecast.forecastday[0].hour[21].temp_c
//             const humidity22 = data.forecast.forecastday[0].hour[22].humidity
//             const temp22= data.forecast.forecastday[0].hour[22].temp_c
//             const humidity23 = data.forecast.forecastday[0].hour[23].humidity
//             const temp23 = data.forecast.forecastday[0].hour[23].temp_c

//             const countryData = data.location.country
//             const cityData = data.location.name

//             const maxTemp = data.forecast.forecastday[0].day.maxtemp_c
// /******************************************************************************************************************************************************************/

// /************************Use of the DOM events to effect the data starts here**********************************************************/
//             temperature.innerHTML = temp;
//             currentCondition.innerHTML = condition;
//             time.innerHTML = localtime;
//             sunrise.innerHTML = sunRise;
//             sunset.innerHTML = sunSet;
//             country.innerHTML = countryData;
//             city.innerHTML = cityData;
//             chanceOfRain.innerHTML =  valueOfRain;
//             chanceOfNoRain.innerHTML = valueOfNoRain;
//             chanceOfSnow.innerHTML = valueOfSnow;
//             chanceOfNoSnow.innerHTML = valueOfNoSnow;

// /***************************************************Functionality of the humidity for each hour of the day******************************************/
//             Humidity0.innerHTML = humidity0; 
//             Humidity1.innerHTML = humidity1;
//             Humidity2.innerHTML = humidity2;
//             Humidity3.innerHTML = humidity3;
//             Humidity4.innerHTML = humidity4;
//             Humidity5.innerHTML = humidity5;
//             Humidity6.innerHTML = humidity6;
//             Humidity7.innerHTML = humidity7;
//             Humidity8.innerHTML = humidity8;
//             Humidity9.innerHTML = humidity9;
//             Humidity10.innerHTML = humidity10;
//             Humidity11.innerHTML = humidity11;
//             Humidity12.innerHTML = humidity12;
//             Humidity13.innerHTML = humidity13;
//             Humidity14.innerHTML = humidity14;
//             Humidity15.innerHTML = humidity15;
//             Humidity16.innerHTML = humidity16;
//             Humidity17.innerHTML = humidity17;
//             Humidity18.innerHTML = humidity18;
//             Humidity19.innerHTML = humidity19;
//             Humidity20.innerHTML = humidity20;
//             Humidity21.innerHTML = humidity21;
//             Humidity22.innerHTML = humidity22;
//             Humidity23.innerHTML = humidity23;
// /****************************************************************************************************************************************************************** */

// /**************************************************This is the functionality for changing the value of the temperature for the hours of the day********************* */
//             for (var i = 0; i < hightemperature.length; i++) {
//                 hightemperature[i].innerHTML = maxTemp;
//                 hightemperature[i].value = maxTemp;
//             }

//             for (var i = 0; i < lowtemperature0.length; i++) {
//                 lowtemperature0[i].innerHTML = temp0;
//                 lowtemperature0[i].value = temp0;
//             }
//             for (var i = 0; i < lowtemperature1.length; i++) {
//                 lowtemperature1[i].innerHTML = temp1;
//                 lowtemperature1[i].value = temp1;
//             }
//             for (var i = 0; i < lowtemperature2.length; i++) {
//                 lowtemperature2[i].innerHTML = temp2;
//                 lowtemperature2[i].value = temp2;
//             }
//             for (var i = 0; i < lowtemperature3.length; i++) {
//                 lowtemperature3[i].innerHTML = temp3;
//                 lowtemperature3[i].value = temp3;
//             }
//             for (var i = 0; i < lowtemperature4.length; i++) {
//                 lowtemperature4[i].innerHTML = temp4;
//                 lowtemperature4[i].value = temp4;
//             }
//             for (var i = 0; i < lowtemperature5.length; i++) {
//                 lowtemperature5[i].innerHTML = temp5;
//                 lowtemperature5[i].value = temp5;
//             }
//             for (var i = 0; i < lowtemperature6.length; i++) {
//                 lowtemperature6[i].innerHTML = temp6;
//                 lowtemperature6[i].value = temp6;
//             }
//             for (var i = 0; i < lowtemperature7.length; i++) {
//                 lowtemperature7[i].innerHTML = temp7;
//                 lowtemperature7[i].value = temp7;
//             }
//             for (var i = 0; i < lowtemperature8.length; i++) {
//                 lowtemperature8[i].innerHTML = temp8;
//                 lowtemperature8[i].value = temp8;
//             }
//             for (var i = 0; i < lowtemperature9.length; i++) {
//                 lowtemperature9[i].innerHTML = temp9;
//                 lowtemperature9[i].value = temp9;
//             }
//             for (var i = 0; i < lowtemperature10.length; i++) {
//                 lowtemperature10[i].innerHTML = temp10;
//                 lowtemperature10[i].value = temp10;
//             }
//             for (var i = 0; i < lowtemperature11.length; i++) {
//                 lowtemperature11[i].innerHTML = temp11;
//                 lowtemperature11[i].value = temp11;
//             }
//             for (var i = 0; i < lowtemperature12.length; i++) {
//                 lowtemperature12[i].innerHTML = temp12;
//                 lowtemperature12[i].value = temp12;
//             }
//             for (var i = 0; i < lowtemperature13.length; i++) {
//                 lowtemperature13[i].innerHTML = temp13;
//                 lowtemperature13[i].value = temp13;
//             }
//             for (var i = 0; i < lowtemperature14.length; i++) {
//                 lowtemperature14[i].innerHTML = temp14;
//                 lowtemperature14[i].value = temp14;
//             }
//             for (var i = 0; i < lowtemperature15.length; i++) {
//                 lowtemperature15[i].innerHTML = temp15;
//                 lowtemperature15[i].value = temp15;
//             }
//             for (var i = 0; i < lowtemperature16.length; i++) {
//                 lowtemperature16[i].innerHTML = temp16;
//                 lowtemperature16[i].value = temp16;
//             }
//             for (var i = 0; i < lowtemperature17.length; i++) {
//                 lowtemperature17[i].innerHTML = temp17;
//                 lowtemperature17[i].value = temp17;
//             }
//             for (var i = 0; i < lowtemperature18.length; i++) {
//                 lowtemperature18[i].innerHTML = temp18;
//                 lowtemperature18[i].value = temp18;
//             }
//             for (var i = 0; i < lowtemperature19.length; i++) {
//                 lowtemperature19[i].innerHTML = temp19;
//                 lowtemperature19[i].value = temp19;
//             }
//             for (var i = 0; i < lowtemperature20.length; i++) {
//                 lowtemperature20[i].innerHTML = temp20;
//                 lowtemperature20[i].value = temp20;
//             }
//             for (var i = 0; i < lowtemperature21.length; i++) {
//                 lowtemperature21[i].innerHTML = temp21;
//                 lowtemperature21[i].value = temp21;
//             }
//             for (var i = 0; i < lowtemperature22.length; i++) {
//                 lowtemperature22[i].innerHTML = temp22;
//                 lowtemperature22[i].value = temp22;
//             }
//             for (var i = 0; i < lowtemperature23.length; i++) {
//                 lowtemperature23[i].innerHTML = temp23;
//                 lowtemperature23[i].value = temp23;
//             }
// /***********************************************************************************************************************************************************/

// /********************************************This section is for the functionality of the emoji icons******************************************************/
//             if (temp >=0 && temp <= 10){
//                 emoji.src = "emojis/icons8-downcast-face-with-sweat-96.png"; /*near freezing*/
//             } else if (temp > 10 && temp <= 20){
//                 emoji.src = "emojis/icons8-slightly-smiling-face-96.png"; /*cool*/
//             } else if (temp >= 30){
//                 emoji.src = "emojis/icons8-hot-face-96.png"; /*hot*/
//             } else if (temp > 20 && temp < 30){
//                 emoji.src = "emojis/icons8-smiling-face-96.png"; /*Normal*/
//             } else if (temp < 0){
//                 emoji.src = "emojis/icons8-cold-face-96.png"; /*freezing*/
//             }
// /**********************************************************************************************************************************************************/

// /**********************************************This section is for the functionality of the weather icon***************************************************/
//             if (condition == "Partly cloudy"  && isDay == 1){   
//                 weathericon.src = "weather icons/icons8-partly-cloudy-day-96.png";
//                 image.src = "weather/partly cloudy.jpg";
//             } else if (condition == "Partly cloudy"  && isDay == 0){
//                 weathericon.src = "weather icons/icons8-night-96.png";
//                 image.src = "weather/partly cloudy night.jpg";
//             } else if (condition == "Cloudy"){
//                 weathericon.src = "weather icons/icons8-cloudy-128.png";
//                 image.src = "weather/cloudy.jpg";
//             } else if (condition == "Sunny"){
//                 weathericon.src = "weather icons/icons8-sun-64.png";
//                 image.src = "weather/sunny.jpg";
//             } else if (condition == "Clear"){
//                 weathericon.src = "weather icons/icons8-moon-96.png";
//                 image.src = "weather/clear night.jpg";
//             } else if (condition == "Overcast"){
//                 weathericon.src = "weather icons/icons8-overcast-96.png";
//                 image.src = "weather/overcast.jpg";
//             } else if (condition == "Mist"){
//                 weathericon.src = "weather icons/icons8-haze-64.png";
//                 image.src = "weather/mist.jpg";
//             } else if (condition == "Heavy freezing drizzle" || condition == "Patchy light drizzle" || condition == "Light drizzle" || condition == "Freezing drizzle" || condition == "Patchy freezing drizzle possible" || condition == "Heavy freezing drizzle"){
//                 weathericon.src = "weather icons/icons8-drizzle-64.png";
//                 image.src = "weather/drizzle.jpg";
//             } else if (condition == "Patchy rain possible" || condition == "Patchy light rain" || condition == "Light rain" || condition == "Light freezing rain" || condition == "Light rain shower"){
//                 weathericon.src = "weather icons/icons8-light-rain-96.png";
//                 image.src = "weather/rainstorm.jpg";
//             } else if (condition == "Patchy snow possible" || condition == "Patchy light snow" || condition == "Light snow" || condition == "Light snow showers"){
//                 weathericon.src = "weather icons/icons8-light-snow-96.png";
//                 image.src = "weather/snow.jpg";
//             } else if (condition == "Patchy sleet possible" || condition == "Light sleet" || condition == "Moderate or heavy sleet" || condition == "Light sleet showers" || condition == "Moderate or heavy sleet showers"){
//                 weathericon.src = "weather icons/icons8-sleet-64.png";
//                 image.src = "weather/snow.jpg";
//             } else if (condition == "Thundery outbreaks possible" || condition == "Moderate or heavy snow with thunder" || condition == "Moderate or heavy rain with thunder"  || condition == "Patchy light snow with thunder" || condition == "Patchy light rain with thunder" && isDay == 1){
//                 weathericon.src = "weather icons/icons8-stormy-66.png";
//                 image.src = "weather/thunderstorm.jpg";
//             } else if (condition == "Thundery outbreaks possible" || condition == "Moderate or heavy snow with thunder" || condition == "Moderate or heavy rain with thunder"  || condition == "Patchy light snow with thunder" || condition == "Patchy light rain with thunder" && isDay == 0){
//                 weathericon.src = "weather icons/icons8-stormy-night-96.png";
//                 image.src = "weather/thunderstorm.jpg";
//             } else if (condition == "Blizzard"){
//                 weathericon.src = "weather icons/icons8-blizzard-64.png";
//                 image.src = "weather/blizzard.jpg";
//             } else if (condition == "Blowing snow" || condition == "Patchy moderate snow" || condition == "Moderate snow" && isDay == 1){
//                 weathericon.src = "weather icons/icons8-snow-96.png";
//                 image.src = "weather/snow.jpg";
//             } else if (condition == "Blowing snow" || condition == "Patchy moderate snow" || condition == "Moderate snow" && isDay == 0){
//                 weathericon.src = "weather icons/icons8-snowy-night-100png";
//                 image.src = "weather/snow.jpg";
//             } else if (condition == "Patchy heavy snow" || condition == "Heavy snow" || condition == "Moderate or heavy snow showers" || condition == "Ice pellets" || condition == "Light showers of ice pellets" || condition == "Moderate or heavy showers of ice pellets"){
//                 weathericon.src = "weather icons/icons8-snow-storm-96.png";
//                 image.src = "weather/snow.jpg";
//             } else if (condition == "Moderate or heavy rain shower" || condition == "Moderate rain at times" || condition == "Moderate rain" && isDay == 1){
//                 weathericon.src = "weather icons/icons8-rain-cloud-96.png";
//                 image.src = "weather/rainstorm.jpg";
//             } else if (condition == "Moderate or heavy rain shower" || condition == "Moderate rain at times" || condition == "Moderate rain" && isDay == 0){
//                 weathericon.src = "weather icons/icons8-rainy-night-96.png";
//                 image.src = "weather/rainstorm.jpg";
//             } else if (condition == "Torrential rain shower" || condition == "Heavy rain at times" || condition == "Heavy rain" || condition == "Moderate rain" || condition == "Moderate or heavy freezing rain"){
//                 weathericon.src = "weather icons/icons8-heavy-rain-96.png";
//                 image.src = "weather/rainstorm.jpg";
//             } else if (condition == "Fog" || condition == "Freezing fog"){
//                 weathericon.src = "weather icons/icons8-fog-64.png";
//                 image.src = "weather/fog.jpg";
//             }
// /*********************************************************************************************************************************************************** */
//         })
//         .catch(err => alert('Error:', err))
        
// )

const click = () => (
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=5279c1bb31344eda98d224055221002&q=${search.value}`)
        .then(response => response.json())
        .then(data => console.log("Success: ", data))
        .catch(err => alert('Error:', err))
        
)

search2.addEventListener('click', click);


