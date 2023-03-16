// 1. Deposit some money
// 2. Determine number of lines to bet
// 3. Collect the bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. Giver user their winnings
// 7. Play again

// ------------------------------------------------------

// 1. Deposit some money

const prompt = require("prompt-sync")();





const deposit = () => {

    // while loop runs infinite loop and if goes to else part it return value.
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");

    // convertin string to number
    const numberDepositAmount = parseFloat(depositAmount);

    // checks if NaN then display error msg
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again");
    } else {
      return numberDepositAmount;
    }
  }
};

// 2. Determine number of lines to bet
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        // checking the no. of line to bet (1-3) only
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
          console.log("Invalid number of lines, try again");
        } else {
          return numberOfLines;
        }
      }
};


// 3. Collect the bet amount
const getBet = (balance, lines) => {
    // Can't bet more than current balance
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
    
        // checking the number of bet and balance
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
          console.log("Invalid bet, try again");
        } else {
          return bet;
        }
      }
}

