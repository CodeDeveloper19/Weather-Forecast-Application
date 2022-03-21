var input = document.getElementById("input");
var search = document.getElementById("search");
var search2 = document.getElementById("search2");
var searchIcon = document.getElementById("searchicon");
var mooninformation = document.getElementById("mooninformation");

var moonmain2 = document.getElementById("moonmain2");
var moon1 = document.getElementById("moon1");

const animation = () =>{
    if (!search.style.display){
        input.style.borderRadius = "40px";
        input.style.width = "150px";
        search2.style.left = "32%";
        search.style.display = "block";
        moonEffect();
    } else if (search.style.display){
        input.style.width = "30px";
        search2.style.left = "10%";
        search.style.display = "";
        secondMoonEffect();
    }

}

const moonEffect = () => {
    moonmain2.style.display = "none";
    mooninformation.style.left = "280px";
}

const secondMoonEffect = () => {
    setTimeout (() => {moonmain2.style.display = "flex"}, 500);
    mooninformation.style.left = "23%";
}

searchIcon.addEventListener('click', animation)
moon1.addEventListener('click', animation)