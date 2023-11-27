var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {'content-type': 'text/plain'});

    response.end('Hello World\n7376221CS181-JOTHSHANA S M');

}).listen(3100);

console.log('Server running at http://127.0.0.1:3100/');