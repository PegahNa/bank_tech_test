// Import the BankAccount class
const BankAccount = require("../bankAccount");

// Test suite for the BankAccount class
describe("BankAccount", () => {
  let bankAccount;

  // Before each test, create a new BankAccount instance
  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  // Test case: should calculate the correct balance after adding transactions
  test("should calculate the correct balance after adding transactions", () => {
    bankAccount.addDeposit(1000);
    bankAccount.addDeposit(2000);

    expect(bankAccount.calculateBalance()).toBe(3000);
  });

  // Test case: should calculate the correct balance after subtracting transaction
  test("should calculate the correct balance after subtracting transaction", () => {
    bankAccount.addDeposit(1000);
    bankAccount.addWithdrawal(500);
    bankAccount.addWithdrawal(200);

    expect(bankAccount.calculateBalance()).toBe(300);
  });

  // Test case: should calculate the correct balance with a mix of deposits and withdrawals
  test("should calculate the correct balance with a mix of deposits and withdrawals", () => {
    bankAccount.addDeposit(1000);
    bankAccount.addWithdrawal(500);
    bankAccount.addDeposit(2000);
    bankAccount.addWithdrawal(800);

    expect(bankAccount.calculateBalance()).toBe(1700);
  });

  // Test case: should calculate the correct balance with no transactions
  test("should calculate the correct balance with no transactions", () => {
    expect(bankAccount.calculateBalance()).toBe(0);
  });

  // Test case: should print an empty statement when there are no transactions
  test("should print an empty statement when there are no transactions", () => {
    const statement = bankAccount.printStatement();

    expect(statement).toBe("No transactions found");
  });
});
