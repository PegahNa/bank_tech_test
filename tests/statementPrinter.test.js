// Import the statementPrinter class
const StatementPrinter = require("../statementPrinter");

// Test suite for the StatementPrinter class
describe("StatementPrinter", () => {
  let statementPrinter;

  // Before each test, create a new StatementPrinter instance
  beforeEach(() => {
    statementPrinter = new StatementPrinter();
  });

  // Test case: should generate a statement with the correct format and balance
  test("should generate a statement with the correct format and balance", () => {
    // Create sample transactions
    const transactions = [
      { date: "10/01/2023", amount: 1000, type: "deposit" },
      { date: "13/01/2023", amount: 2000, type: "deposit" },
      { date: "14/01/2023", amount: 500, type: "withdrawal" },
    ];

    // Generate the statement
    const statement = statementPrinter.generateStatement(transactions);

    // Assert that the statement has the correct format and balance
    expect(statement).toContain("--- Account Statement ---");
    expect(statement).toContain("Date\t\tAmount\tType\tBalance");
    expect(statement).toContain("10/01/2023\t1000.00\tdeposit\t1000.00");
    expect(statement).toContain("13/01/2023\t2000.00\tdeposit\t3000.00");
    expect(statement).toContain("14/01/2023\t500.00\twithdrawal\t2500.00");
    expect(statement).toContain("-------------------------------");
  });
});
