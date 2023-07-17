// This file will contain the StatementPrinter class,
// which generates the account statement.
// It will import and utilize the Transaction and BankAccount classes.
const BankAccount = require("./bankAccount");

class StatementPrinter {
  generateStatement(transactions) {
    let statement = "--- Account Statement ---\n";
    statement += "Date\t\tAmount\tType\n";
    statement += "-----------------------------\n";

    for (const transaction of transactions) {
      statement += `${transaction.date}\t${transaction.amount}\t${transaction.type}\n`;
    }

    statement += "-----------------------------\n";
    statement += `Current Balance: ${this.calculateBalance(transactions)}\n`;
    return statement;
  }

  calculateBalance(transactions) {
    let balance = 0;
    for (const transaction of transactions) {
      if (transaction.type === "deposit") {
        balance += transaction.amount;
      } else if (transaction.type === "withdrawal") {
        balance -= transaction.amount;
      }
    }
    return balance;
  }
}

module.exports = StatementPrinter;
