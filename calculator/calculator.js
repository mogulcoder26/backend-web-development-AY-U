//incorp express to our file.
const express = require("express");
//making a method and assigning it to app const.
const app = express();

//imcorp body-parser to our file.
const bodyParser=require("body-parser");

//using body-Parser with express as they work together
app.use(bodyParser.urlencoded({extended:true}));

//  GET request response ,sending a file name.
//  NOTE:__dirname shows the full path of the directory where the html file exists.
//  It is helpful when we store our code and deploy the web app through Cloud services
//  like Heroku and Vercel where Local File path cant be used.
app.get("/",function(req,res){
        res.sendFile(__dirname + "/index.html");
});

//handling post request from index.html
app.post("/",function(req,res){

var num1=req.body.num1;
var num2=req.body.num2;
res.send("sum is "+num1+num2);
});
//tuning port to 3000 server
app.listen("3000",function(){
        console.log("Server hosted Successfully on port 3000");
});
