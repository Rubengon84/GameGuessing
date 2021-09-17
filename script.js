let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9 + 1);
}

function compareGuesses(humanGuess, computerGuess, target) {
  let humanScore;
  let computerScore;

  if (humanGuess === computerGuess) {
    return true;
  }
  if (target === humanGuess) {
    return true;
  } else if (target < humanGuess) {
      humanScore = humanGuess - target;
  }else {
      humanScore = target - humanGuess;
  }
  if (target < computerGuess) {
      computerScore = computerGuess - target;
  } else {
      computerScore = target - computerGuess;
  }

  if (humanScore === computerScore) {
    return true;
  } else if (humanScore < computerScore) {
    return true;
  } else {
    return false;
  }
  }

  const updateScore = (winner) => {
    if ( winner === 'human') {
      humanScore++;
    }
    else if ( winner === 'computer') {
      computerScore++;
    }
  }

  function advanceRound() {
    currentRoundNumber += 1;
  }
