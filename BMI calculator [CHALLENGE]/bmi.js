const express = require("express");

const app = express();


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function (req, res) {
    var weight = Number(req.body.w);
    var height = Number(req.body.height);
    var bmi = (weight / (height * height));
    res.send("Your BMI: " + bmi);
});

app.listen("3000", function () {
    console.log("Server started succesfully on port 3000.");
});


