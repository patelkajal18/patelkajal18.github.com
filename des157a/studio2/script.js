(function () {
    'use strict';
    console.log("reading js");

    /* gets elements for "pages" 1 & 2 of website */
    const theImg = document.querySelector('#stars');
    const telescopeBtn = document.querySelector('#telescope');
    const overlay = document.querySelector('#overlay');
    const page1 = document.querySelector('#page1');
    const page2 = document.querySelector('#page2');
    let planet1 = document.querySelector('#planet1');
    let planet2 = document.querySelector('#planet2');
    let planet3 = document.querySelector('#planet3');
    let planet4 = document.querySelector('#planet4');
    let planet5 = document.querySelector('#planet5');
    let zoom = document.querySelector('#zoom');

    /* switches to next "page" of website */
    telescopeBtn.addEventListener('click', function(){
        page1.style.display = "none";
        page2.style.display = "inline";
        overlay.style.display = "none";
    });

    /* gets button elements */
    let btn1 = document.querySelector('#btnE');
    let btn2 = document.querySelector('#btnD');
    let btn3 = document.querySelector('#btnC');
    let btn4 = document.querySelector('#btnB');
    let btn5 = document.querySelector('#btnA');

    /* (1) gradient button event listeners change color based on which one is clicked 
    *  (2) zoom into stars based on which zoom button pressed
    *  (3) animation of "planets" coming into view starts based on which button pressed
    */
    btn1.addEventListener('click', function(){
        if (btn1.className == "notSelected") {
            theImg.style.transform = "scale(1.5)";
            btn1.style.backgroundColor = "#75E0F4";
            btn1.className = "sel";
            planet1.style.display = "inline";
            planet1.style.animation = "grow 2s";
            perspective(1);
        } else {
            theImg.style.transform = "scale(1)";
            planet1.style.display = "none";
            perspective2(1);
        }     
        planet2.style.display = "none";
        planet3.style.display = "none";
        planet4.style.display = "none";
        planet5.style.display = "none";
    });
    btn2.addEventListener('click', function(){
        if (btn2.className == "notSelected") {
            theImg.style.transform = "scale(2)";
            btn2.style.backgroundColor = "#75CDF4";
            btn2.className = "sel";
            planet2.style.display = "inline";
            planet2.style.animation = "grow 2s";
            planet1.style.display = "none";
            perspective(2);
        } else {
            theImg.style.transform = "scale(1.5)";
            planet2.style.display = "none";
            planet1.style.display = "inline";
            perspective2(2);
        }  
        planet3.style.display = "none";
        planet4.style.display = "none";
        planet5.style.display = "none";
    });
    btn3.addEventListener('click', function(){
        if (btn3.className == "notSelected") {
            theImg.style.transform = "scale(2.5)";
            btn3.style.backgroundColor = "#75B4F4";
            btn3.className = "sel";
            planet3.style.display = "inline";
            planet3.style.animation = "grow 2s";
            planet2.style.display = "none";
            perspective(3);
        } else {
            theImg.style.transform = "scale(2)";
            planet2.style.display = "inline";
            planet3.style.display = "none";
            perspective2(3);
        }
        planet1.style.display = "none";
        planet4.style.display = "none";
        planet5.style.display = "none";
    });
    btn4.addEventListener('click', function(){
        if (btn4.className == "notSelected") {
            theImg.style.transform = "scale(3)";
            btn4.style.backgroundColor = "#75A1F4";
            btn4.className = "sel";
            planet4.style.display = "inline";
            planet4.style.animation = "grow 2s";
            planet3.style.display = "none";
            perspective(4);
        } else {
            theImg.style.transform = "scale(2.5)";
            planet3.style.display = "inline";
            planet4.style.display = "none";
            perspective2(4);
        }
        planet2.style.display = "none";
        planet1.style.display = "none";
        planet5.style.display = "none";
    });
    btn5.addEventListener('click', function(){
        if (btn5.className == "notSelected") {
            theImg.style.transform = "scale(3.5)";
            btn5.style.backgroundColor = "#7589F4";
            btn5.className = "sel";
            planet4.style.display = "none";
            planet5.style.display = "inline";
            planet5.style.animation = "grow 2s";
            perspective(5);
        } else {
            theImg.style.transform = "scale(3)";
            planet4.style.display = "inline";
            planet5.style.display = "none";
            perspective2(5);
        }
        planet1.style.display = "none";
        planet2.style.display = "none";
        planet3.style.display = "none";
    });

    /* changes button color from default to specific for upward direction */
    function perspective(whichBtn) {
        switch (whichBtn) {
            case 1: 
                btn1.style.backgroundColor = "#75E0F4";
                btn2.style.backgroundColor = "#141414"; 
                btn3.style.backgroundColor = "#141414";
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";
                zoom.innerHTML = "ZOOM 1X";
                break;
            case 2: 
                btn1.style.backgroundColor = "#75E0F4";
                btn2.style.backgroundColor = "#75CDF4"; 
                btn3.style.backgroundColor = "#141414"; 
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";
                zoom.innerHTML = "ZOOM 2X";  
                break;
            case 3: 
                btn1.style.backgroundColor = "#75E0F4";
                btn2.style.backgroundColor = "#75CDF4"; 
                btn3.style.backgroundColor = "#75B4F4"; 
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";
                zoom.innerHTML = "ZOOM 3X";   
                break;
            case 4: 
                btn1.style.backgroundColor = "#75E0F4";
                btn2.style.backgroundColor = "#75CDF4"; 
                btn3.style.backgroundColor = "#75B4F4"; 
                btn4.style.backgroundColor = "#75A1F4"; 
                btn5.style.backgroundColor = "#141414";
                zoom.innerHTML = "ZOOM 4X"; 
                break;
            case 5: 
                btn1.style.backgroundColor = "#75E0F4";
                btn2.style.backgroundColor = "#75CDF4"; 
                btn3.style.backgroundColor = "#75B4F4"; 
                btn4.style.backgroundColor = "#75A1F4"; 
                btn5.style.backgroundColor = "#7589F4";
                zoom.innerHTML = "ZOOM 5X"; 
                break;
        }
    }

    /* changes button color from specific to default for downward direction */
    function perspective2(whichBtn) {
        switch (whichBtn) {
            case 1: 
                btn1.className = "notSelected";
                btn2.className = "notSelected";
                btn3.className = "notSelected";
                btn4.className = "notSelected";
                btn5.className = "notSelected";
                btn1.style.backgroundColor = "#141414";
                btn2.style.backgroundColor = "#141414"; 
                btn3.style.backgroundColor = "#141414";
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";
                zoom.innerHTML = "ZOOM 0X";
                break;
            case 2: 
                btn2.className = "notSelected";
                btn3.className = "notSelected";
                btn4.className = "notSelected";
                btn5.className = "notSelected";
                btn2.style.backgroundColor = "#141414"; 
                btn3.style.backgroundColor = "#141414";
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";
                zoom.innerHTML = "ZOOM 1X";
                break;
            case 3: 
                btn3.className = "notSelected";
                btn4.className = "notSelected";
                btn5.className = "notSelected";
                btn3.style.backgroundColor = "#141414";
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414"; 
                zoom.innerHTML = "ZOOM 2X"; 
                break;
            case 4: 
                btn4.className = "notSelected";
                btn5.className = "notSelected";
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";
                zoom.innerHTML = "ZOOM 3X";
                break;
            case 5: 
                btn5.className = "notSelected";
                btn5.style.backgroundColor = "#141414";
                zoom.innerHTML = "ZOOM 4X";
                break;
        }
    }

    /* elements for overlay */
    let overlayCon = document.querySelector('#overlayContainer');
    let overlayImg = document.querySelector('#figure1');
    let overlayImgCap = document.querySelector('figcaption');
    let overlayDesc1 = document.querySelector('#desc1');
    let exitOverlay = document.querySelector('#exitOverlay');
    let nextImg = document.querySelector("#next");
    let prevImg = document.querySelector("#prev");
    let overlayTopic;

    /* removes the overlay when clicked */
    exitOverlay.addEventListener('click', function(){
        overlay.style.display = "none";
        overlayContainer.style.display = "none";
    });

    /* fills in overlay based on each "planet" when clicked */
    planet1.addEventListener('click', function() {
        overlayFill(1);
        overlayTopic = 1;
    });
    planet2.addEventListener('click', function() {
        overlayFill(2);
        overlayTopic = 2;
    });
    planet3.addEventListener('click', function() {
        overlayFill(3);
        overlayTopic = 3;
    });
    planet4.addEventListener('click', function() {
        overlayFill(4);
        overlayTopic = 4;
    });
    planet5.addEventListener('click', function() {
        overlayFill(5);
        overlayTopic = 5;
    });

    /* gets next image for overlay slideshow */
    nextImg.addEventListener('click', function(){
        switch(overlayTopic) {
            case 1:
                overlayImg.style.backgroundSize = "200% 200%";
                overlayImg.style.backgroundPosition = "-210px -210px";
                break;
            case 2:
                overlayImg.style.backgroundSize = "200% 200%";
                overlayImg.style.backgroundPosition = "-230px -230px";
                break;
            case 3:
                overlayImg.style.backgroundSize = "200% 200%";
                overlayImg.style.backgroundPosition = "-200px -200px";
                break;
            case 4:
                overlayImg.style.backgroundSize = "200% 200%";
                overlayImg.style.backgroundPosition = "-390px -250px";
                break;
            case 5:
                overlayImg.style.backgroundSize = "300% 300%";
                overlayImg.style.backgroundPosition = "-500px -490px";
                break;
        }
    });

    /* gets previous image for overlay slideshow */
    prevImg.addEventListener('click', function(){
        overlayImg.style.backgroundSize = "100% 100%";
        overlayImg.style.backgroundPosition = "0px";
    });

    /* fills in elements of overlay based on specific planet information */
    function overlayFill(whichPlnt) {
        switch(whichPlnt) {
            case 1:
                overlayImg.style.backgroundImage = "url('./images/bowl.jpg')";
                overlayImgCap.innerHTML = "Bowl from trip to Chichen Itza.";
                overlayDesc1.innerHTML = "> Memento from 2018 Mexico trip. <br /> > This bowl reminds me of the beauty of Mayan artwork.";
                break;
            case 2:
                overlayImg.style.backgroundImage = "url('./images/station.jpg')";
                overlayImgCap.innerHTML = "Coin from Kennedy Space Station.";
                overlayDesc1.innerHTML = "> Memento from 2012 Florida trip. <br /> > I loved seeing the space shuttles and this marked the beginning of my interest in space.";
                break;
            case 3:
                overlayImg.style.backgroundImage = "url('./images/coins.jpg')";
                overlayImgCap.innerHTML = "Unique quarters.";
                overlayDesc1.innerHTML = "> Memento from collecting quarters with my sister. <br /> > It reminds me of exciting childhood memories with her.";
                break;
            case 4:
                overlayImg.style.backgroundImage = "url('./images/turtle.jpeg')";
                overlayImgCap.innerHTML = "Turtle from the Bahamas.";
                overlayDesc1.innerHTML = "> Memento from 2016 Bahamas trip. <br /> > One of my favorite vacations because we stayed in Atlantis and I got to go on many waterslides.";
                break;
            case 5:
                overlayImg.style.backgroundImage = "url('./images/ring.jpeg')";
                overlayImgCap.innerHTML = "Whale fin ring from Monterey.";
                overlayDesc1.innerHTML = "> Memento from 2019 Monterey trip. <br /> > It reminds me of all the adventures I experienced and wildlife I saw."
                break;
        }
        overlay.style.display = "block";
        overlayCon.style.display = "flex";
        overlayImg.style.backgroundSize = "100% 100%";
        overlayImg.style.backgroundPosition = "0px";
    }
    
})();