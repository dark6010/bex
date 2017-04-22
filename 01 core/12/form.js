'use strict'
var http= require('http').createServer(webServer),
    form= require('fs').readFileSync('./form.html'),
    querystring= require('querystring'),
    util= require('util'),
    dataString= ''
function webServer(req, res){
    if(req.method == 'GET'){
        res.writeHead(200, { 'Content-Type' : 'text/html'})
        res.end(form)
    }
    if(req.method == 'POST'){
        req
            .on('data', function(data){
                dataString+= data
            })
            .on('end', function(){
                var dataObject= querystring.parse(dataString),
                    dataJSON= util.inspect(dataObject),
                    templateString= `
los datos que enviste por post como string son ${dataString} 
los datos que enviste por post como JSON son ${dataJSON} 
` 
                console.log(templateString)
                res.end(templateString)
            })
        
    }
    
}
http.listen(80)
console.log('el server esta corriendo en el puerto 80')