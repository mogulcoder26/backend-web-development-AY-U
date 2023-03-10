var url ="http://mylogger.io/log";

function log(message){
    //send an HTTP REQ
    console.log(message);
}

module.exports=log;
module.exports.endPoint=url;