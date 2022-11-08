window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

function myClickHandler(){
    alert("wuju");
}

document.getElementById("theGreen").addEventListener('click',myClickHandler);
//the listener function here
