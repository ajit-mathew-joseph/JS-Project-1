
var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();


document.querySelector('.btn-roll').addEventListener('click', function(){ 
    if(gamePlaying) {
        // element = btn roll, eventlistener = event executed
        var dice1 = Math.floor(Math.random()*6) + 1; // RNG
        var dice2 = Math.floor(Math.random()*6) + 1; // RNG    
    
         document.getElementById('dice-1').style.display = 'block';
         document.getElementById('dice-2').style.display = 'block';
         document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
         document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'; 
    
    } if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2; // adds the dice value to Roundscore
            document.querySelector('#current-' + activePlayer).textContent = roundScore; //adds to the active player
        
        }   else {
            nextPlayer(); 
    }              
    
});
        
        var dice1 = Math.floor(Math.random()*6) + 1; // RNG
        var dice2 = Math.floor(Math.random()*6) + 1; // RNG    
            
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';    
        
       /* if (dice === 6 && lastDice === 6) {
            scores[activePlayer] = 0; 
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else if (dice !== 1) {
            roundScore += dice; // adds the dice value to Roundscore
            document.querySelector('#current-' + activePlayer).textContent = roundScore; //adds to the active player
        
        }   else {
            nextPlayer(); 
            
            lastDice = dice; 
    }      */    

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore; // Adds score to Global Score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 
        
        var input = document.querySelector('.Final-Score').value;
        var winningScore;
        
        //Undefined, 0, null, "" are COERCED to false 
        // Everything else is COERCEd to true
        
        if(input) {
            winningScore = input; 
        } else {
            winningScore = 100;
        }
        
    
        if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none'; 
        document.getElementById('dice-2').style.display = 'none'; 
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
        gamePlaying = false; 
        } else {
            nextPlayer();  
        }
    } 
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        roundScore = 0; // If 1 rolled, active player is 1 / toggles between 1 and 0
        
        document.getElementById('current-0').textContent = '0'; // sets the value of the current to 0 
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active'); //toggles the class for the  
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.getElementById('dice-1').style.display = 'none'; 
        document.getElementById('dice-1').style.display = 'none'; 
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0]; // array for player scores
    roundScore = 0; // starting Round Score
    activePlayer = 0; // sets the starting player as player 0 (player 1)
    gamePlaying = true; //sets the var by default to true
    
    document.getElementById('dice-1').style.display = 'none';  // hides dice initally
    document.getElementById('dice-2').style.display = 'none'; 
    document.getElementById('score-0').textContent = '0'; // set to 0 init.
    document.getElementById('score-1').textContent = '0'; // set to 0 init.
    document.getElementById('current-0').textContent = '0'; // set to 0 init.
    document.getElementById('current-1').textContent = '0'; // set to 0 init.
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}