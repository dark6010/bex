'use strict'
var http=require('http')
function principal(request,response){
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>hello world!!</h1>')
    
}
http
    .createServer(principal)
    .listen(80, "127.0.0.1")
console.log('el server corre')
//node-debug http.js
//npm i -g node-inspector
