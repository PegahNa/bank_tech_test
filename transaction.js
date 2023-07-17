// This file will contain the Transaction class,
// which represents an individual deposit or withdrawal.

// Transaction class representing an individual transaction
class Transaction {
  // Constructor for creating a new transaction object
  constructor(date, amount, type) {
    this.date = date; // Date of the transaction
    this.amount = amount; // Amount of the transaction
    this.type = type; // Type of the transaction (deposit or withdrawal)
  }
}
// Export the Transaction class
module.exports = Transaction;
