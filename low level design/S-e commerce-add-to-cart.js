// // class Product {
// //     constructor(id, name, price, stock) {
// //         this.id = id;
// //         this.name = name;
// //         this.price = price;
// //         this.stock = stock;
// //     }
// // }

// // class CartItem {
// //     constructor(product, quantity) {
// //         this.product = product;
// //         this.quantity = quantity;
// //     }
// // }

// // class ShoppingCart {
// //     constructor() {
// //         this.items = [];
// //     }

// //     addToCart(product, quantity) {
// //         const cartItem = new CartItem(product, quantity);
// //         this.items.push(cartItem);
// //     }

// //     removeFromCart(productId) {
// //         this.items = this.items.filter(item => item.product.id !== productId);
// //     }

// //     viewCart() {
// //         return this.items;
// //     }
// // }   

// class Product {
//     constructor(price , name){
//         this.price = price;
//         this.name = name;
//     }
// }

// class CartItem {
//     constructor(){
//         this.product = [];
//         this.CartInvoicePrinter = new CartInvoicePrinter();
//         this.CartDBStorage = new CartDBStorage();
//     }
//     addToCart(product){
//         this.product.push(product);
//     }
//     calculateTotalPrice(){
//         let total = 0;
//         for(let i=0; i<this.product.length; i++){
//             total += this.product[i].price;
//         }
//         return total;
//     }
//     CartInvoicePrinter(total , product){
//         this.CartInvoicePrinter.printInvoice(total , product);
//     }
//     CartDBStorage
// }

// class CartInvoicePrinter{
//     printInvoice(total , product){
//         console.log("Invoice:");
//         console.log("Product\t\tPrice");
//         product.forEach(item => {
//             console.log(`${item.name}\t\t${item.price}`);
//         });
//         console.log(`Total Price: ${total}`);
//     }
// }

// class CartDBStorage{
//     saveCart(cart){
//         // Code to save cart to database
//     }
// }




// // Represents a product (with quantity)
// class Product {
//     constructor(name, price, quantity = 1) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     getTotalPrice() {
//         return this.price * this.quantity;
//     }
// }

// // Represents the shopping cart (only manages products)
// class Cart {
//     constructor() {
//         this.items = [];
//     }

//     addProduct(product) {
//         this.items.push(product);
//     }

//     calculateTotalPrice() {
//         return this.items.reduce(
//             (sum, product) => sum + product.getTotalPrice(),
//             0
//         );
//     }
// }

// // Responsible only for printing invoices
// class CartInvoicePrinter {
//     printInvoice(cart) {
//         console.log("===== Invoice =====");
//         console.log("Product\tQty\tPrice\tTotal");

//         cart.items.forEach(product => {
//             console.log(
//                 `${product.name}\t${product.quantity}\t${product.price}\t${product.getTotalPrice()}`
//             );
//         });

//         console.log("-------------------");
//         console.log(`Total Price: ${cart.calculateTotalPrice()}`);
//         console.log("===================");
//     }
// }

// // Responsible only for saving cart to DB
// class CartDBStorage {
//     saveCart(cart) {
//         console.log("Saving cart to DB...");
//         console.log(JSON.stringify(cart.items, null, 2));
//     }
// }

// // =========================
// // ✅ Usage
// // =========================
// const laptop = new Product("Laptop", 1000, 1);
// const mouse = new Product("Mouse", 50, 2);

// const cart = new Cart();
// cart.addProduct(laptop);
// cart.addProduct(mouse);

// const printer = new CartInvoicePrinter();
// const storage = new CartDBStorage();

// printer.printInvoice(cart);
// storage.saveCart(cart);









// Represents a product (with quantity)
class Product {
    constructor(name, price, quantity = 1) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }
}

// Represents the shopping cart (only manages products)
class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product) {
        this.items.push(product);
    }

    // calculate total using a for loop (no reduce)
    calculateTotalPrice() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].getTotalPrice();
        }
        return total;
    }
}

// Responsible only for printing invoices
class CartInvoicePrinter {
    printInvoice(cart) {
        console.log("===== Invoice =====");
        console.log("Product\tQty\tPrice\tTotal");

        cart.items.forEach(product => {
            console.log(
                `${product.name}\t${product.quantity}\t${product.price}\t${product.getTotalPrice()}`
            );
        });

        // explicit total variable so it's obvious we computed it
        const total = cart.calculateTotalPrice();

        console.log("-------------------");
        console.log(`Total Price: ${total}`);
        console.log("===================");
    }
}

// Responsible only for saving cart to DB
class CartDBStorage {
    saveCart(cart) {
        console.log("Saving cart to DB...");
        console.log(JSON.stringify(cart.items, null, 2));
    }
}

// =========================
// ✅ Usage
// =========================
const laptop = new Product("Laptop", 1000, 1);
const mouse = new Product("Mouse", 50, 2);

const cart = new Cart();
cart.addProduct(laptop);
cart.addProduct(mouse);

const printer = new CartInvoicePrinter();
const storage = new CartDBStorage();

printer.printInvoice(cart);
storage.saveCart(cart);
