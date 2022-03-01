const day = document.getElementById("option22");
const week = document.getElementById("option2");
const month = document.getElementById("option222");
const threemonths = document.getElementById("option2222");
const sixmonths = document.getElementById("option22222");
const year = document.getElementById("option222222");

const day1 = document.getElementById("day");
const week1 = document.getElementById("week");
const month1 = document.getElementById("month");
const threemonths1 = document.getElementById("threemonths");
const sixmonths1 = document.getElementById("sixmonths");
const year1 = document.getElementById("year");

function clicking1 (){
  day.style.display = "flex";
  week.style.display = "none";
  month.style.display = "none";
  threemonths.style.display = "none";
  sixmonths.style.display = "none";
  year.style.display = "none";

  day1.className = "active";
  week1.className = "";
  month1.className = "";
  threemonths1.className = "";
  sixmonths1.className = "";
  year1.className = "";
}

function clicking2 (){
  day.style.display = "none";
  week.style.display = "flex";
  month.style.display = "none";
  threemonths.style.display = "none";
  sixmonths.style.display = "none";
  year.style.display = "none";

  day1.className = "";
  week1.className = "active";
  month1.className = "";
  threemonths1.className = "";
  sixmonths1.className = "";
  year1.className = "";
}

function clicking3 (){
  day.style.display = "none";
  week.style.display = "none";
  month.style.display = "flex";
  threemonths.style.display = "none";
  sixmonths.style.display = "none";
  year.style.display = "none";

  day1.className = "";
  week1.className = "";
  month1.className = "active";
  threemonths1.className = "";
  sixmonths1.className = "";
  year1.className = "";
}

function clicking4 (){
  day.style.display = "none";
  week.style.display = "none";
  month.style.display = "none";
  threemonths.style.display = "flex";
  sixmonths.style.display = "none";
  year.style.display = "none";

  day1.className = "";
  week1.className = "";
  month1.className = "";
  threemonths1.className = "active";
  sixmonths1.className = "";
  year1.className = "";
}

function clicking5 (){
  day.style.display = "none";
  week.style.display = "none";
  month.style.display = "none";
  threemonths.style.display = "none";
  sixmonths.style.display = "flex";
  year.style.display = "none";

  day1.className = "";
  week1.className = "";
  month1.className = "";
  threemonths1.className = "";
  sixmonths1.className = "active";
  year1.className = "";
}

function clicking6 (){
  day.style.display = "none";
  week.style.display = "none";
  month.style.display = "none";
  threemonths.style.display = "none";
  sixmonths.style.display = "none";
  year.style.display = "flex";

  day1.className = "";
  week1.className = "";
  month1.className = "";
  threemonths1.className = "";
  sixmonths1.className = "";
  year1.className = "active";
}