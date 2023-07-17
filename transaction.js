// This file will contain the Transaction class,
// which represents an individual deposit or withdrawal.
class Transaction {
  constructor(date, amount, type) {
    this.date = date;
    this.amount = amount;
    this.type = type;
  }
}

module.exports = Transaction;
