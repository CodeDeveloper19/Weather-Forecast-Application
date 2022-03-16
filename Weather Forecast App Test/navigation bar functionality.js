const day = document.getElementById("option22");
const week = document.getElementById("option2");

const day1 = document.getElementById("day");
const triDaily1 = document.getElementById("Tridaily");

function clicking (){
  if (day1.className == "active"){
    day.style.display = "none";   
    week.style.display = "flex";
    day1.className = "";
    triDaily1.className = "active";
  } else if (triDaily1.className == "active"){
    day.style.display = "flex";   
    week.style.display = "none";
    day1.className = "active";
    triDaily1.className = "";
  }
}
