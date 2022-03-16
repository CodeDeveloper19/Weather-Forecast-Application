var input = document.getElementById("input");
var search = document.getElementById("search");
var search2 = document.getElementById("search2");

const animation = () =>{
    if (!search.style.display){
        input.style.borderRadius = "40px";
        input.style.width = "200px";
        search2.style.left = "42%";
        search.style.display = "block";
    } else if (search.style.display){
        input.style.width = "30px";
        search2.style.left = "10%";
        search.style.display = "";
    }

}

searchIcon.addEventListener('click', animation)