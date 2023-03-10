/**
* @jest-environment jsdom
*/


const jsdom =require("jsdom");
const {JSDOM} =jsdom;
const bodyParser = require("body-parser");
const https = require("https");
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


const dom = new JSDOM(`<<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href=".\styles.css">
    <title>Document</title>
</head>

<body>
    <div id="main">
        <center>
            <h1>Welcome to Joke Generator!</h1>
            <h2>Created By Soubhik Gon</h2>
        </center>

    </div>

    <div id="joke">
        <div id="setup">

        </div>
        <div id="delivery">

        </div>
    </div>

    <center>
        <form action="/" method="post">
            <button>Generate</button>
        </form>
    </center>
</body>

</html>`);
 const setup=dom.window.document.querySelector("#setup").textContent;
 const delivery=dom.window.document.querySelector("#setup").textContent;
// const setup=document.querySelector("#setup");
// const delivery=document.querySelector("#delivery");



app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

const url = "https://v2.jokeapi.dev/joke/Dark";

app.post("/", function (req, res) {

    https.get(url, function (response) {
        response.on('data', function (data) {
            const joke = JSON.parse(data); 
             if(joke.delivery!=undefined){
                res.write(joke.setup );
                res.write(joke.delivery);
                res.end();
             }
             else{
               res.write(joke.setup);
                res.end();
             }
        });
    });
})


app.listen('3000', () => {
    console.log("server is up and running on port 3000");
})