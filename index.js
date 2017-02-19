var http = require('http');
var fs = require('fs');
var html = fs.readFileSync(__dirname + 'index.html' , 'utf8');
http.createServer(function(req,res){
   res.end("html");
 }).listen(process.env.PORT,function(){
    console.log('Listening on 8080');
});
