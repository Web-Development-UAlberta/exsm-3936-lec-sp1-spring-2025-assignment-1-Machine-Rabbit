// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
//write classes car and engine with their own constructors
//properties: Odometer (always initializes at 0), engine (always initilizes as false (boolean off/on false/true))
//car class should include: Make, Model, Year, Odometer and Engine
//Engine property will be an instance of the engine class
//method to start the car engine (no parameters)
//stop the car engine(set the car to not running) (no parameters)
//drive the car (a single parameter representing the distance to drive) which will add the argument to the odometer if the engine is on and throw and exception otherwise.
//THe properties of the engine class should include a number of cylinders and whether it is running or not
//Properties: Make Model Year
//Methods: startEngine/stopEngine, Drive
//...
//...
//...
class Car {
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    //...
    this.odometer = 0;
    this.myEngine = new Engine(6, false); //instance of the engine inside - class: Car
    this.myTransmission = new Transmission(true, 8);
  }
  //...
  //getters
  get make (){
    return this._make;
  }
  get model (){
    return this._model;
  }
  get year (){
    return this._year;
  }
  get odometer(){
    return this._odometer;
  }
  get myEngine(){
    return this._myEngine;
  }
  get myTransmission(){
    return this._myTransmission;
  }
  //...
  //setters
  set make (value){
    if (!value || typeof value !== "string"){
      //output('test: at make if');
    }
    else{
      this._make = value;
      //output('test: at set make else');
    }
  }
  set model(value){
    if (!value || typeof value !== "string"){
      //output("test: at set model if");
    }
    else{
      this._model = value;
      //output("test: at set model else");
    }
  }
  set year (value){
    this._year = parseInt(value);
    //output("test: at set year");
  }
  set odometer(value){
    this._odometer = value;
  }
  set myEngine(value){
    this._myEngine = value;
  }
  set myTransmission(value){
    this._myTransmission = value;
  }
  //Methods
  //Method to start the car (No parameters)
    Start(){
      if (!this.myEngine.isRunning){
        this.myEngine.isRunning = true;
        output("Car turned on.");
      } else {
        output("Your car is already running!");
      }
    }
    Stop(){
      if(this.myEngine.isRunning){
        this.myEngine.isRunning = false;
        output("Car turned off.");
      } else {
        output("Your car is already off.")
      }
      
    }
    Drive(kilometers){
      if (this.myEngine.isRunning){
        this.odometer += kilometers;
        output(`Distance driven: ${this.odometer}`);
      } else {
        output("You can't drive with the car turned off!");
      }
    }
  //Method to Stop the car engine (no parameters)
  //Method to Drive the car
}
class Engine {
  constructor(cylCount, isRunning){
    this.cylCount = cylCount;
    this.isRunning = isRunning;
  }
  //...
  //Getters
  get cylCount(){
    return this._cylCount;
  }
  get isRunning(){
    return this._isRunning;
  }
  //...
  //Setters
  set cylCount(value){
    this._cylCount = parseInt(value);
  }
  set isRunning(value){
    this._isRunning = value;
  }
}
class Transmission {
  constructor(transTypeAuto, gearCount){
    this.transTypeAuto = transTypeAuto;
    this.gearCount = gearCount;
  }
  //Getters
  get transTypeAuto(){
    return this._transTypeAuto;
  }
  get gearCount(){
    return this._gearCount;
  }
  //Setters
  set transTypeAuto(value){
    this._transTypeAuto = value;
  }
  set gearCount(value){
    this._gearCount = parseInt(value);
  }
}
//...
let myCar = new Car("Cadillac", "xt5", 2019);
output(`My Car is a ${myCar.make} ${myCar.model}`);
myCar.Start();
myCar.Drive(100);
myCar.Stop();
myCar.Start();
myCar.Drive(50);
myCar.Stop();
output(`Total distance driven: ${myCar.odometer}`);
output("end");
//...
output("Catching - starting an already running car: ")
let myCar1 = new Car ("Ford", "F-150", 2020);
output(`My Car is a ${myCar1.make} ${myCar1.model}`);
myCar1.Start();
myCar1.Start();
output("end");
//..
output("Catching - stopping an already stopped car, and driving a stopped car: ")
let myCar2 = new Car ("Honda", "Civic", 2009);
output(`My Car is a ${myCar2.make} ${myCar2.model}`);
myCar2.Start();
myCar2.Stop();
myCar2.Stop();
myCar2.Drive(100);
output("end");
//myCar to JSON */
let myCarJSON = JSON.stringify(myCar);
output(myCarJSON);
//Checks
//output(`Car - Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year} Odometer reads at: ${myCar.odometer}`);
//output(`Engine - Cylinder Count: ${myCar.myEngine.cylCount}, Is it running? ${myCar.myEngine.isRunning}`); //Engine Class properties need to initialize from Car Class
//output(`Transmission - Is it automatic? ${myCar.myTransmission.transTypeAuto}, Gear Count: ${myCar.myTransmission.gearCount}`);
}
