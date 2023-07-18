const BankAccount = require("./bankAccount");

const bankAccount = new BankAccount();

// Make deposits
bankAccount.addDeposit("10/01/2023", 1000.0);
bankAccount.addDeposit("13/01/2023", 2000.0);

// Make a withdrawal
bankAccount.addWithdrawal("14/01/2023", 500.0);

// Print the statement
bankAccount.printStatement();
