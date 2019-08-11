const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 1.4"));


/*
============================================
; Title:  Exercise 1.4
; Author: Faye Van Roekel
; Date:   11 August 2019
; Description: Duck Typing - Exercise 1.4
;===========================================
*/
/*
  Expected output:

  FirstName LastName
  Exercise 1.3
  Today's Date

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/
// start program

function Car(model)
{
    this.model = model;
}
Car.prototype.start = function ()
{
    console.log("Car added to the racetrack");
}
function Truck(model, year)
{
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function ()
{
    console.log("Truck added to the racetrack");
}
function Jeep(model, year, color)
{
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function ()
{
    console.log("Jeep added to the racetrack");
}

var racetrack = [];

function driveIt(vehicle)
{
    vehicle.start();

    racetrack.push(vehicle);
}

var Mustang = new Car("Mustang");
var FordF150 = new Truck("FordF150", "2016");
var GrandCherokee = new Jeep("Grand Cherokee", "2017", "Red");

console.log("");

driveIt(Mustang);
driveIt(FordF150);
driveIt(GrandCherokee);

console.log("\n-- The following vehicles have been added to the racetrack --");
for(var x = 0; x < racetrack.length; x++)
{
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);

}