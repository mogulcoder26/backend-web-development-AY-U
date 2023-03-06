const express=require('express');
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const https=require("https");
const request=require("request");
app.use(express.static('public'));






app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})



app.listen("3000",function(){
    console.log("server is up and running on port 3000");
})