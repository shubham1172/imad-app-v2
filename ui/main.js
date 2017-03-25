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
    
	function displayUI(){
		$(".container").css("display", "block");
		$(".progress-bar").css("display", "none");
	}
	
    var progress = 0;
    //updates progress bar
    function updateProgress(){
        $('.progress-bar').width(progress+'%').attr('aria-valuenow', progress).html(progress+"%");
		//console.log("test");
        progress+=1;
		if(progress==101){
			clearInterval(ref);
			displayUI();
		}
    }
	
    var ref = setInterval(updateProgress, 50);
};
