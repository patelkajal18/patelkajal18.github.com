(function() {
    "use strict"
    let startGame = document.getElementById('startgame');
    let gameControl = document.getElementById('gamecontrol');
    let game = document.getElementById('game');
    let score = document.getElementById('score');
    let actionArea = document.getElementById('actions');

    let gameData = {
        dice: ['./images/1die.png', './images/2die.png', '3die.jpg', 
            '4die.jpg', '5die.jpg', '6die.jpg'], //change this to elements photos.
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29,
        tree: ["tree1", "tree2"]
    };

    startGame.addEventListener("click", function(){
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        console.log("set up the turn!");
        setUpTurn();

    });

    gameData.index = Math.round(Math.random());

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            console.log("roll the dice");
            throwDice();
        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        showCurrentScore(); //?
        
        if(gameData.rollSum == 2) {
            console.log("snake eyes were rolled");
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            
            gameData.score[gameData.index] = 0;
            growTree("death", gameData.index, 0);
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);
        } else if (gameData.roll1 == 1 || gameData.roll2 == 1) {
            console.log('one of the two dice was a 1');
            growTree("stop", gameData.index, gameData.score[gameData.index]);
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        } else {
            console.log("the game proceeds");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            growTree("grow", gameData.index, gameData.score[gameData.index]);
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
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

    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score.innerHTML =  `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
    }

    function growTree(condition, whichPlayer, score) {
        let tree = document.getElementById(`${gameData.tree[whichPlayer]}`);
        switch(condition) {
            case "death":
                tree.src = "./images/";
                break;
            case "grow":
                if (score > 29) {         // fully grown tree
                    tree.src = "./images/";
                } else if (score > 23) {  // large tree
                    tree.src = "./images/";
                } else if (score > 17) {  // medium tree
                    tree.src = "./images/";
                } else if (score > 11) {  // small tree
                    tree.src = "./images/treeSmall.png";
                } else if (score > 5) {   // small plant
                    tree.src = "./images/plantSmall.png";
                } else {                  // seedling
                    tree.src = "./images/";
                }
                break;
            default: break;
        }
    }

   
})() 
