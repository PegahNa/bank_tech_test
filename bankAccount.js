// This file will contain the BankAccount class, which handles the account's
// transactions and balances. It will import and utilize the Transaction class.
const Transaction = require("./transaction");

class BankAccount {
  constructor() {
    this.transaction = [];
  }
}

addTransaction(description, amount) {
    const transaction = new Transaction(description, amount);
    this.transaction.push(transaction);
};