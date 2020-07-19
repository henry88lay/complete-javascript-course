/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Declaring Our Variables
let scores, roundScore, activePlayer;
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

const hideDice = document.querySelector('.dice').style.display = 'none';

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

hideDice
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', () => {
  // 1. Random Number
    let dice = Math.floor(Math.random() * 6) + 1;
  // 2. Display the result
    const diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `dice-${dice}.png`
  // 3. Update the round score IF the rolled number NOT a 1
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector(`#current-${activePlayer}`).textContent = scores[active];
    } else {
      nextPlayer();
    }
  }
);

document.querySelector('.btn-hold').addEventListener('click', () => {
  // Add CURRENT Score to Global Score
  scores[activePlayer] += roundScore;
  // Update the UI
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]
  // Winning Condition

  // Next Player
  nextPlayer();

});

let nextPlayer = () => {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  hideDice
};