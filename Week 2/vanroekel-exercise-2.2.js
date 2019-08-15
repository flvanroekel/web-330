const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 2.2"));


/*
============================================
; Title:  Exercise 2.2
; Author: Faye Van Roekel
; Date:   15 August 2019
; Description: Prototypes
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

var person = 
{
    getAge: function ()
    {
        return this.age;
    }
};

var faye = Object.create(person, {
    "age":
    {
        "value": "45"
    },
    "fullname":
    {
        "value": "Faye Lynn Van Roekel"
    }
});

faye.getAge(); 

console.log("The person's full name is: '%s'", faye.fullname);
console.log("The person's age is: '%s'", faye.age);


// end program


