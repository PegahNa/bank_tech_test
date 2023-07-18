// This file will contain the StatementPrinter class,
// which generates the account statement.
// It will import and utilize the Transaction and BankAccount classes.
const BankAccount = require("./bankAccount");

// The StatementPrinter class is responsible for generating the account statement
class StatementPrinter {
  generateStatement(transactions) {
    let statement = "--- Account Statement ---\n";
    statement += "Date\t\tAmount\tType\tBalance\n";
    statement += "-------------------------------\n";

    let balance = 0;
    for (const transaction of transactions) {
      const { date, amount, type } = transaction;
      if (type === "deposit") {
        balance += amount;
      } else if (type === "withdrawal") {
        balance -= amount;
      }
      statement += `${date}\t${this.formatAmount(
        amount
      )}\t${type}\t${this.formatAmount(balance)}\n`;
    }

    statement += "-------------------------------\n";
    return statement;
  }

  formatAmount(amount) {
    return Number(amount).toFixed(2);
  }

  // Calculate the current balance based on the transactions
  calculateBalance() {
    let balance = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === "deposit") {
        balance += transaction.amount;
      } else if (transaction.type === "withdrawal") {
        balance -= transaction.amount;
      }
    }
    return balance.toFixed(2); // Fix the balance to two decimal places
  }
}

module.exports = StatementPrinter;
