/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


/* MICRO INTERACTIE LIKE BUTTON */

console.log("hoi");

var LampAan = "bulb";
var noBorderButton = document.querySelector("#heart_off");




function removeBorder(){
    noBorderButton.classList.toggle("noBorder");
    console.log(noBorderButton);    
}

function showResult() {
    if (LampAan === 'bulboff') {
        LampAan = "bulb";
        //imgSource = '../.jpg';
        noBorderButton.src = "./images/heart_27.png"
        console.log("Het lampje is  uit  ");
    } else if (LampAan === 'bulb') {
        LampAan = "bulboff";
        //imgSource = '../Hartje off';
        noBorderButton.src = "./images/heart_28.png"
        console.log("Het lampje is aan");
    }
}


if (noBorderButton){
    noBorderButton.addEventListener('click', removeBorder, false);
    noBorderButton.addEventListener('click', showResult, false);
}




/*  SLIDER */

// bron: w3schools // 

var slider = document.querySelector("#myRange");
var output = document.querySelector("#demo");
if (slider && output){
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
    }
}


// Download knop//

var download = document.querySelector("#download_off");


// als download aanwezig is op de pagina, dan gaat hij verder met code lezen.// Als er op wordt geklikt voert hij de functie uit //
if (download) {
    download.addEventListener( "click", function(e){
        swapImage(e.target);
    });
}


function swapImage(element) {
    console.log(element);
    var href;
    if (element.src.indexOf("download_knop.png") > -1){
        href = element.src.split("download_knop.png").join("vinkje.png");        
    }
    else if (element.src.indexOf("vinkje.png") > -1){
        href = element.src.split("vinkje.png").join("download_knop.png");   
    }
    element.src = href;

}
