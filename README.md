Basic Bank

Develop a program that allows users to make deposits and withdrawals, maintains an account statement (with dates, amounts, and balances), and supports interaction through a REPL interface.

Determine the necessary functionalities such as adding transactions, calculating balances, and printing the account statement. Consider how the user will interact with the program and what inputs are required.

Identify the main components, such as a BankAccount class, Transaction class, and StatementPrinter class. The BankAccount class handles the account's transactions and balances, the Transaction class represents an individual deposit or withdrawal, and the StatementPrinter class generates the account statement.

Use data structures like arrays or lists to store the transactions. Each transaction object could have properties like date, amount, and type (deposit or withdrawal). The BankAccount class could maintain a collection of transactions.

Define commands or methods for adding deposits, withdrawals, and printing the statement. Users can interact with the program by calling these methods or commands from the REPL.

Implement algorithms to calculate balances based on the transaction history and generate the account statement. You can iterate through the transaction list, updating the balance accordingly.

Test the program by making deposits, withdrawals, and printing the statement. Verify that the account balances and statements are generated correctly. Debug any issues or errors that arise during testing.

Create documentation that explains how to interact with the program through the REPL interface. Include examples of commands, inputs, and the expected output.

Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

const repl = require('repl');

function myFunction() {
// Your code here
console.log('Hello, REPL!');
}

const replServer = repl.start('> ');

// Add your functions or variables to the REPL context
replServer.context.myFunction = myFunction;
