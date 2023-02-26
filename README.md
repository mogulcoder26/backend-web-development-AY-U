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
sendFile() is used to send a whole HTML file.Better than linking ujp various sites which often causes issues.




