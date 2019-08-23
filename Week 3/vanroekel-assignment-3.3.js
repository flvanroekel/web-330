const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 3.3"));

/*
============================================
; Title:  Assignment 3.3 The Singleton Pattern
; Author: Faye Van Roekel
; Modified by: 
; Date:   22 August 2019
; Description: The Singleton Pattern
;===========================================
/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Same database instance? true
*/

// start program
var DatabaseSingleton = (function () {
    var instance;
    function createInstance() {
      var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
    }
  
    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  function databaseSingletonTest() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    console.log("Same database instance? " + (oracle === postgres));
  }
  databaseSingletonTest();
  
  // end program
  