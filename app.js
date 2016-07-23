//Import Libraries & Tools//
var express    = require("express");
var bodyParser = require("body-parser");

var app = express()
//Import and Instantiate Sequelize//
var Sequelize  = require(__dirname + "/sequelize");
var connection = require(__dirname + "/connection");

//Import Models//
// var Character  = connection.import(__dirname + "/models/character.model.js")
// var Combo      = connection.import(__dirname + "/models/combo.model.js")

var Combo = connection.define("combos", {
  description: {
    type: Sequelize.TEXT,
  },
  execution_pattern: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  start_percent_range: {
    type: Sequelize.STRING
  },
  valid_stages: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  example: {
    type: Sequelize.STRING
  },
  executor: {
    type: Sequelize.STRING
  },
  susceptible: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
});
//Define Headers, Middleware, and Accepted Methods for Express//
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
             "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
            ["GET", "POST", "PUT", "DELETE"]);

  next();
});
app.use(bodyParser.json())



//POST Request definition for the root route//
app.post("/add_combo", function(req, res){
Combo.create({
    description: req.body.description,
    execution_pattern: req.body.execution_pattern,
    start_percent_range: req.body.start_percent_range,
    valid_stages: req.body.valid_stages,
    example: req.body.example,
    executor: req.body.executor,
    susceptible: req.body.susceptible
  });
}).then(function(combo){
      res.send(combo)
    })
  })

//GET Request definition for the characters route//
app.get("/combos", function(req, res){

})

//DELETE Request definition for a single character//
app.delete("/combos/:id", function(req, res){

})

console.log("Listening on port 3000");
app.listen(3000);
