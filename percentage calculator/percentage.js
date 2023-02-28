const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    console.log(req);
    res.sendFile(__dirname + "/percentage.html");
});

app.post("/", function (req, res) {
    console.log(req)
    var bel = Number(req.body.bel);
    var eg = Number(req.body.eg);
    var math = Number(req.body.maths);
    var phy = Number(req.body.phy);
    var eng = Number(req.body.eng);
    var result = ((bel + eg + math + phy + eng) / 5);


    if (result >= 90 && result <= 100) {
        res.send("Your average is " + result + " ! welcome to the 99s Club!");
    }
    else if (result >= 80 && result < 90) {
        res.send("Your average is " + result + " !little improvement anad you will be among the bests!");
    }
    else if (result >= 70 && result < 80) {
        res.send("Your average is " + result + " !You have the potential,hussle regularly!");
    }
    else if (result >= 60 && result < 70) {
        res.send("Your average is " + result + " ! You need to work hard!");
    }
    else {
        res.send("Your average is " + result + " ! hopeless!");

    }


})


app.listen("3000", function () {
    console.log("The server is up and running on port 3000.");
});