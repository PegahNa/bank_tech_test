// Import the Transaction class
const Transaction = require("../transaction");

// Test suite for the Transaction class
describe("Transaction", () => {
  let transaction;

  // Before each test, create a new Transaction instance
  beforeEach(() => {
    transaction = new Transaction("10/01/2023", 1000, "deposit");
  });

  // Test case: should initialize a Transaction object with the provided values
  test("should initialize a Transaction object with the provided values", () => {
    // Assert that the transaction object has the correct properties and values
    expect(transaction.date).toBe("10/01/2023");
    expect(transaction.amount).toBe(1000);
    expect(transaction.type).toBe("deposit");
  });
});
