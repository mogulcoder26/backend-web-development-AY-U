# backend-web-development-AY-U
Notes and resources about backend webdev.


# Node.js
> Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.
- The most important thing is that we already know Javascript, and Node.js allows us to create a backend using Javascript. So we can use one language and we don't have to spend a lot of extra time learning about yet another language and all of its intricacies.

- Node is also superfast and will allow us to create really scalable and fast running web sites. And we're not the only ones choosing Node.

Node.

## What exactly does it do anyways?

> Well currently, in our web sites, we've written Javascript code, and we've been able to execute it inside our browser.Now that's really really important.
But up until now, that Javascript code has been locked behind bars and kept inside the browser, so it's only been able to interact with the browser, request information from the browser, add event listeners to components in the browser, but we've not been able to write Javscript code for our web site that's able to go beyond the boundaries of the browser.

For example, our code isn't able to reach out of the browser into the user's computer and get access to, for example, the file system, or the networking processes.

And there's a very good reason for that.

You don't want to load up a web site that's written by some random person with a whole load of Javascript on it that’s got malicious code: bugs, viruses, hackers who are trying to tap into your local file system.It’d be really really dangerous if they could download or look into your local files,

> But there are some situations where, for example, if you were to build a desktop application, like VSCode,then you do need to access the file system in order to load up those code files that the user is going to edit.And in these situations, you need to be able to access the file system, or listen to the network request.Basically you need to be able to write code that can interact directly with the computer, independent of the browser.And that's exactly what Node.js allows us to do.

It allows us to take Javascript out of the browser and it liberates it, allowing it to interact directly with the hardware of a computer.So we can now use Javascript inside our web site in order to give it functionality and behavior,

So now, with Node.js, you can write Javascript code not just in the browser to affect the behavior of your web sites, but also to write full applications that work on your computer.

# Why is that interesting to me?

>  We're learning how to make web sites, right?Well, we can run Node.js on our own computer, but we could also use Node.js to run Javascript code on somebody else's computer,or rather, a server.And what that means is that a user could log on to Google and put in a query, and your browser will make a request to Google servers, and on those servers we can actually execute Javascript code to process their request.And after that's done, we can send back the result to the user, or to the client, and simply get their web browser to display the information, and all of that heavy lifting, the code execution, happens behind the scenes, on the server,rather than on the client side,and that will make your web site a lot more capable.Example:to access local files or listen to network traffic and manipulate databases.


# Node REPL:

> REPL stands for Read Evaluate Print Loops and it basically allows you to execute code in bite sized chunks, just like what we did with the Chrome Developer Tools Console inside Chrome.We were able to write a single line of code and then hit enter and it would run that line of code and then we could run another line of code etc..

- So by installing Node, we also installed the Node REPL, and to access it all we do is write the command node inside the command line and hit enter.
And once you see that little angle bracket, then you know you're inside the REPL.So here we can write code directly. example: I could write ```console.log(“Hey there!”);``` and if I hit enter then it will execute it straight away.

So we can also execute other bits of code, for example `3 + 5` equals 8, or `“Soubhik“ +“Gon”` will be my name, Soubhik Gon, as a string.


And it's also got short cuts, like, for example, if we didn't feel like writing out the entirety of console.logwe can write con, tab, and if one tab doesn't give you any results, you can tab again and that will give you all the possible commands that you can use at this point.


> Sometimes, while you're working in the command line, one of the most difficult things can be figuring out how to exit the process that you're currently in.
- Now, in order to exit the REPL, you can either say `.exit` and hit enter, or you can simply hit Cntrl C twice. And in a lot of cases in the future, when we're running servers, or when we’re starting processes, Cntrl C will usually get out of any process that you're running at that time.And if you wanted to clear your console, you can simply just write clear, and it will delete all of the previous commands.


