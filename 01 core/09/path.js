'use strict'
var http= require('http').createServer(webServer),
    path= require('path'),
    urls= [
        {
            route: '',
            output: '<h2>home</h2>'
        },
        {
            route: 'cerca',
            output: '<h2>acerca</h2>'
        },
        {
            route: 'contacto',
            output: '<h2>contacto</h2>'
        }
    ]
function webServer(req, res){
    var message= '<h1>hola navegador web</h1',
        pathURL= path.basename(req.url)
    console.log(pathURL)
    urls.forEach(function(pos){
        if(pos.route == pathURL){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(message+pos.output)
        }
    })
    if(!res.finish){
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end('<h1>error 404 no encontradio</h1>')
    }
}
http.listen(80, 'localhost')
console.log('corre')