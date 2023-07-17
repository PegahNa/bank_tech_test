// This file will contain the BankAccount class, which handles the account's
// transactions and balances. It will import and utilize the Transaction class.
const Transaction = require("./transaction");

class BankAccount {
  constructor() {
    this.transaction = [];
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
}

module.exports = BankAccount;
