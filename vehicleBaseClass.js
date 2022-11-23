class Vehicle{
    constructor(make, model, year, color, mileage){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
    }

    start(){
        if(this.started){
            if(this.fuel > 0) {
                console.log(this.speed += 1);
            }
        }
    }
}