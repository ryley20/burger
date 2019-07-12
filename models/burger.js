//It contains the methods to  modify our ORM for use with our database.
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
   selectAll: function(cb) {
      orm.selectAll('burgers', function(res) {
      cb(res);
      })
   },
   insertOne: function(name,cb) {
      orm.insertOne('burgers', name, cb); //"burgers" as a tableInput. 
   },
   updateOne: function(id, cb) {
      orm.updateOne('burgers', id, cb); 
   },
   
}  

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger; // this is going to be used by the burgers_controler.js