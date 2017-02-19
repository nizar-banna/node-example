var http = require('http');
var fs = require("fs");
// buf = fs.readFileSync(index.html, "utf8");

var home = fs.readFileSync(__dirname + '/index.html' ,"utf8");
var hello = fs.readFileSync(__dirname + '/hello.html' ,"utf8");


http.createServer(function(req,res){
   res.end(home);
 }).listen(8080,function(){
    console.log('Listening on 8080'); });
