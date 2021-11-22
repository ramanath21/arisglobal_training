const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is: " + element.innerHTML;

const x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;