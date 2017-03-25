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
    
    window.onclick = function(){
        document.getElementById("removable").innerHTML = "";
    };
    
    var progress = 0;
    //updates progress bar
    function updateProgress(){
        $('.progress-bar').width(progress+'%').attr('aria-valuenow', progress).html(progress+"%");
        progress+=5;
    }
    
    for(var i=0;i<20;i++){
        updateProgress();
        delay(250);
    }
};