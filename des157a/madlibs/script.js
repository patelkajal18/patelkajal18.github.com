(function() {
    "use strict"

    console.log("here");

    document.querySelector('button').addEventListener('click', function(event) {
        event.preventDefault();
        console.log("submit");
        
        let form = document.forms["magForm"];
        let tvChar = formatWords(form["char"].value);
        let snack = formatWords(form["snack"].value);
        let background = form["background"].value;
        let numYr = form["num"].value;
        let houseObj = form["house"].value;
        let correctInputs = validate(tvChar, snack, numYr, houseObj, background);
        console.log(background);
        if (correctInputs) {
            let justiceAuthor = document.querySelector('#left1 p');
            let justice = document.querySelector('#left1 h3');
            let partner = document.querySelector('#left2 h5');
            let time  = document.querySelector('#right1 h5');

            changeBackgroundContext(background, snack);
            justice.innerHTML = `Justice <b>${tvChar}</b> Elected To Supreme Court`;
            if (background == "clouds") {
                justice.style.color = "black";
                justiceAuthor.style.color = "black";
                document.querySelector('h2').style.color = "white";
            } else {
                justice.style.color = "white";
                justiceAuthor.style.color = "white";
                document.querySelector('h2').style.color = "black";
            }
            partner.innerHTML = `IN PARTNERSHIP WITH THE WORLD <b>${houseObj.toUpperCase()}</b> COUNCIL`;
            time.innerHTML = `April 20, <b>30${numYr}</b>`;


        }
    });

    function validate(tvChar, snack, numYr, houseObj, background) {
        if (tvChar == "" || snack == "" || numYr == "" || houseObj == "" || background == "default") {
            console.log("nope", 1, tvChar, snack, typeof(numYr), houseObj, background);
            alert("Please fill out all inputs!");
            return false;
        }
        return true;
    }

    async function changeBackgroundContext(image, food) {
        let mag = document.getElementById('mag');
        console.log(image);
        let midText = document.querySelector('#center1 h3');
        let midAuthor = document.querySelector('#center1 p');
        switch(image) {
            case 'stones': 
                mag.style.backgroundImage = "url('./images/rocks.jpg')"; 
                midText.innerHTML = `Overpopulation of <b>${food}</b> in California`;
                midText.style.color = "white";
                midAuthor.style.color = "white";
                break;
            case 'clouds': 
                mag.style.backgroundImage = "url('./images/sky.jpg')"; 
                midText.innerHTML = `Overpopulation of <b>${food}</b> in New York`;
                midText.style.color = "black";
                midAuthor.style.color = "black";
                break;
            default:
                mag.style.backgroundImage = "url('./images/ocean.jpg')"; 
                midText.innerHTML = `Overpopulation of <b>${food}</b> in Hawaii`;
                midText.style.color = "white";
                midAuthor.style.color = "white";
                break;
          }
    } 

    function formatWords(input) {
        const words = input.toLowerCase().split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        words.join(" ");
        return words;
    }
    
})();
    