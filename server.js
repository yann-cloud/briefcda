var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('salut tout le monde');
});

server.listen(8080);