function computerPlay() {
  let plays = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * plays.length);
  let randomPlay = plays[randomIndex];
  return randomPlay;
}

/*
console.log(computerPlay());
*/

/* const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
 */

function game() {
  let computerScore = 0,
    playerScore = 0;

  //actual round of game
  function playRound(playerSelection, computerSelection) {
    // convert player selection to lower case
    playerSelection = playerSelection.toLowerCase();

    let beats = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock",
    };

    //compare players and computers picks.
    if (playerSelection === computerSelection) {
      return `This is a draw ${playerSelection} is chosen by both the player and computer`;
    } else if (beats[playerSelection] === computerSelection) {
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Pick one of rock, paper, scissors?");
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    alert(roundResult);
  }

  let score = `computer score: ${computerScore}\nplayerscore: ${playerScore}`,
    result;
  if (computerScore > playerScore) {
    result = `computer wins\n${score}`;
  } else if (computerScore < playerScore) {
    result = `player wins\n${score}`;
  } else {
    result = `tie\n${score}`;
  }

  return result;
}

alert(game());
