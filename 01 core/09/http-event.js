'use strict'
var http= require('http').createServer()
function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>hola node.js</h1>')
}
http
    .on('request', webServer)
    .listen(80, 'localhost')
console.log('el server esta corriendo como debe de ser en el pueto 80')