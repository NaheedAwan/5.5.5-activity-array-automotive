//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass.js")
class Sedan extends VehicleModule.Vehicle {
    constructor ( passenger, maxPassenger, maxSpeed, numberOfWheels, scheduleService, fuel  ){
    super (make, model, year, color, mileage)
    this.passenger = 0
    this.maxPassenger = 6
    this.maxSpeed = 200
    this.numberOfWheels = 4
    this.scheduleService = false
    this.fuel = 100
}
loadPassenger(num){
    if( passenger < this.maxPassenger){
        return "There is more Space can load more"
    }else {
        return "no more room available "
    }
}
scheduleService(){
    if (mileage > 30000){
        this.scheduleService == true
        return "Time for maintenence"
    } 
}
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
let sedan = new Sedan("Mercury", "Sedan","2001", "Red", 30000)
console.log(sedan.speed)