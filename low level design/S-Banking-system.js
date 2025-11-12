class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}

class Accounts{
    constructor(){
        this.accounts = [];
    }
    addAccount(account){
        this.accounts.push(account);
    }
}

class Transaction{
 
    withdraw(account, amount) {
    if (amount > account.balance) {
        console.log("Insufficient balance");
    } else {
        account.balance -= amount;
    }
}

  
    deposit(account, amount) {
    account.balance += amount;
}

}

class TransactionLogger{
    constructor(sentBy , receivedBy , amount , balance , time)
    {
        this.sentBy = sentBy;
        this.receivedBy = receivedBy;
        this.amount = amount;
        this.balance = balance;
        this.time = time;
    }
    logger(){
        console.log(`Transaction Details are: ${this.sentBy} , ${this.receivedBy} , ${this.amount}
            , ${this.balance} , ${this.time}`);
    }

}

class ReportGenerator{
    generate(account){
        console.log(`Report Generated: ${account.accountNumber} , ${account.balance},
            `);
        
    }
}

class Interest{
    // constructor(balance, rate, years, n=1){
    //     this.balance = balance;
    //     this.rate = rate;
    //     this.years = years;
    //     this.n = n;
    // }
    interest(balance, rate, years, n=1){
         return balance * Math.pow((1 + rate / n), n * years) - balance;
    }
}

const account1 = new BankAccount("12345" , 5000);
const account2 = new BankAccount("67890" , 10000);

const accounts = new Accounts();
accounts.addAccount(account1);
accounts.addAccount(account2);

const transaction = new Transaction();
transaction.withdraw(account1, 200, account1.balance)
transaction.deposite(account2,  2000)

const transactionLogger = new TransactionLogger(account1, account2, 5000, account2.balance,
    new Date()
)

const reportGenerator = new ReportGenerator();
reportGenerator.generate(account1);
reportGenerator.generate(account2);

const calculateInterest = new Interest();
calculateInterest.interest(10000, 12, 20, 1)











// 🏦 Problem Statement — SRP in a Banking System

// You have been asked to design a basic banking system in JavaScript.

// 💼 Requirements:

// The system should allow:

// Creating a new bank account

// Performing deposit and withdrawal operations

// The system should also:

// Calculate interest for savings accounts

// Generate a monthly statement for the customer

// Save account details to a database (you can simulate this using console.log)

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }  
}

class Accounts {
    constructor() {
        this.accounts = [];
    }

    addAccount(account){
        this.accounts.push(account);
    }
}

class Deposite{
    deposite(account, amount){
        account.balance = account.balance + amount;
    }
}

class Withdraw {
    withdraw(account, amount){
        if(amount > account.balance){
            console.log("Insufficient balance");
        }
        else{
            account.balance = account.balance - amount;
        }
    }
}

class CalculateInterest {
    interest(balance, rate, years, n=1){
        return balance * Math.pow((1 + rate / n), n * years) - balance;
    }
}

class StatementGenerator {
    generate(account){
        console.log(`Account Number: ${account.accountNumber}, Balance: ${account.balance}`);
    }
}

class Database {
    save(account){
        console.log(`Account ${account.accountNumber} with balance ${account.balance} saved to database.`);
    }
}

const newAccount1 = new BankAccount("12345", 5000);
const newAccount2 = new BankAccount("67890", 10000);

const newAccounts = new Accounts();
newAccounts.addAccount(newAccount1);
newAccounts.addAccount(newAccount2);

const newDeposite = new Deposite();
newDeposite.deposite(newAccount1, 2000);
newDeposite.deposite(newAccount2, 3000);

const newWithdraw = new Withdraw();
newWithdraw.withdraw(newAccount1, 1000);
newWithdraw.withdraw(newAccount2, 5000);

const newCalculateInterest = new CalculateInterest();
newCalculateInterest.interest(10000, 12, 20, 1);

const newStatementGenerator = new StatementGenerator();
newStatementGenerator.generate(newAccount1);
newStatementGenerator.generate(newAccount2);





/***
 * REVISION
 */

// 🏦 Problem Statement — SRP in a Banking System

// You have been asked to design a basic banking system in JavaScript.

// 💼 Requirements:

// The system should allow:

// Creating a new bank account

// Performing deposit and withdrawal operations

// The system should also:

// Calculate interest for savings accounts

// Generate a monthly statement for the customer

// Save account details to a database (you can simulate this using console.log)


class AccountDetails {
    constructor (name , accountType , accountNum , amount) {
        this.name = name;
        this.accountType = accountType;
        this.accountNum = accountNum;
        this.amount = amount;
    }
}
class Bank {
    constructor () {
        this.accounts = [];
    }
    addAccount (accountDetails) {
        this.accounts.push(accountDetails);
    }
}
class Deposite {
    depositeAmount (accountDetails , DepoAmount) {
        let amount = accountDetails.amount + DepoAmount;
        accountDetails.amount = amount;
        return amount;
    }
}
class WithDrawl {
    withDrawAmount (accountDetails , withDrAmount) {
       
        if(accountDetails.amount - withDrAmount < 0)
        {
            console.log("Insufficient balance");
            return -1;
        }
        else{
            accountDetails.amount = accountDetails.amount - withDrAmount;
            return accountDetails.amount;
        }
    }
}
class Interest {
    calculateInterest(balance, rate, years, n=1){
        return balance * Math.pow((1 + rate / n), n * years) - balance;
    }
}
class StatementGenerator {
    generate(account){
       console.log(`Account Number: ${account.accountNum}, Balance: ${account.amount}`);

    }
}

class Database {
    save(account){
        console.log(`Account Number: ${account.accountNum}, Balance: ${account.amount}`);

    }
}

const accountDetails1 = new AccountDetails("Akash" , "Savings" , 123456 , 50000);
const accountDetails2 = new AccountDetails("Mayank" , "Savings" , 023456 , 60000);
const bank = new Bank();
bank.addAccount(accountDetails1);
bank.addAccount(accountDetails2);
const deposite = new Deposite();
deposite.depositeAmount(accountDetails1 , 50000);
const interest = new Interest();
const earnedInterest = interest.calculateInterest(accountDetails1.amount , 10 , 10 , 1);
account1.amount += earnedInterest;

statement.generate(account1);
statement.generate(account2);
const newStatementGenerator = new StatementGenerator();
newStatementGenerator.generate(accountDetails1);
newStatementGenerator.generate(accountDetails2);