class Car{
    constructor(model , dailyRate , available , days){
        this.model = model;
        this.dailyRate = dailyRate;
        this.available = available;
        this.days = days;
    }

    rentalCost(){
        return this.dailyRate * this.days;
    }

}

class CarRentalSystem{
    constructor(){
        this.cars = [];
    }
    addCar(car){
      
             this.cars.push(car);
        }
    availableCars(){
        return this.cars.filter(car => car.available);
    }
    rentedCars(car){
        car.available = false;
    }
}

class InvoicePrinter{
    printInvoice(car){
        console.log(`Invoice for ${car.model}: $${car.rentalCost()}`);
        console.log(`Rented for: ${car.days} days`);
        console.log(`Daily Rate: $${car.dailyRate}`);
        
        
    }
}

class DBStorage{
    storage(car){
        console.log("Storing rental details in database for car: " + car);
        
    }
}

const Farrari = new Car("Farrari" , 5000 , true , 3);
const BMW = new Car("BMW" , 3000 , true , 5);
const Audi = new Car("Audi" , 4000 , true , 2);

const carRentalSystem = new CarRentalSystem();
carRentalSystem.addCar(Farrari);
carRentalSystem.addCar(BMW);
carRentalSystem.addCar(Audi);

carRentalSystem.rentedCars(Farrari);

const availableCars = carRentalSystem.availableCars();
console.log("Available Cars:");

const invoicePrinter = new InvoicePrinter();
availableCars.forEach(car => {
    console.log(`- ${car.model} : $${car.dailyRate} per day`);
    invoicePrinter.printInvoice(car);
});








// Revision practice 1

// 🧩 Problem Statement (Like an Interview)

// Design a simple Car Rental System using the
// Single Responsibility Principle (SRP).

// Requirements

// A car can be rented if available.

// Calculate the rental cost (daily rate × number of days).

// Print an invoice for the rental.

// Store the rental details in a database.

// Constraints

// Your design should follow SRP strictly.

// Every class should have only one reason to change.

// It should be easily extendable (for example: add discount, or taxes later).


class newCar {
    constructor(model , dailyRate , available , days){
        this.model = model;
        this.dailyRate = dailyRate;
        this.available = available;
        this.days = days;   
    }
}

class newCarRentalSystem{
    constructor(){
        this.cars = [];
    }

    addCar(car){
        this.cars.push(car);
    }
}

class newCarRent {
    rentCar(car){
        if(car.available){
            car.available = false;
            console.log(`Car ${car.model} has been rented.`);
        }
        else{
            console.log(`Car ${car.model} is not available for rent.`);
        }
    }
}

class newCarRentalCost {
    rentalCost(car){
        return car.dailyRate * car.days;
    }
}

class newCarInvoicePrinter {
    printInvoice(car, cost){
        console.log(`Invoice for ${car.model}: $${cost}`);
    }
}

class newCarDBStorage {
    store(car){
        console.log(`Storing rental details in database for car: ${car.model}`);
    }
}

const newFarrari = new newCar("Farrari" , 5000 , true , 3);
const newBMW = new newCar("BMW" , 3000 , true , 5);
const newAudi = new newCar("Audi" , 4000 , true , 2);

const newCarRentalSystem = new newCarRentalSystem();
newCarRentalSystem.addCar(newFarrari);
newCarRentalSystem.addCar(newBMW);
newCarRentalSystem.addCar(newAudi);

const newCarRentInstance = new newCarRent();
newCarRentInstance.rentCar(newFarrari);
newCarRentInstance.rentCar(newFarrari); // Trying to rent again

const newCarRentalCostInstance = new newCarRentalCost();
const cost = newCarRentalCostInstance.rentalCost(newBMW);
console.log(`Rental cost for ${newBMW.model} is $${cost}`);

const newCarInvoicePrinterInstance = new newCarInvoicePrinter();
newCarInvoicePrinterInstance.printInvoice(newBMW, cost);

const newCarDBStorageInstance = new newCarDBStorage();
newCarDBStorageInstance.store(newBMW);