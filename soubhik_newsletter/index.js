const express=require('express');
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const https=require("https");
const request=require("request");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
});

app.post("/",(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;
    console.log(res.statusCode);
    console.log(fname,lname,email);
    
    if(res.statusCode===200){
        res.sendFile(__dirname+"/success.html");
    }
    else{
        res.sendFile(__dirname+"/failure.html");
    }
    
});


app.listen("3000",function(){

    console.log("server is up and running on port 3000")
});

// e9a7df7e7d74f1bacc29a96078e13149-us8
// root url:https://us8.api.mailchimp.com/3.0/