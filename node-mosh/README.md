# Node JS :

it uses the chrome's V8 Engine to process Javascript code outside of the browser and helps in building the server side API.Node is like a help to javascript to not only keep itself limited to the browser and use it to fetch data from different server and communicate with the hardware of Computer.

Node uses the asynchronous architecture unlike Asp.NET and Ruby or Rails whih use synchronous architecture which is basically the amount of threads they can provide for a specific request.Lets say that their is a server which gets 2 requests.There will be a thread which will be used to serve the first request and then the second request until the first request is completed.In this if you have to make extra requests.You need to either wait for long time or extend the hardware of the server,which is not ecoomically faeasible.Node uses asynchronous architecture where the thread  can respond to other requests lets say the 2n request while the data is being fetched frpm the database for the first request and when it is ready,this data is posted on something called thread log where the thread always keeps an Eye on.once the thread is idle,it will sned back the req data of req1 and so on.


It should be noted that node.js should not be used for CPU intensive programs and should be used for Data intensive programs.

-also,there is no window object in node unlike browsers have for javascripts.


- Importing a module is thorugh app.js and logger.js

# Fetch API (Kyle-WDS):








