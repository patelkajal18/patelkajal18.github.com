(function() {
    "use strict"
    console.log("reading js");

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
        console.log("change overlay")

        switch(whichPen) {
            case "penLGr":
                overlayImg.style.backgroundImage = "url('./images/')";
                overlayImg.style.border = "5px solid #";
                overlayText.innerHTML = "blah1";
                break;
            case "penDGr":
                overlayImg.style.backgroundImage = "url('./images/fish.jpg')";
                overlayImg.style.border = "5px solid #6B926E";
                overlayText.innerHTML = "blah2";
                break;
            case "penB":
                overlayImg.style.backgroundImage = "url('./images/')";
                overlayImg.style.border = "5px solid #";
                overlayText.innerHTML = "blah3";
                break;
            case "penP":
                overlayImg.style.backgroundImage = "url('./images/')";
                overlayImg.style.border = "5px solid #";
                overlayText.innerHTML = "blah4";
                break;
            case "penLGy":
                overlayImg.style.backgroundImage = "url('./images/')";
                overlayImg.style.border = "5px solid #";
                overlayText.innerHTML = "blah5";
                break;
            case "penDGy":
                overlayImg.style.backgroundImage = "url('./images/')";
                overlayImg.style.border = "5px solid #";
                overlayText.innerHTML = "blah6";
                break;
            case "penW":
                overlayImg.style.backgroundImage = "url('./images/')";
                overlayImg.style.border = "5px solid #";
                overlayText.innerHTML = "blah7";
                break;
        }
    }

})() 