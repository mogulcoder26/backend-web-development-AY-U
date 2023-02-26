//incorp express to our file.
const express = require("express");
//making a method and assigning it to app const.
const app = express();

//  GET request response ,sending a file name.
//  NOTE:__dirname shows the full path of the directory where the html file exists.
//  It is helpful when we store our code and deploy the web app through Cloud services
//  like Heroku and Vercel where Local File path cant be used.
app.get("/",function(req,res){
        res.sendFile(__dirname+"/index.html");
})

app.listen("3000",function(){
        console.log("Server hosted Successfully on port 3000");
});