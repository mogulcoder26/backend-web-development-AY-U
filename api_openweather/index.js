const express = require('express');
const https = require('https');
const app = express();

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=odisha,ind&appid=61841bb48d2a721340b05871a8857a0c&units=metric";
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