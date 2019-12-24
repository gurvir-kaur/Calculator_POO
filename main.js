
var appCal;
window.onload = function () {
	
    console.log(document.readyState);

    if (document.readyState === "complete"){
        appCal = new AppCalculator(document);
    }
};


document.onkeyup = function (event) {
	console.log("Wooohoo", event.key);

};
