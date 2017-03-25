window.onload = function(){
    console.log('Loaded!');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.status == 200) {
           document.getElementById("counter").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "/counter", true);
    xhttp.send();   
    
    var container = document.getElementsByClassName("container");
    container.onclick = function(){
        document.getElementById("removable").innerHTML = "";
    };
};