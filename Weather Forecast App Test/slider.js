var fullSection = document.getElementById("fullsection");
var switcher1 = document.getElementById("switcher1");
var switcher2 = document.getElementById("switcher2");
var switcher3 = document.getElementById("switcher3");

var listOfSwitches = [switcher1, switcher2, switcher3];

function switch1() {
    if (switcher2.style.backgroundColor == "rgba(255, 255, 255, 0.5)"){
        fullSection.style.animationName = "animation1";
    } else if (switcher3.style.backgroundColor == "rgba(255, 255, 255, 0.5)"){
        fullSection.style.animationName = "animation2";
    }
    for (var i = 0; i < 3; i++){
        listOfSwitches[i].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }
    switcher1.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
};


function switch2() {
    if (switcher1.style.backgroundColor == "rgba(255, 255, 255, 0.5)"){
        fullSection.style.animationName = "animation3";
    } else if (switcher3.style.backgroundColor == "rgba(255, 255, 255, 0.5)"){
        fullSection.style.animationName = "animation4";
    }
    for (var i = 0; i < 3; i++){
        listOfSwitches[i].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }
    switcher2.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

};

function switch3() {
    if (switcher1.style.backgroundColor == "rgba(255, 255, 255, 0.5)"){
        fullSection.style.animationName = "animation5";
    } else if (switcher2.style.backgroundColor == "rgba(255, 255, 255, 0.5)"){
        fullSection.style.animationName = "animation6";
    }
    fullSection.style.left = "-1400px";
    for (var i = 0; i < 3; i++){
        listOfSwitches[i].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }
    switcher3.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
};


function switcher(){
    let jmediaquery = window.matchMedia( "(max-width: 1100px)" ) // TO prevent the searchicon from increasing in width at mobile width
    if (jmediaquery.matches) {
        return null
    }
    else {
        setTimeout(switch1, 5000);
        setTimeout(switch2, 10000);
        setTimeout(switch3, 15000)
    }

}


window.onload = function automaticSwitcher(){
    switcher1.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    switcher();
    setInterval(switcher, 15000);
}

