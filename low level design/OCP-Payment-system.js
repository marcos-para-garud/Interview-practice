// 🧩 OCP Problem — Payment Processing System

// You're designing a payment module for an e-commerce platform.

// Requirements:

// The system should be able to process payments.

// Currently, it must support:

// Credit Card Payments

// UPI Payments

// In the future, the business wants to add:

// PayPal

// Crypto Wallet

// COD

// Gift Cards

// Your design must follow OCP:

// You cannot change existing classes when adding new payment types

// You should extend behavior by adding new implementations

// Constraints:

// No if/else or switch checking payment type inside processing logic.

// Use polymorphism / strategy / composition, not tight inheritance unless justified.

// Should be robust and readable.

// 🎯 Output Expected (From You)

// You should write:

// Classes (or interfaces) representing payments

// Concrete implementations (CreditCardPayment, UPIPayment, etc.)

// A PaymentProcessor that works without modification when new types are added




class PaymentProcess {
    constructor (paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    payment(amount){
        this.paymentMethod.pay(amount);
    }
}
class payMethod {
    pay(amount) {
        console.log("Payment 1")
    }
}
class UPI extends payMethod {
    pay(amount) {
        console.log("Payment 2")
    }
}
class Paypal extends payMethod {
    pay(amount) {
        console.log("Payment 3")
    }
}
class CreditCard extends payMethod {
    pay(amount) {
        console.log("Payment 4")
    }
}

const upi = new UPI();
const paymentProcess = new PaymentProcess(upi)
paymentProcess.payment(500)