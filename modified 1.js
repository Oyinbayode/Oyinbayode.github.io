var scores, roundScore, activePlayer, gamePlaying, roundScore1;
var lastDice;

init();


document.querySelector(".btn-roll").addEventListener('click', function () {
    if (gamePlaying) {
             // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var lastDice = Math.floor(Math.random() * 6) + 1;
        
    
    // 2. Display the result
        var diceDOM = document.getElementById('dice-0');
        var diceDom1 = document.getElementById('dice-1');
        diceDOM.style.display = 'block';
        diceDom1.style.display = 'block';

        diceDOM.src = 'dice-' + dice + '.png';
        diceDom1.src = 'dice-' + lastDice + '.png'
    
    // 3. if the Dice is equal to 1 or Dice1 equals to 1 pass to the next player
    if (dice === 1 || lastDice === 1) {
        roundScore = 0;
        roundScore1 = 0;
        document.getElementById('current-' + activePlayer).textContent = '0';
        nextPlayer();
    } else if (dice !== 1) {
        roundScore += dice + lastDice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
           nextPlayer();
        
    } 
    
    }
  
});
var WinningScore;

document.querySelector(".btn-hold").addEventListener('click',function() {
    if (gamePlaying) {
            // Add CURRENT score to global score
    scores[activePlayer] += roundScore;
    roundScore1 = roundScore + scores[activePlayer];
    // Update the UI
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    var input = document.getElementById('set-score').value;

    // undefined,  0, null or ''
    if (input) {
        WinningScore = input;
    } else {
        WinningScore = 100;
    }
    // Check if player won the game

    if (scores[activePlayer] >= WinningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        // NExt Player
    nextPlayer();
    }
    
    
    }

    }   
);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            document.getElementById("dice-0").style.display = "none";
        document.getElementById('dice-1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init) 

function init() {
    scores = [0,0];
    roundScore = 0;
    roundScore1 = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.getElementById("dice-0").style.display = "none";
    document.getElementById('dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');




}

