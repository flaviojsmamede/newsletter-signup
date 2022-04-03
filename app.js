//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

//specifies the static folder where we have the static files (like styleshseets and images)
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
      var firstName = req.body.FName;
      var lastName = req.body.LName;
      var email = req.body.email;

  console.log(firstName, lastName, email);

});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