In index.js file,write :
```
const fs=require("fs");
fs.copyFileSync("file1.txt","file2.txt");
//create file1.txt
```
this snippet creates a file 2.txt whenever one runs the code through cmd using ```node index.js``` and automatically creates file 2.txt and adds the contents of file1.txt and even if there is a prewritten text on file2.txt ,this command overwrites that text and replaces with file1.txt''s text.



# NPM:Node Package Manager:

Npm is the worlds largest external node modules site.

## Configuring NPM:
-  cmd--> npm init--> *_do whatever is asked ON THE EXACT FOLDER PATH,MAKE SURE THAT YOU ARE IN THE EXACT FOLDER WHERE YOU WANT TO PERFORM NPM TASKS AND EVEN BASIC CMD TASKS!_*

How to access?:through index2.js,index3.js and below :

> - Go to Npm site.
> - search for the package you want to incorp in your project.
> - in Hyper terminal/cmd , type `npm install <pkgname>` and then it will install the package name.
> - read the documentation on including and API of that module on how to use it.

# Express:
 It is a framework for Node.js and is used to make a server and use reusable bit of code to make working with Node easier.

 to use,in CMD:

```
npm install express

```

then perform npm init and configure the file with node.

for making a server :

```

const express =require("express");

const app=express();

app.listen(3000,function(){
    console.log("Server started on port 3000");
});

```


This throws an error when we search on the web engine about `localhost:3000` and it shows `Cannot GET /` 

this means that whenever a REQUEST is sent by the browser to fetch data from the homepage(root) of the `localhost:3000` ,it fails as there is no RESPONSE for that REQUEST.

The example is shown in server.js

```
//importing express to our project
const express =require("express");
//making a object express and naming it as "app".
const app = express();

// Get request and response
app.get("/" ,function(request,response){
console.log(request);
response.send("<h1>Hello World!");
})
// Note:"/" is called the route of the website.
//tuning the site to port 3000 [Our server]
app.listen(3000,function(){
    console.log("Server started on port 3000.");
})

```

NOTE:The best practice is to denote request with req and response with res.

Q.Create a route which has a contact me response and also a about response for respective Routes:

Ans)in server.js..



 # How to apply nodemon and forget about hassle of restarting and closing your server after each fix in code of server.js is :

P.S : Nodemon is a npm pkg which is used to automate the server starting and closing and actively tracks on the selected file for any changes and applies it without restarting!

to incorp nodemon,we install it.
```npm install -g nodemon```

- Syntax to use it[In Cmd]:
```
C:\Users\KIIT\Desktop\backend webdev\backend-web-development-AY-U\my-express-server>nodemon server.js
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Server started on port 3000.

```

  GET request response ,sending a file name.
  
  NOTE:`__dirname` shows the full path of the directory where the html file exists.It is helpful when we store our code and deploy the web app through Cloud services like Heroku and Vercel where Local File path cant be used
eg: `res.sendFile(__dirname+"/index.html);`
sendFile() is used to send a whole HTML file.Better than linking up various sites which often causes issues.



When we do this and run up our code and when we elore the chrome developer tools and then I head over to the Network tab, and make sure that down here you've got the All tab selected as well,we're going to test our form out. 
So I'm going to put in a first number and a second number, and then I'm going to press Calculate. Now
a whole bunch of things happen, and all of these networking requests get logged down here.
But we get this code 404, and everything's in red,
and then we get this error up here saying, `“Cannot POST to /index.html”`.

# Now where does that come from?

Well, if we have a look inside our index.html, then you can see that our form has an action and a method.Now the method is the post method,so we're sending this data somewhere, and that somewhere is what's defined by the action attribute.So we’re sending it to something called index.html,which is not what we want. We want to send it to our server, which is at the home route location,so it's just the forward slash.
Now, if you don't have an action attribute, that's fine as well._By default, if it doesn't exist, then the
form will simply send the data to the current page where it's on,so that will be the equivalent of this._

But let's just have it in there for clarity’s sake.[BEST PRACTICE]


