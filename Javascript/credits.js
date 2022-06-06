var text = document.getElementById("text");
var credits = document.getElementById("credits2");
var close = document.getElementById("closecontainer");

text.addEventListener('click', () => credits.style.display = "flex")

close.addEventListener('click', () => credits.style.display = "none")