(function() {
    "use strict"
    console.log("reading js");

    let body = document.querySelector('body');
    let main = document.querySelector('main');
    let to1bPage = document.getElementById("to1bPage");
    to1bPage.style.visibility = "visible";
    let toSecPage = document.getElementById("toSecPage");
    let toThirdPage = document.getElementById("toThirdPage");
    let sec1 = document.getElementById("pg1");
    let sec1b = document.getElementById("pg1b");
    sec1b.style.display = "none";
    let sec2 = document.getElementById("pg2");
    sec2.style.display = "none";
    let sec3 = document.getElementById("pg3");
    sec3.style.display = "none";
    let mag = document.getElementById('mag');
    let mag3 = document.getElementById('mag3');
    let backSec1 = document.getElementById('backHome');
    let backSec1b = document.getElementById('backCol1b');
    let backSec2 = document.getElementById('backForm');


    let overlayImg = document.getElementById("overlayImg");
    let overlay = document.getElementById("overlay");
    let overlayText = document.getElementById("overlayText");
    let overlayBtn = document.getElementById('overlayBtn');

    let penLGr = document.getElementById("penLGr");
    let penDGr = document.getElementById("penDGr");
    let penB = document.getElementById("penB");
    let penP = document.getElementById("penP");
    let penDGy = document.getElementById("penDGy");
    let penLGy = document.getElementById("penLGy");
    let penW = document.getElementById("penW");

    to1bPage.addEventListener("click", function() {
        sec1.style.display = "none";
        sec1b.style.display = "flex";
        sec2.style.display = "none";
        sec3.style.display = "none";
        body.style.backgroundImage = "url('./images/wallBackground.jpg')";
        //main.style.overflow = "scroll";
    })

    backSec1b.addEventListener('click', function(){
        sec1.style.display = "none";
        sec1b.style.display = "flex";
        sec2.style.display = "none";
        sec3.style.display = "none";
        body.style.backgroundImage = "url('./images/wallBackground.jpg')";
        //main.style.overflow = "scroll";
    })

    backSec1.addEventListener('click', function(){
        sec1.style.display = "flex";
        sec1.style.visibility = "visible";
        main.style.backgroundImage = "url('./images/pensGray.jpg')";
        body.style.backgroundColor = "#E4E4E4";
        body.style.backgroundImage = "";
        main.style.backgroundSize = "100% 120%";
        main.style.backgroundPosition = "center center";
        main.style.height = "728px";
        body.style.height = "728px";
        sec1b.style.display = "none";
        sec2.style.display = "none";
        sec3.style.display = "none";
        //main.style.overflow = "hidden";
    })

    toSecPage.addEventListener("click", function(){
        sec1.style.visibility = "hidden";
        sec1b.style.display = "none";
        sec2.style.display = "flex";
        main.style.background = "transparent";
        mag.style.display = "none";
        main.style.height = "728px";
        //main.style.overflow = "overlay";
        body.style.height = "728px";
        body.style.backgroundColor = "#E4E4E4";
        //body.style.backgroundImage = "";
        body.style.backgroundImage = "url('./images/wallBackground.jpg')";
    })

    backSec2.addEventListener('click', function(){
        sec1.style.visibility = "hidden";
        sec1b.style.display = "none";
        sec2.style.display = "flex";
        sec3.style.display = "none";
        main.style.height = "728px";
        body.style.height = "728px";
        main.style.background = "transparent";
        mag.style.display = "none";
        //main.style.overflow = "overlay";
        body.style.backgroundColor = "#E4E4E4";
        //body.style.backgroundImage = "";
        body.style.backgroundImage = "url('./images/wallBackground.jpg')";
    })


    penLGr.addEventListener("click", function(){
        console.log("light green clicked");
        changeOverlayImg("penLGr")
    })
    penDGr.addEventListener("click", function(){
        changeOverlayImg("penDGr");
    })
    penB.addEventListener("click", function(){
        changeOverlayImg("penB");
    })
    penP.addEventListener("click", function(){
        changeOverlayImg("penP");
    })
    penLGy.addEventListener("click", function(){
        changeOverlayImg("penLGy");
    })
    penDGy.addEventListener("click", function(){
        changeOverlayImg("penDGy");
    })
    penW.addEventListener("click", function(){
        changeOverlayImg("penW");
    })

    overlayBtn.addEventListener("click", function(){
        overlay.style.visibility = "hidden";
        to1bPage.style.visibility = "visible";
    })

    function changeOverlayImg(whichPen) {
        overlay.style.visibility = "visible";
        overlayImg.style.backgroundPosition = "top";
        to1bPage.style.visibility = "hidden";
        console.log("change overlay")

        switch(whichPen) {
            case "penLGr":
                overlayImg.style.backgroundImage = "url('./images/leaf.jpg')";
                overlayImg.style.border = "8px solid #ADAF4E";
                overlayText.innerHTML = `${changeText(5)}`;
                break;
            case "penDGr":
                overlayImg.style.backgroundImage = "url('./images/fish.jpg')";
                overlayImg.style.border = "8px solid #6B926E";
                overlayText.innerHTML = `${changeText(1)}`;
                break;
            case "penB":
                overlayImg.style.backgroundImage = "url('./images/dragon.jpg')";
                overlayImg.style.border = "8px solid #049FBA";
                overlayText.innerHTML = `${changeText(3)}`;
                break;
            case "penP":
                overlayImg.style.backgroundImage = "url('./images/abstract.jpg')";
                overlayImg.style.border = "8px solid #A78895";
                overlayText.innerHTML = `${changeText(7)}`;
                break;
            case "penLGy":
                overlayImg.style.backgroundImage = "url('./images/eyes.jpg')";
                overlayImg.style.border = "8px solid #B2A998";
                overlayImg.style.backgroundPosition = "center center";
                overlayText.innerHTML = `${changeText(4)}`;
                break;
            case "penDGy":
                overlayImg.style.backgroundImage = "url('./images/itachi.jpg')";
                overlayImg.style.border = "8px solid #746A5B";
                overlayText.innerHTML = `${changeText(6)}`;
                break;
            case "penW":
                overlayImg.style.backgroundImage = "url('./images/appa.jpg')";
                overlayImg.style.border = "8px solid #E2D7C2";
                overlayText.innerHTML = `${changeText(2)}`;
                break;
        }
    }

    // Page 1b JS

    let sq1 = document.getElementById('sq1');
    let sq2 = document.getElementById('sq2');
    let sq3 = document.getElementById('sq3');
    let sq4 = document.getElementById('sq4');
    let sq5 = document.getElementById('sq5');
    let sq6 = document.getElementById('sq6');
    let sq7 = document.getElementById('sq7');

    sq1.addEventListener('mouseover', function(){
        hoverOnEffect(sq1, 1);
    }); 
    sq1.addEventListener('mouseout', function(){
        hoverOffEffect(sq1, 1);
    });
    sq2.addEventListener('mouseover', function(){
        hoverOnEffect(sq2, 2);
    }); 
    sq2.addEventListener('mouseout', function(){
        hoverOffEffect(sq2, 2);
    });
    sq3.addEventListener('mouseover', function(){
        hoverOnEffect(sq3, 3);
    }); 
    sq3.addEventListener('mouseout', function(){
        hoverOffEffect(sq3, 3);
    });

    sq4.addEventListener('mouseover', function(){
        hoverOnEffect(sq4, 4);
    }); 
    sq4.addEventListener('mouseout', function(){
        hoverOffEffect(sq4, 4);
    });

    sq5.addEventListener('mouseover', function(){
        hoverOnEffect(sq5, 5);
    }); 
    sq5.addEventListener('mouseout', function(){
        hoverOffEffect(sq5, 5);
    });

    sq6.addEventListener('mouseover', function(){
        hoverOnEffect(sq6, 6);
    }); 
    sq6.addEventListener('mouseout', function(){
        hoverOffEffect(sq6, 6);
    });

    sq7.addEventListener('mouseover', function(){
        hoverOnEffect(sq7, 7);
    }); 
    sq7.addEventListener('mouseout', function(){
        hoverOffEffect(sq7, 7);
    });

    function hoverOnEffect(sq, index) {
        let value = changeText(index);
        if (index != 7) {
            sq.innerHTML =  `<p class="squareText">${value}<p>`;
        } else {
            sq.innerHTML =  `<p class="squareTextLong">${value}<p>`;
        }
    }

    function hoverOffEffect(sq, index) {
        sq.innerHTML = ``;
    }

    function changeText(index) {
        let text;
        switch(index) {
            case 1:
                text = "I drew these koi fish during quarantine.";
                break;
            case 2:
                text = "Appa was drawn in the beginning of 2021.";
                break;
            case 3:
                text = "I painted this fictional dragon in 2020.";
                break;
            case 4:
                text = "This is one of the first drawings I drew in my dorm.";
                break; 
            case 5:
                text = "I painted these dandelions the summer before college.";
                break;
            case 6:
                text = "This drawing of Itachi was done in 2019.";
                break;
            case 7:
                text = "Using paint swatches, I drew this abstract design.";
                break;              
        }
        return text;
    }





    // Page 2 JS

    document.querySelector('.buttonPg2').addEventListener('click', function(event) {
        event.preventDefault();
        
        let form = document.forms["magForm"];
        let tvChar = formatWords(form["char"].value);
        let snack = formatWords(form["snack"].value);
        let background = form["background"].value;
        let numYr = form["num"].value;
        let houseObj = form["house"].value;
        let correctInputs = validate(tvChar, snack, numYr, houseObj, background);
        let logo = document.querySelector('h2');
        let logoC = document.querySelector('#h2C');

        if (correctInputs) {
            let justiceAuthor = document.querySelector('#left1 p');
            let justice = document.querySelector('#left1 h3');
            let partner = document.querySelector('#left2 h5');
            let time  = document.querySelector('#right1 h5');

            let justiceAuthorC = document.querySelector('#left1C p');
            let justiceC = document.querySelector('#left1C h3');
            let partnerC = document.querySelector('#left2C h5');
            let timeC  = document.querySelector('#right1C h5');

            logo.style.color = 'white';
            logoC.style.color = 'white';
            changeBackgroundContext(background, snack, logo, logoC);
            
            justice.innerHTML = `Justice <span style="font-weight:800;">${tvChar}</span> Elected To Supreme Court`;
            justiceC.innerHTML = `Justice <span style="font-weight:800;">${tvChar}</span> Elected To Supreme Court`;
            if (background == "clouds") {
                justice.style.color = "black";
                justiceAuthor.style.color = "black";
                justiceC.style.color = "black";
                justiceAuthorC.style.color = "black";
            } else {
                justice.style.color = "white";
                justiceAuthor.style.color = "white";
                justiceC.style.color = "white";
                justiceAuthorC.style.color = "white";
            }
            partner.innerHTML = `IN PARTNERSHIP WITH THE WORLD <span style="font-weight:800;">${houseObj.toUpperCase()}</span> COUNCIL`;
            time.innerHTML = `April 20, <b>30${numYr}</b>`;
            partnerC.innerHTML = `IN PARTNERSHIP WITH THE WORLD <span style="font-weight:800;">${houseObj.toUpperCase()}</span> COUNCIL`;
            timeC.innerHTML = `April 20, <b>30${numYr}</b>`;

            // to third page
            sec1.style.display = "none"
            sec2.style.display = "none";
            sec1b.style.display = "none";
            sec3.style.display = "flex";
            main.style.backgroundImage = "none";
            main.style.position = "relative";
            main.style.height = "1500px";
            //main.style.overflow = "scroll";
            body.style.height = "1500px";
            body.style.backgroundImage = "url('./images/wallBackground.jpg')";
        }
    });

    function validate(tvChar, snack, numYr, houseObj, background) {
        if (tvChar == "" || snack == "" || numYr == "" || houseObj == "" || background == "default") {
            console.log("nope", 1, tvChar, snack, typeof(numYr), houseObj, background);
            alert("Please fill out all inputs!");
            return false;
        }
        else if (numYr < 10 || numYr > 99 ) {
            alert("Please enter a number between 10 and 99.");
            return false;
        }
        return true;
    }

    async function changeBackgroundContext(image, food, logo, logoC) {
        //let mag = document.getElementById('mag');
  
        let midText = document.querySelector('#center1 h3');
        let midAuthor = document.querySelector('#center1 p');
        let midTextC = document.querySelector('#center1C h3');
        let midAuthorC = document.querySelector('#center1C p');

        /* width: 500px;
        margin: 0 auto;
        text-align: center;  */
        mag3.style.backgroundPosition = "center center";
        midText.style.width = "500px";
        midText.style.margin = "0 auto";
        midText.style.margin = "text-align: center";
        midText.style.top = "0";
        midText.style.left = "0";
        midText.style.position = "relative";

        switch(image) {
            case 'space': 
                mag.style.backgroundImage = "url('./images/rocks.jpg')";
                mag3.style.backgroundImage = "url('./images/space.jpg')";
                

                midText.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in California Becomes Detrimental`;
                midText.style.color = "white";
                midAuthor.style.color = "white";
                midTextC.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in California Becomes Detrimental`;
                midTextC.style.color = "white";
                midAuthorC.style.color = "white";

                logo.style.color = "#d50000";
                logoC.style.color = "#d50000";
                break;
            case 'nature': 
                mag.style.backgroundImage = "url('./images/sky.jpg')"; 
                let imgArray = ['./images/daisy.jpg', './images/branch.jpg', './images/yellow.jpg'];
                let index = function() {
                    return Math.floor(Math.random() * 3);
                }();
                console.log("index: ", index);
                mag3.style.backgroundImage = `url(${imgArray[index]})`; 

                midText.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in New York Becomes Detrimental`;
                midText.style.color = "black";
                midAuthor.style.color = "black";
                midTextC.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in New York Becomes Detrimental`;
                midTextC.style.color = "white";
                midAuthorC.style.color = "white";

                logo.style.color = "black";
                logoC.style.color = "black";
                break;
            default: //simple
                mag.style.backgroundImage = "url('./images/ocean.jpg')";
                //mag3.style.backgroundImage = "url('./images/ocean.jpg')";
                mag3.style.backgroundImage = "url('./images/face.jpg')";  
                
                midText.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in Hawaii Becomes Detrimental`;
                midText.style.color = "white";
                midAuthor.style.color = "white";
                midTextC.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in Hawaii Becomes Detrimental`;
                midTextC.style.color = "white";
                midAuthorC.style.color = "white";
                
                logo.style.color = "white";
                logoC.style.color = "white";

                midText.style.width = "200px";
                midText.style.margin = "0";
                midText.style.margin = "text-align: right";
                midText.style.top = "9%";
                midText.style.left = "64%";
                midText.style.position = "relative";
                break;
          }
    } 

    function formatWords(input) {
        if (input == ""){
            return input;
        }
        let words = input.toLowerCase().split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(" ");
    }

})() 