So our form has a post method, which means it's going to try and send the data that is entered into thE inputs to a location that is our home route.So now, if we hit save, and we go back to our localhost:3000, our home page, and let's try again pressing that Calculate button.Now this time, we're still getting a 404 and a “Cannot POST”,but if you click on Chrome developer tools, and you go over to the Headers tab, and you scroll down, you can see that we've got a bunch of information, including some form data, and the data that we're getting access to is the parameter num1, which remember is bound to our first input using the name attribute, and then that has a value of 2, which is what we entered into the form previously, and the input with a name of num2 has a value of 3.

`But we have a problem, because the status code is ‘404 Not Found’.`


Now, you might have already come across the error code 404 while you're browsing web sites, and in fact a lot of companies and web sites pride themselves on how they design their 404 site, and that just goes to show how often this happens.

Now, if you're interested in a redacted but slightly rude version of how HTTP return codes work, then it's
basically
-  if it's in the 100s it means hold on, something's going to happen.
- the 200 means ‘here you go’,this is usually a successful request code.
- 300 means go away,there’s some security involved.
- 400s means you fucked up.
- 500s means server fucked up.

Now if you want to see the full list, then you can head over to trusty old Wikipedia, and you can see a list of all of those status codes.

So the two most often codes you'll see is 200, which means everything was successful. 400s tend to be client errors,so the user who's using a browser to request something that doesn't exist.

Well, the problem is that our server does not have a way of processing any post requests,so we're basically not accepting anybody to post to our home route.

Let's add an app.post method to handle any post requests that come to our home route, and then we're going to have a callback with, again, req and res, request and response.And we're just going to send back,

“Thanks for posting that!”

And then we're going to go back to our localhost:3000,I'm going to put in two numbers and press Calculate.
You can see now, when we look at our localhost, we’re getting a message back,and also we're getting the status code 200, which is ‘OK, everything's great, everything's working great.’

- Now there's just one problem.

How do we tap into these pieces of form data? Because that's essentially what we need,right?We need to be able to get that data into here, into this callback function, so we can calculate the output,and then send the result back to the browser.Now, in order to tap into those pieces of data, we have to install another NPM package, which is called Body Parser.

We can head over to our calculator.js, we can require it, so that we incorporate that package into our current project. So we can create a new const that's called bodyParser, and it's going to be requiring body-parser package that we just installed.

So now that we've incorporated Body Parser into our project, the next step is to get our app to use it.And Body Parser works with Express, so we can say app.use,and we're going to specify the thing we wanted to use, which is bodyParser. Now Body Parser has a few modes,if you will. There is, for example, bodyParser.text,
so parse all the requests into text, or bodyParser.json, which is that special format that we saw before,
which kind of looks a bit like Javascript objects, or the one that we're going to be using is bodyParser.urlencoded.And this is the special one that we use when we're trying to parse data that comes from an HTML form.So whenever you're trying to grab the information that gets posted to your server from an HTML form, you're going to be using urlencoded.And in addition to that, we're going to add an option called ‘extended’, and we're going to set it to be ‘true’.`And by setting that extended option to true, that basically just allows us to post nested objects`. And it's not something that we're going to be using, but it's something that bodyParser is requiring you to explicitly declare.So this is basically the code that you need to write every single time you want to use Body Parser.

# Now why would you want to use Body Parser?
Well, it allows you to go into any of your routes, and you can tap into something called request.body,and this is the parsed version of the HTTP request.
So let's restart our server and reload our web site, and let's put in two numbers, 2 and 3, and I'm going to hit Calculate.

So we get sent back,
“Thanks for posting that!” from the res.send,

