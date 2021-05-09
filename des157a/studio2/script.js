(function () {
    'use strict';

    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('#stars');
    const telescopeBtn = document.querySelector('#telescope');
    const page1 = document.querySelector('#page1');
    const page2 = document.querySelector('#page2');
    let planet1 = document.querySelector('#planet1');
    let planet2 = document.querySelector('#planet2');
    let planet3 = document.querySelector('#planet3');
    const overlay = document.querySelector('#overlay');

    telescopeBtn.addEventListener('click', function(){
        page1.style.display = "none";
        page2.style.display = "inline";
        overlay.style.display = "none";
    });

    let btn1 = document.querySelector('#btnE');
    let btn2 = document.querySelector('#btnD');
    let btn3 = document.querySelector('#btnC');
    let btn4 = document.querySelector('#btnB');
    let btn5 = document.querySelector('#btnA');

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
            perspective2(3);
        }
        planet1.style.display = "none";
    });
    btn4.addEventListener('click', function(){
        if (btn4.className == "notSelected") {
            theImg.style.transform = "scale(3)";
            btn4.style.backgroundColor = "#75A1F4";
            btn4.className = "sel";
            perspective(4);
        } else {
            theImg.style.transform = "scale(2.5)";
            perspective2(4);
        }
        planet3.style.display = "none";
    });
    btn5.addEventListener('click', function(){
        if (btn5.className == "notSelected") {
            theImg.style.transform = "scale(3.5)";
            btn5.style.backgroundColor = "#7589F4";
            btn5.className = "sel";
            perspective(5);
        } else {
            theImg.style.transform = "scale(3)";
            perspective2(5);
        }
    });

    function perspective(whichBtn) {
        switch (whichBtn) {
            case 1: 
                btn1.style.backgroundColor = "#75E0F4";
                btn2.style.backgroundColor = "#141414"; 
                btn3.style.backgroundColor = "#141414";
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";
                break;
            case 2: 
                btn1.style.backgroundColor = "#75E0F4";
                btn2.style.backgroundColor = "#75CDF4"; 
                btn3.style.backgroundColor = "#141414"; 
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";  
                break;
            case 3: 
                btn1.style.backgroundColor = "#75E0F4";
                btn2.style.backgroundColor = "#75CDF4"; 
                btn3.style.backgroundColor = "#75B4F4"; 
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";   
                break;
            case 4: 
                btn1.style.backgroundColor = "#75E0F4";
                btn2.style.backgroundColor = "#75CDF4"; 
                btn3.style.backgroundColor = "#75B4F4"; 
                btn4.style.backgroundColor = "#75A1F4"; 
                btn5.style.backgroundColor = "#141414"; 
                break;
            case 5: 
                btn1.style.backgroundColor = "#75E0F4";
                btn2.style.backgroundColor = "#75CDF4"; 
                btn3.style.backgroundColor = "#75B4F4"; 
                btn4.style.backgroundColor = "#75A1F4"; 
                btn5.style.backgroundColor = "#7589F4"; 
                break;
        }
    }

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
                break;
            case 3: 
                btn3.className = "notSelected";
                btn4.className = "notSelected";
                btn5.className = "notSelected";
                btn3.style.backgroundColor = "#141414";
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";  
                break;
            case 4: 
                btn4.className = "notSelected";
                btn5.className = "notSelected";
                btn4.style.backgroundColor = "#141414"; 
                btn5.style.backgroundColor = "#141414";
                break;
            case 5: 
                btn5.className = "notSelected";
                btn5.style.backgroundColor = "#141414";
                break;
        }
    }
    let overlayCon = document.querySelector('#overlayContainer');
    let overlayImg = document.querySelector('#figure1');
    let overlayImgCap = document.querySelector('figcaption');
    let overlayDesc = document.querySelector('p');
    let exitOverlay = document.querySelector('#exitOverlay');

    exitOverlay.addEventListener('click', function(){
        overlay.style.display = "none";
        overlayContainer.style.display = "none";
    });

    planet1.addEventListener('click', function() {
        overlayFill(1);
    });
    planet2.addEventListener('click', function() {
        overlayFill(2);
    });
    planet3.addEventListener('click', function() {
        overlayFill(3);
    });

    function overlayFill(whichPlnt) {
        console.log("going here?");
        
        switch(whichPlnt) {
            case 1:
                overlayImg.style.backgroundImage = "url('./images/bowl.jpg')";
                overlayImgCap.innerHTML = "hi";
                overlayDesc.innerHTML = "heyyy";
                break;
            case 2:
                overlayImg.style.backgroundImage = "url('./images/station.jpg')";
                overlayImgCap.innerHTML = "hi2";
                overlayDesc.innerHTML = "heyyy2";
                break;
            case 3:
                overlayImg.style.backgroundImage = "url('./images/coins.jpg')";
                overlayImgCap.innerHTML = "hi3";
                overlayDesc.innerHTML = "heyyy3";
                break;
            case 4:
                break;
            case 5:
                break;
        }
        overlay.style.display = "block";
        overlayContainer.style.display = "flex";
        
    }
    
})();