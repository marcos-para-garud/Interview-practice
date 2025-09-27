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
    // withdraw(account, amount, balance){
    //     if(amount > balance)
    //     {
    //         console.log("insufficient balance");
            
    //     }
    //     else{
    //         balance = balance - amount;
    //         account.balance = balance;
    //     }
    // }
    withdraw(account, amount) {
    if (amount > account.balance) {
        console.log("Insufficient balance");
    } else {
        account.balance -= amount;
    }
}

    // deposite(account, amount){
    //     balance = balance + amount;
    //     account.balance = balance;
    // }
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
