var http=require('http')
http.createServer(function (request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello worl\n'+'otra vez')
}).listen(80, "127.0.0.1")
console.log('el server corre')