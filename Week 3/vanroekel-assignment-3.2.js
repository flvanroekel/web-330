const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 3.2"));

/*
============================================
; Title:  Assignment 3.2 The Factory Pattern
; Author: Faye Van Roekel
; Modified by: 
; Date:   20 August 2019
; Description: The Factory Pattern
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle(properties) {
    this.username = properties.username || "education";
    this.password = properties.password || "teachers";
    this.server = properties.server || "localhost:5400";
    this.version = properties.version || 1.1;
}

function Informix(properties) {
    this.username = properties.username || "education";
    this.password = properties.password || "paraprofessionals";
    this.server = properties.server || "localhost:3000";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
      } else if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
      } else if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
      } else if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
      }
      return new this.databaseClass(properties); 
    };
    
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory(); 
var oracle = oracleFactory.createDatabase({
  databaseType: 'Oracle',
  username: "fvanroekel",
  password: "education01",
  version: 2.1
});

var informixFactory = new DatabaseFactory(); 
var informix = informixFactory.createDatabase({
  databaseType: 'Informix',
  username: "fvanroekel",
  password: "education02"
});

console.log("\nOracle { " +
  '\n\tusername: ' + oracle.username + 
  '\n\tpassword: ' + oracle.password + 
  '\n\tserver: ' + oracle.server + 
  '\n\tversion: ' + oracle.version + 
  '\n}'
);
console.log("\nInformix { " +
  '\n\tusername: ' + informix.username + 
  '\n\tpassword: ' + informix.password + 
  '\n\tserver: ' + informix.server + 
  '\n}'
);

//end program