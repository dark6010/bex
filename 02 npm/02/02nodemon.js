'use strict'
var http= require('http').createServer(webServer),
    fs= require('fs')
function webServer(req, res){
    function readFile(err, data){
        if(err) throw err
        res.end(data)
    }
    res.writeHead(200, {'Content-Type':'text/html'})
    //res.writeHead(200, {'Content-Type':'text/plain'})
    fs.readFile('./index.html', readFile)
}
http.listen(80, 'localhost')
console.log('el server esta corriendo como debe de ser en el pueto 80, de manera estatica')
//forever start some.js
//forever list
//forever restartall
//forever stop pid
//pm2 list
//pm2 start some.js
//pm2 restart 0
//pm2 restart all