const BankAccount = require("./bankAccount");

// Create a new BankAccount instance
const bankAccount = new BankAccount();

// Function to process user commands
function processCommand(command) {
  const [action, ...args] = command.split(" ");
  switch (action.toLowerCase()) {
    case "deposit":
      const depositAmount = parseFloat(args[0]);
      bankAccount.addDeposit(depositAmount);
      console.log(`Deposit of ${depositAmount} successfully made.`);
      break;
    case "withdraw":
      const withdrawalAmount = parseFloat(args[0]);
      bankAccount.addWithdrawal(withdrawalAmount);
      console.log(`Withdrawal of ${withdrawalAmount} successfully made.`);
      break;
    case "balance":
      const balance = bankAccount.calculateBalance();
      console.log(`Current balance: ${balance}`);
      break;
    case "statement":
      bankAccount.printStatement();
      break;
    case "exit":
      console.log("Exiting the program. Goodbye!");
      process.exit(0);
    default:
      console.log("Invalid command. Please try again.");
  }
}

// Function to start the CLI and listen for user input
function startCLI() {
  console.log("Welcome to the Bank Account CLI!");

  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", (input) => {
    processCommand(input);
    rl.prompt();
  });

  rl.on("close", () => {
    console.log("Exiting the program. Goodbye!");
    process.exit(0);
  });
}

// Start the CLI
startCLI();
