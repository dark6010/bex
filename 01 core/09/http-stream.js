'use strict'
var http= require('http').createServer(webServer),
    fs= require('fs'),
    index= fs.createReadStream('./index.html')
function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    index.pipe(res)
}
http.listen(80, 'localhost')
console.log('el server esta corriendo como debe de ser en el pueto 80')