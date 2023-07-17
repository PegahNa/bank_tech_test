// This file will contain the Transaction class,
// which represents an individual deposit or withdrawal.
class Transaction {
  constructor(data, amount, type) {
    this.data = data;
    this.amount = amount;
    this.type = type;
  }
}

module.exports = Transaction;
