// 📝 Practice Question: Payment System

// You are building an E-commerce Checkout System.

// A customer can pay using different payment methods:

// Credit Card

// PayPal

// Google Pay

// (more can be added later like Apple Pay, Crypto, etc.)

// 🎯 Your Task

// Use the Strategy Pattern to design this system.

// Define a PaymentStrategy interface/abstract class.

// Implement concrete strategies (CreditCardPayment, PayPalPayment, etc.).

// Create a Checkout class that accepts a payment strategy and executes it.

// Demonstrate usage:

// A customer pays with Credit Card.

// Another customer pays with PayPal.

// At runtime, change the payment method from Google Pay → PayPal.


// Strategies
class CreditCardPayment {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPalPayment {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class GooglePayPayment {
    pay(amount) {
        console.log(`Paid ${amount} using Google Pay.`);
    }
}

// Context
class Checkout {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    // Execute payment
    processPayment(amount) {
        this.paymentStrategy.pay(amount);
    }

    // Change strategy at runtime
    setPaymentStrategy(newStrategy) {
        this.paymentStrategy = newStrategy;
    }
}

// ============================
// ✅ Usage
// ============================

// Customer 1 pays with Credit Card
const checkout1 = new Checkout(new CreditCardPayment());
checkout1.processPayment(100);

// Customer 2 pays with PayPal
const checkout2 = new Checkout(new PayPalPayment());
checkout2.processPayment(250);

// Change strategy at runtime
checkout1.setPaymentStrategy(new GooglePayPayment());
checkout1.processPayment(75);






// Solution with Open-Close Priciple 



class PaymentStrategy {
    pay(amount) {}
}

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class Checkout {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    processPayment(amount) {
        this.paymentStrategy.pay(amount);
    }
}

