const bodyParser = require('body-parser');
const express = require('express');
const https = require('https');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

for(var i=0;i<3;i++){

app.get("/",function(req,res){
    res.sendFile(__dirname+"/openweathermap.html");
});

app.post("/",function(req,res){
   console.log(req.body.cityName);

   const url = "https://api.openweathermap.org/data/2.5/weather?q="+req.body.cityName+"&appid=61841bb48d2a721340b05871a8857a0c&units=metric";
   https.get(url, function (response) {
       console.log(req);
       console.log(req.statusCode);

       response.on('data', function (data) {
           const openWeatherMap = JSON.parse(data);
           // console.log(openWeatherMap);

           // console.log(JSON.stringify(object));
           const temp = openWeatherMap.main.temp;
           // console.log(temp);
           // console.log(openWeatherMap.weather[0].description);
           // res.send("<h1>Temperature today at "+openWeatherMap.name+" is " +temp+" degree celcius.</h1>");
           // res.send("hello");

           res.write("<h1>Temperature today at "+openWeatherMap.name+" is " +temp+" degree celcius.</h1>");
           const weatherCode=openWeatherMap.weather[0].icon;
           const img_link="http://openweathermap.org/img/wn/"+ weatherCode +"@2x.png";
           res.write("<img src="+img_link+">");
           res.send();
       });
    });
});
// app.get("/", function (req, res) {


// });

}



app.listen('3000', function () {
    console.log('server is up and running on port 3000.');
});




            // //just a example of js object...
            // //-----
            // const object = {
            //     name: 'Soubhik',
            //     favFood: 'chowmein',
            // };
            // //-----