const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

//Testing
// console.log(getUserChoice('rock'));
// console.log(getUserChoice('paper'));
// console.log(getUserChoice('scissors'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    // break;
    case 1:
      return "paper";
    // break;
    case 3:
      return "scissors";
    // break;

    //  default:
    //     return 'unknown response';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Paper beats rock, computer won.";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Scissors beats paper, computer won.";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Rock beats scissors, computer won.";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "bomb") {
    return "You win automatically!";
  }
};

//Testing
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('paper', 'paper'));
// console.log(determineWinner('paper', 'rock'));

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You used " + userChoice);
  console.log("The computer used " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

// Testing
// playGame();
// playGame();
// playGame();
