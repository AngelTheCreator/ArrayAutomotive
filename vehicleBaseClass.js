class Vehicle{
    constructor(make, model, year, color, mileage){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.passenger = 0;
        this.started = false;
        this.numberOfWheels = 0;
    }

   start(){
    if(this.fuel > 0){
        return this.started = true;
    } else {
        return this.started = false;
        }
   }
   accelerate() {
    if (this.started) {
        if (this.fuel > 0) {
            console.log(this.speed += 1);
            this.fuel = this.fuel - 1;
        } else {
            console.log("out of fuel.");
            this.stop();
        }
    } else {
        alert("You need to start the engine first.");
    }
}
}