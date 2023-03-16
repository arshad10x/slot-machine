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


//Slot machine global var, 

const ROWS = 3;
const COLS = 3;

const SYMBOLS_Count = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

// Multiply bet by values of each symbol
const SYMBOL_VALUES ={
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
} 




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
};


// 4. Spin the slot machine
const spin = () => { 
  const symbols = [];

  // looping all entries inside of symbol_count
  for (const [symbol, count] of Object.entries(SYMBOLS_Count)){
    // adds as many symbols present
    for (let i = 0; i < count; i++){
      symbols.push(symbol)
    }
  }
  // represent cols & rows inside slot machine
  const reels = [[],[],[]];

  // keep looping till its equal or greater than nos cols and rows.. then stop
  for (let i =0; i< COLS; i++){
    // copy the sysmbols to another array
    const reelSymbols = [...symbols];
    // randomly choose index and element there then remove
    for (j = 0; j < ROWS; j++){
      const randomIndex = Math.floor(Math.random() * reelSymbols.length)
      const selectedSymbols = reelSymbols[randomIndex];
      reels[i].push(selectedSymbols);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};
const reels=spin();
console.log(reels);



// To know current balance of user's
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);


