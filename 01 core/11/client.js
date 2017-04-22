'use strict'
var http= require('http'),
    options={
        host:'jonmircha.com',
        port:80,
        path:'/en'
    },
    htmlCode=''
function httpClient(res){
    console.log(`el sitio ${options.host} ha respondido el codigo del estado: ${res.statusCode}`)
    res.on('data', function(data){
        htmlCode+= data
        console.log(htmlCode.toString())
    })
    }
function httpError(err){
        console.log(`el sitio ${options.host} ha respondido el codigo del estado: ${err.code} error:${err.message}`)
    }
function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(htmlCode)
}
http
    .get(options, httpClient)
    .on('error', httpError)
http
    .createServer(webServer)
    .listen(80)