
    const gameMoves = ["rock", "paper", "scissors"];
    let currentMove = null;
    let displayBox = document.getElementById("display");
    let win = 0;
    let draw = 0;
    let lose = 0;

    const generateMove = function(){
        let ranNum = Math.floor(Math.random() * 3);
        console.log(ranNum);
        currentMove = gameMoves[ranNum];
        console.log(currentMove);
    };
    
    const playerMove = function (keyP){
        //let playerMove = prompt("What is your move?").toLowerCase();
        if(playerMove == "rock" || keyP == 'r'){
            if(currentMove == "rock"){
                alert("The computer chooses " + currentMove + ". Draw!");
                draw++;
                document.getElementById("draw").innerHTML = "Draws: " + draw;

            }
            else if(currentMove == "paper"){
                alert("The computer chooses " + currentMove + ". You lose!");
                win++;
                document.getElementById("win").innerHTML = "Wins: " + win;
            }
            else if(currentMove == "scissors"){
                alert("The computer chooses " + currentMove + ". You win!");
                lose++;
                document.getElementById("lose").innerHTML = "Loses: " + lose;
            }
        }
        else if(playerMove == "paper" || keyP == 'p' ){
            if(currentMove == "rock"){
                alert("The computer chooses " + currentMove + ". You win!");
                win++;
                document.getElementById("win").innerHTML = "Wins: " + win;
            }
            else if(currentMove == "paper"){
                alert("The computer chooses " + currentMove + ". Draw!");
                draw++;
                document.getElementById("draw").innerHTML = "Draws: " + draw;
            }
            else if(currentMove == "scissors"){
                alert("The computer chooses " + currentMove + ". You lose!");
                lose++;
                document.getElementById("lose").innerHTML = "Loses: " + lose;
            }
        }
        else if(playerMove == "scissors" || keyP == "s"){
            if(currentMove == "rock"){
                alert("The computer chooses " + currentMove + ". You lose!");
                lose++;
                document.getElementById("lose").innerHTML = "Loses: " + lose;
            }
            else if(currentMove == "paper"){
                alert("The computer chooses " + currentMove + ". You win!");
                win++;
                document.getElementById("win").innerHTML = "Wins: " + win;
            }
            else if(currentMove == "scissors"){
                alert("The computer chooses " + currentMove + ". Draw!");
                draw++;
                document.getElementById("draw").innerHTML = "Draws: " + draw;
            }
        }
        else{
            alert("Not a valid move.");
        }

    }

    const gameLoop = function(){
        generateMove();
        playerMove();
    }

    const totals = function(){
        console.log(win);
        console.log(draw);
        console.log(lose);
    }
    
    document.onkeyup = function(event) {
        let keyPress = event.key;
        if(keyPress == 'r' || keyPress == 'p' || keyPress == 's'){
            generateMove();
            playerMove(keyPress);
        }

    }
    
    
    
    
    
    
    

