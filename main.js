var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request, response){
  var url = request.url;
  if(request.url == '/') {
    url = '/hello.js';
  }
  if(request.url == '/favicon.ico') {
    return response.writeHead(404);
  }
  response.writeHead(200);
  console.log(__dirname + url); //사용자가 접근할때마다 경로에 해당하는 값을 가져온다.
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
