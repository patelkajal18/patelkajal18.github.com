(function() {
    "use strict"
    console.log("reading js");

    alert("Welcome! This a user test for my final project. Click ok to learn more!");
    alert("Before you start looking around here are three things to keep in mind.");
    alert("First, try to figure out how to view my art gallery.");
    alert("Second, see if you can find all of the buttons and test them out.");
    alert("Third, try to visit the final screen for a surprise!");
    alert("Thanks for your participation!");

    let body = document.querySelector('body');
    let main = document.querySelector('main');
    let to1bPage = document.getElementById("to1bPage");
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
    })

    toSecPage.addEventListener("click", function(){
        sec1.style.visibility = "hidden";
        sec1b.style.display = "none";
        sec2.style.display = "flex";
        main.style.background = "transparent";
        mag.style.display = "none";
        body.style.backgroundImage = "url('./images/wallBackground.jpg')";
    })

    /* toThirdPage.addEventListener("click", function(){
        sec1.style.display = "none"
        sec2.style.display = "none";
        sec3.style.display = "flex";
        main.style.backgroundImage = "none";
        main.style.position = "relative";
        main.style.height = "1500px";
        body.style.height = "1500px";
        body.style.backgroundImage = "url('./images/wallBackground.jpg')";
    }) */

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
    })

    function changeOverlayImg(whichPen) {
        overlay.style.visibility = "visible";
        overlayImg.style.backgroundPosition = "top";
        console.log("change overlay")

        switch(whichPen) {
            case "penLGr":
                overlayImg.style.backgroundImage = "url('./images/leaf.jpg')";
                overlayImg.style.border = "8px solid #ADAF4E";
                overlayText.innerHTML = "I painted these dandelions the summer before collage.";
                break;
            case "penDGr":
                overlayImg.style.backgroundImage = "url('./images/fish.jpg')";
                overlayImg.style.border = "8px solid #6B926E";
                overlayText.innerHTML = "I drew these koi fish during quaratine.";
                break;
            case "penB":
                overlayImg.style.backgroundImage = "url('./images/dragon.jpg')";
                overlayImg.style.border = "8px solid #049FBA";
                overlayText.innerHTML = "I painted this fictional dragon in 2020.";
                break;
            case "penP":
                overlayImg.style.backgroundImage = "url('./images/abstract.jpg')";
                overlayImg.style.border = "8px solid #A78895";
                overlayText.innerHTML = "Using paint swatches, I drew this abstract design.";
                break;
            case "penLGy":
                overlayImg.style.backgroundImage = "url('./images/eyes.jpg')";
                overlayImg.style.border = "8px solid #B2A998";
                overlayImg.style.backgroundPosition = "center center";
                overlayText.innerHTML = "This is one of the first drawings I drew in my dorm.";
                break;
            case "penDGy":
                overlayImg.style.backgroundImage = "url('./images/itachi.jpg')";
                overlayImg.style.border = "8px solid #746A5B";
                overlayText.innerHTML = "This drawing of Itachi was done in 2019.";
                break;
            case "penW":
                overlayImg.style.backgroundImage = "url('./images/appa.jpg')";
                overlayImg.style.border = "8px solid #E2D7C2";
                overlayText.innerHTML = "Appa was drawn in the beginning of 2021.";
                break;
        }
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
        switch(image) {
            case 'stones': 
                mag.style.backgroundImage = "url('./images/rocks.jpg')";
                mag3.style.backgroundImage = "url('./images/rocks.jpg')";

                midText.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in California Becomes Detrimental`;
                midText.style.color = "white";
                midAuthor.style.color = "white";
                midTextC.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in California Becomes Detrimental`;
                midTextC.style.color = "white";
                midAuthorC.style.color = "white";

                logo.style.color = "#d50000";
                logoC.style.color = "#d50000";
                break;
            case 'clouds': 
                mag.style.backgroundImage = "url('./images/sky.jpg')"; 
                mag3.style.backgroundImage = "url('./images/sky.jpg')"; 

                midText.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in New York Becomes Detrimental`;
                midText.style.color = "black";
                midAuthor.style.color = "black";
                midTextC.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in New York Becomes Detrimental`;
                midTextC.style.color = "black";
                midAuthorC.style.color = "black";

                logo.style.color = "white";
                logoC.style.color = "white";
                break;
            default: //ocean
                mag.style.backgroundImage = "url('./images/ocean.jpg')";
                mag3.style.backgroundImage = "url('./images/ocean.jpg')";  
                
                midText.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in Hawaii Becomes Detrimental`;
                midText.style.color = "white";
                midAuthor.style.color = "white";
                midTextC.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in Hawaii Becomes Detrimental`;
                midTextC.style.color = "white";
                midAuthorC.style.color = "white";
                
                logo.style.color = "black";
                logoC.style.color = "black";
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