(function() {
    "use strict"

    console.log("reading js");

    document.querySelector('button').addEventListener('click', function(event) {
        event.preventDefault();
        
        let form = document.forms["magForm"];
        let tvChar = formatWords(form["char"].value);
        let snack = formatWords(form["snack"].value);
        let background = form["background"].value;
        let numYr = form["num"].value;
        let houseObj = form["house"].value;
        let correctInputs = validate(tvChar, snack, numYr, houseObj, background);
        let logo = document.querySelector('h2');

        if (correctInputs) {
            let justiceAuthor = document.querySelector('#left1 p');
            let justice = document.querySelector('#left1 h3');
            let partner = document.querySelector('#left2 h5');
            let time  = document.querySelector('#right1 h5');

            logo.style.color = 'white';
            changeBackgroundContext(background, snack, logo);
            
            justice.innerHTML = `Justice <span style="font-weight:800;">${tvChar}</span> Elected To Supreme Court`;
            if (background == "clouds") {
                justice.style.color = "black";
                justiceAuthor.style.color = "black";
            } else {
                justice.style.color = "white";
                justiceAuthor.style.color = "white";
            }
            partner.innerHTML = `IN PARTNERSHIP WITH THE WORLD <span style="font-weight:800;">${houseObj.toUpperCase()}</span> COUNCIL`;
            time.innerHTML = `April 20, <b>30${numYr}</b>`;
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

    async function changeBackgroundContext(image, food, logo) {
        let mag = document.getElementById('mag');
  
        let midText = document.querySelector('#center1 h3');
        let midAuthor = document.querySelector('#center1 p');
        switch(image) {
            case 'stones': 
                mag.style.backgroundImage = "url('./images/rocks.jpg')"; 
                midText.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in California Becomes Detrimental`;
                midText.style.color = "white";
                midAuthor.style.color = "white";
                logo.style.color = "#d50000";
                break;
            case 'clouds': 
                mag.style.backgroundImage = "url('./images/sky.jpg')"; 
                midText.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in New York Becomes Detrimental`;
                midText.style.color = "black";
                midAuthor.style.color = "black";
                logo.style.color = "white";
                break;
            default: //ocean
                mag.style.backgroundImage = "url('./images/ocean.jpg')"; 
                midText.innerHTML = `Overpopulation of <span style="font-weight:800;">${food}</span> in Hawaii Becomes Detrimental`;
                midText.style.color = "white";
                midAuthor.style.color = "white";
                logo.style.color = "black";
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
})();
    