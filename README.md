# Basic Bank

<br><br>
To Install<br>
Clone the repo to your local machine<br>
npm install<br>

<br><br>
Develop a program that allows users to make deposits and withdrawals, maintains an account statement (with dates, amounts, and balances), and supports interaction through a REPL interface.<br><br>

The BankAccount class handles the account's transactions and balances, the Transaction class represents an individual deposit or withdrawal, and the StatementPrinter class generates the account statement.<br><br>

Use the system by typing node bankAccountCLI.js <br>
<br>

Welcome to the Bank Account CLI!<br>

> deposit 3500<br>
> Deposit of 3500 successfully made.<br>
> deposit 1600<br>
> Deposit of 1600 successfully made.<br>
> withdraw 500<br>
> Withdrawal of 500 successfully made.<br>
> deposit 50<br>
> Deposit of 50 successfully made.<br>
> balance<br>
> Current balance: 4650<br>
> statement<br>
> Statement as of 7/20/2023:<br>
> --- Account Statement ---<br>
> Date Amount Type Balance<br>
> -------------------------------<br>
> 7/20/2023 3500.00 deposit 3500.00<br>
> 7/20/2023 1600.00 deposit 5100.00<br>
> 7/20/2023 500.00 withdrawal 4600.00<br>
> 7/20/2023 50.00 deposit 4650.00<br>
> -------------------------------<br><br>
> exit<br>
> Exiting the program. Goodbye!<br>
