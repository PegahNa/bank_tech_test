// This file will contain the Transaction class,
// which represents an individual deposit or withdrawal.
class Transaction {
  constructor(description, amount) {
    this.description = description;
    this.amount = amount;
  }
}

module.exports = Transaction;
