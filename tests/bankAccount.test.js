const BankAccount = require("../bankAccount");

describe("BankAccount", () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  test("should calculate the correct balance after adding transactions", () => {
    bankAccount.addDeposit("10/01/2023", 1000);
    bankAccount.addDeposit("13/01/2023", 2000);
    bankAccount.addWithdrawal("14/01/2023", 500);

    expect(bankAccount.calculateBalance()).toBe(2500);
  });
});
