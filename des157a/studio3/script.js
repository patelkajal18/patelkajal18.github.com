(function() {
    "use strict"
    console.log("reading js");

    // html objects
    let startGame = document.getElementById('startgame');
    let gameControl = document.getElementById('gamecontrol');
    let game = document.getElementById('game');
    let score = document.getElementById('gamescore');
    let score1 = document.getElementById('score1');
    let score2 = document.getElementById('score2');
    let actionArea = document.getElementById('actions');
    let player1Section = document.getElementById('player1');
    let player2Section = document.getElementById('player2');
    const natureSound = new Audio('./media/nature.wav');
    const fireSound = new Audio('./media/fire.wav');
    
    // object holds data for the game
    let gameData = {
        dice: ['./images/fire1.png', './images/air2.png', './images/earth3.png', 
            './images/water4.png'], //change this to elements photos.
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29,
        tree: ["tree1", "tree2"]
    };

    // "starts" the game when user clicks button
    startGame.addEventListener("click", function(){
        gameControl.innerHTML = '<h2 style="font-size: 30px;">~ game has started ~</h2>';
        gameControl.innerHTML += '<button id="quit">quit</button>';
        player1Section.style.visibility = "visible";
        player2Section.style.visibility = "visible";

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        console.log("set up the turn!");
        setUpTurn();

    });

    gameData.index = Math.round(Math.random());

    // changes the turn for each player & shuffles "cards"
    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML = `<img class="card" src="./images/blank.png"> <img class="card" src="./images/blank.png">`;
        actionArea.innerHTML = `<button style="width: 400px; font-size: 25px" id="roll">shuffle cards for ${gameData.players[gameData.index]}</button>`;
        
        document.getElementById('roll').addEventListener('click', function(){
            console.log("roll the dice");
            throwDice();
        });
    }

    // algorithm to shuffle cards
    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 4) + 1;
        gameData.roll2 = Math.floor(Math.random() * 4) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML = `<img class="card" src="${gameData.dice[gameData.roll1-1]}"> <img class="card" src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        showCurrentScore(); 
        
        // snake eyes were rolles
        if(gameData.rollSum == 2) {
            fireSound.play();
            console.log("snake eyes were rolled");
            game.innerHTML += '<p style="font-size: 25px; background-color: #ffffff67; margin-top: 20px; width: 250px; transform: translate(60%, 0%); text-align: center;">oh snap! snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            growTree("death", gameData.index, 0);
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 3000);

        } else if (gameData.roll1 == 1 || gameData.roll2 == 1) { // 1 snake eye was rolled
            console.log('one of the two dice was a 1');
            growTree("stop", gameData.index, gameData.score[gameData.index]);
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p id="message" style="text-align: center; font-size: 20px; background-color: #ffffff67;; margin-top: 20px;">sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);

        } else { // how the game normally proceeds after cards are shuffled
            console.log("the game proceeds"); 
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            growTree("grow", gameData.index, gameData.score[gameData.index]);
            actionArea.innerHTML = '<button id="rollagain">play</button> <button id="pass">pass</button>';
            document.getElementById('rollagain').addEventListener('click', function(){
                throwDice();
            });
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            //checking winning condition
            checkWinningCondition();
        }
    }

    // checks to see if a player won the game
    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points</h2>`;
            actionArea.innerHTML = '';
            gameControl.innerHTML = `<h2 style="font-size: 25px">@${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!!</h2>` + '<button id="quit">quit</button>'
            showCurrentScore();
            document.getElementById('quit').innerHTML = "<button style='width: 130px'> new game </button>";
            document.getElementById('quit').addEventListener('click', function(){
                location.reload();
                console.log("set up the turn!");
                setUpTurn();
            });
            
        } else {
            showCurrentScore();
        }
    }

    // displays the scores for each player
    function showCurrentScore() {
        score1.innerHTML = `<p><strong>${gameData.score[0]}</strong><\p>`;
        score2.innerHTML = `<p><strong>${gameData.score[1]}</strong><\p>`;
    }

    // "grows" each players tree based on their points earned
    function growTree(condition, whichPlayer, score) {
        let tree = document.getElementById(`${gameData.tree[whichPlayer]}`);
        
        switch(condition) {
            case "death":
                tree.src = "./images/treeDead.png";
                break;
            case "grow":
                if (score > 25) {  // large tree
                    tree.src = "./images/treeL.png";
                    natureSound.play();
                } else if (score > 15) {  // medium tree
                    tree.src = "./images/treeM.png";
                } else if (score > 5) {                  // small tree
                    tree.src = "./images/treeS.png";
                } else {
                    tree.src = "./images/treeDead.png";
                }
                break;
            default: break;
        }
    }

   
})() 
