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

searchIcon.addEventListener('click', () => {
    let jmediaquery = window.matchMedia( "(max-width: 1100px)" ) // TO prevent the searchicon from increasing in width at mobile width
        if (jmediaquery.matches) {
            return null
        }
        else {
            animation();
        }
})
moon1.addEventListener('click', () => {
    let jmediaquery = window.matchMedia( "(max-width: 1100px)" )
    if (jmediaquery.matches) {
        return null
    }
    else {
        animation();
    }
})