//Basic JavaScript Function
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello"
    document.getElementById("jQuery").style.display = "block"
    alert("Goodbye Content")
}

//jQuery
$(document).ready(function() {
    document.getElementById("jQuery").style.display = "none"
});