but we also execute the console.log, where we log the request.body, and that logs in here as everythingthat we saw over here, which is the form data.So, by using Body Parser, we're able to parse the HTTP request that we get,and by using urlencoded we can get access to the form data, and we can then tap into each of these as if they were just properties of the object body.So we can, for example, log request.body.num1. And remember that naming comes from the name attribute of your input.
So now we're only logging the value of the first input.So if we go back to our web site and put in a number in here, say 5 and 6,then when we press Calculate, we get 5 logged in here,so that value gets stored inside this request.body.num1.So now that we know how we can tap into these values, then making our calculator is super duper simple,right?All we need to do is create a variable that's going to hold our num1, and that's going to be equalto request.body.num1.And then we're going to create another one called num2, and this is going to be equal to request.body.num2.And then we can calculate the result, which is going to be num1+ num2, which is making a really simple calculator that adds two numbers.

The important thing to take away from this is when you look at our web site and I right click and say View Page Source, you can see that all the client gets to see, all my browser gets to see, when I try to go to this web site is just a plain and simple HTML web site.I am not privy to any of that Javascript code that was executed to calculate the numbers.All of that is hidden and taken away from the client side because we're doing it on our server.And this is all because we built a backend that is doing the code execution instead of having all of that Javascript run on the front end, which is on the client browser. And that is the most important thing to take away.We now have a web application because our code is running on the backend as opposed to just simply having static files being rendered and loaded up, and having our Javascript run on the client side, or the front end.

# Application Programming Interface's[API's]:

- An application Programming Interface (API) is a set of commands,functions,protocols and objects that programmers can use to create software or interact with an external system.The programmers can use to create software or interact with an external system.

- It's like an contract between the data provider and the developer and what it says is these are all the things that developers can access, and these are the methods , the objects,the protocols that you would use to access them and we,as the web site that hosts the data,will try to not change any of these methods or functions without notifying the developer.

Note : JQuery is an API.Tinder uses FB API.

```
YOUR SERVER---->API(Request)--->Other Server.
YOUR SERVER<----API(Response)<---Other Server.
```

# API:
- endpoints-it is an access point to send the http requests to and get your response .
```
eg:for GET requests  in joke api:
https://svg443.net/jokeapi/v2/joke/[Category/-ies].

the [Category/-ies] refers to the additonal path and parameters of the api you want to use whereas all the things before it are known as endpoints.

if you only use endpoint link /the starting url,we also need to mention the path or the apramter /additional thing required to send the get request.

also note:
https://svg443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw&type=single&contains=debugging

when you want to specify a paramter ,you to include a parameeter,you need to put them after a "?" and then join them with "&" with a key=value parameter. 

 ```
- endpoints
- path
- parameters
- Authentication

eg: https://kanye.rest

61841bb48d2a721340b05871a8857a0c


https://api.openweathermap.org/data/2.5/weather?q=odisha,ind&appid=61841bb48d2a721340b05871a8857a0c&units=metric


# JSON-Javascript Object Notation:

It is a way to store data in the form of array and objects in javascript.API's send responses of the request data in the form of JSON,XML,HTML ...JSON is the most famous and widely used format.

Now that we've seen how we can use APIs to get data from various web sites, including things like quotes or jokes or live weather data, it's time to put it into practice and get these pieces of data from an API and then use it inside our own web apps.

This is what the process will roughly look like.

The client browser,so this is our user, is going to be typing in our web address into their browser, say Chrome, and that is going to make a request to our server, and that's going to be a GET request.So it's going to try and get the HTML, CSS and Javascript from our server.Now at this point what happens is our server should return all of those pieces of data,the HTML, CSS and Javascript, and that's in the response. But in order to be able to give them that response that includes some data from somebody else's server, we're going to have to make a request to that other server.And it's again going to be a GET request, so that they will give us a response in the form of the data that we need.And we're going to do this via their API, so via the menu that they provided for us to make our requests,where they've specified what are the things that we need to pass over, like what parameters, what paths,what key value pairs we have to use in order to get the response and the data that we want.So then, once we get the data, we can go back and incorporate that data into the files that we send back to our client, the user for our web site.

That's just the high level overview of what's going to happen in the code that we're going to write.

# Weather project:
 
``` 
HTTPS/Full name:
Hypertext Transfer Protocol Secure

```
how to parse data using JSON:
