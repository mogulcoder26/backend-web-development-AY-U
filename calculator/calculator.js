//incorp. express to our file.
const express = require("express");
//making a method and assigning it to app const.
const app = express();

//incorp. body-parser to our file.
const bodyParser = require("body-parser");

//using body-Parser with express as they work together
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
        res.sendFile(__dirname + "/index.html");
});

//handling post request from index.html
app.post("/", function (req, res) {

        console.log(req.body.name);
        var num1 = Number(req.body.num1);
        var num2 = Number(req.body.num2);
        var result=num1+num2;
        res.send("sum is " + result);
});
//tuning port to 3000 server
app.listen("3000", function () {
        console.log("Server hosted Successfully on port 3000");
});


