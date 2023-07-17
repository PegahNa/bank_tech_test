// This file will contain the BankAccount class, which handles the account's
// transactions and balances. It will import and utilize the Transaction class.
const Transaction = require("./transaction");
const StatementPrinter = require("./statementPrinter");

class BankAccount {
  constructor() {
    this.transaction = [];
    this.statementPrinter = new StatementPrinter();
  }

  addDeposit(date, amount) {
    this.addTransaction(date, amount, "deposit");
  }

  addWithdrawal(date, amount) {
    this.addTransaction(date, amount, "withdrawal");
  }

  addTransaction(date, amount, type) {
    const transaction = new Transaction(date, amount, type);
    this.transactions.push(transaction);
  }

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

  printStatement() {
    const statement = this.statementPrinter.generateStatement(
      this.transactions
    );
    console.log(statement);
  }
}

module.exports = BankAccount;
