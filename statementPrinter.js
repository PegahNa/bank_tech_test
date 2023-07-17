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
}
