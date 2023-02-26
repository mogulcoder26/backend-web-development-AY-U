//importing expresse to our project
const express =require("express");
//making a object express and naming it as "app".
const app = express();

// Get request and response.
app.get("/" ,function(request,response){
console.log(request);
response.send("<h1>Hello User!</h1>");
})
// getting a response to contact me route.

app.get("/contact-me",function(req,res){
    res.send("<h2>You can contact me on b422056@iiit-bh.ac.in</h2>");
})

// getting a response to about me route.
app.get("/about-me",function(req,res){
    res.send("<h2>i am a first year undergrad in Information Technology,in IIIT-Bbsr.I love to code!</h2>");
})

// Note:"/" is called the root of the website.
//tuning the site to port 3000 [Our server]
app.listen(3000,function(){
    console.log("Server started on port 3000.");
})

