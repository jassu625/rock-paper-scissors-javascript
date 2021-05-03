const plays = ["rock", "paper", "scissors"];
const beats = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};
let computerScore = 0,
  playerScore = 0;

// add UI through html
const page = document.querySelector(".page");
const heading = document.createElement("h1");
heading.textContent = "Rock Paper Scissors";
heading.classList.add("heading");
page.appendChild(heading);
//scorecard
const score = document.createElement("div");
score.textContent = `computerScore : ${computerScore}  ::
  playerScore : ${playerScore}`;
score.classList.add("score");
page.appendChild(score);
//message
const message = document.createElement("div");
message.classList.add("message");
page.appendChild(message);
// buttons
plays.forEach((play) => {
  const button = document.createElement("button");
  button.textContent = `${play}`;
  page.appendChild(button);
  button.classList.add("button");
  button.classList.add(`${play}`);
});

const rockButton = page.querySelector(".button.rock");
const paperButton = page.querySelector(".button.paper");
const scissorsButton = page.querySelector(".button.scissors");

function playRound(playerSelection, computerSelection) {
  // convert player selection to lower case
  playerSelection = playerSelection.toLowerCase();
  let result;
  //compare players and computers picks.
  if (playerSelection === computerSelection) {
    result = `This is a draw ${playerSelection} is chosen by both the player and computer`;
  } else if (beats[playerSelection] === computerSelection) {
    playerScore++;
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  document
    .querySelector(".page")
    .querySelector(".score").textContent = `computerScore : ${computerScore}  ::
  playerScore : ${playerScore}`;
  return result;
}

rockButton.addEventListener("click", game);
paperButton.addEventListener("click", game);
scissorsButton.addEventListener("click", game);

function game(e) {
  if (playerScore >= 5 || computerScore >= 5) {
    rockButton.removeEventListener("click", game);
    paperButton.removeEventListener("click", game);
    scissorsButton.removeEventListener("click", game);
    let finalResult = "computer wins the best of five";
    if (playerScore > computerScore) {
      finalResult = "player wins the best of five";
    }
    document
      .querySelector(".page")
      .querySelector(".message").textContent = finalResult;
    return;
  }
  console.log(e.target.textContent);
  //actual round of game

  {
    const playerSelection = e.target.textContent;
    const computerSelection = plays[Math.floor(Math.random() * plays.length)];

    const roundResult = playRound(playerSelection, computerSelection);
    document
      .querySelector(".page")
      .querySelector(".message").textContent = roundResult;
  }

  // let finalScore = `computer score: ${computerScore}\nplayerscore: ${playerScore}`,
  //   result;
  // if (computerScore > playerScore) {
  //   result = `computer wins\n${finalScore}`;
  // } else if (computerScore < playerScore) {
  //   result = `player wins\n${finalScore}`;
  // } else {
  //   result = `tie\n${finalScore}`;
  // }

  // return result;
}
