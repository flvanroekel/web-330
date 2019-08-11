const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 1.1"));


/*
============================================
; Title:  Exercise 1.3
; Author: Faye Van Roekel
; Date:   08 August 2019
; Description: Class Refresher - Exercise 1.3
;===========================================
*/
/*
  Expected output:

  FirstName LastName
  Exercise 1.3
  Today's Date

  -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>

*/
// start program

function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function()
        {
            return this.price; 
        }

    this.getModel = function()
        {
            return this.model;
        }        

    this.getDetails = function ()
        {
            return "Manufacturer: " + this.manufacturer + "\nModel: " +  this.getModel() + 
                "\nColor: " + this.color + "\nPrice: " + this.getPrice();
        }
}
var cellPhone = new CellPhone("Google", "Pixel 2XL", "Black", "799.99");
console.log(cellPhone.getDetails()); 

    