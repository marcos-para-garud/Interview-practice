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