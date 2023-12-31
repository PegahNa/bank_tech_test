// This file will contain the BankAccount class, which handles the account's
// transactions and balances. It will import and utilize the Transaction class.

// Import the necessary modules
const Transaction = require("./transaction");
const StatementPrinter = require("./statementPrinter");

// Define the BankAccount class
class BankAccount {
  constructor() {
    this.transactions = [];
    this.statementPrinter = new StatementPrinter();
  }

  // Method to add a deposit transaction
  addDeposit(amount) {
    const date = new Date().toLocaleDateString();
    this.addTransaction(date, parseFloat(amount), "deposit");
  }

  // Method to add a withdrawal transaction
  addWithdrawal(amount) {
    const date = new Date().toLocaleDateString();
    this.addTransaction(date, parseFloat(amount), "withdrawal");
  }

  // Method to add a transaction to the transaction list
  addTransaction(date, amount, type) {
    const transaction = new Transaction(date, amount, type);
    this.transactions.push(transaction);
  }

  // Method to calculate the current balance based on the transactions
  calculateBalance() {
    let balance = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === "deposit") {
        balance += transaction.amount;
      } else if (transaction.type === "withdrawal") {
        balance -= transaction.amount;
      }
    }
    return balance;
  }

  // Method to print the account statement
  printStatement() {
    // Check if there are no transactions
    if (this.transactions.length === 0) {
      console.log("No transactions found");
      return "No transactions found";
    }

    const date = new Date().toLocaleDateString();
    console.log(`Statement as of ${date}:`);

    const statement = this.statementPrinter.generateStatement(
      this.transactions
    );
    console.log(statement);
  }
}

// Export the BankAccount class
module.exports = BankAccount;
