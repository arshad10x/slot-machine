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

