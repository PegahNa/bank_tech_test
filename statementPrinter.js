// This file will contain the StatementPrinter class,
// which generates the account statement.
// It will import and utilize the Transaction and BankAccount classes.
const BankAccount = require("./bankAccount");

class StatementPrinter {
  constructor() {
    this.bankAccount = new BankAccount();
  }

  addTransaction(description, amount) {
    this.bankAccount.addTransaction(description, amount);
  }

  generateStatement() {
    let statement = "--- Account Statement ---\n";
    statement += "Description\tAmount\n";
    statement += "--------------------------\n";
    for (const transaction of this.bankAccount.transactions) {
      statement += `${transaction.description}\t${transaction.amount}\n`;
    }
    statement += "--------------------------\n";
    statement += `Current Balance: ${this.bankAccount.calculateBalance()}\n`;
    return statement;
  }
}

module.exports = StatementPrinter;
