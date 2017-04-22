'use strict'
var http= require('http').createServer(webServer),
    fs= require('fs'),
    path= require('path'),
    url= require('url'),
    urls= [
        {
            id: 1,
            route: '',
            output: 'index.html'
        },
        {
            id: 2,
            route: 'acerca',
            output: 'acerca.html'
        },
        {
            id: 3,
            route: 'contacto',
            output: 'contacto.html'
        }
    ]
function webServer(req, res){
    var pathURL= path.basename(req.url),
        id= url.parse(req.url, true).query.id
    console.log(`path:${pathURL}, id:${id}`)
    urls.forEach(function(pos){
        if(pos.route==pathURL || pos.id==id){
            res.writeHead(200, {'Content-Type':'text/html'})
            fs.readFile(pos.output, function(err, data){
                if(err) throw err
                res.end(data)
            })
        }
    })
    if(!res.finish){
        res.writeHead(404, {'Content-Type':'text/html'})
        fs.readFile('404.html', function(err, data){
            if(err) throw err
            res.end(data)
        })
    }
}
http.listen(80, 'localhost')
console.log('corre')