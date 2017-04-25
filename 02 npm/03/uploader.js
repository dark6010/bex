'use strict'
var http= require('http').createServer(serverUpload),
    util= require('util'),
    formidable= require('formidable'),
    fse= require('fs-extra')
function serverUpload(req,res){
    if(req.method.toLowerCase() == 'get'){
        let form= ` 
            <h1>titulo principal</h1>
            <form action="upload" enctype="multipart/form-data" method="post" >
                <div><input type="file" name="upload" required /></div>
                <div><input type="submit" value="subir archivo"/></div>
            </form>
            `
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end(form)
    }
    if(req.method.toLowerCase() == 'post' && req.url =='/upload'){
        let form = formidable.IncomingForm()
        form
            .parse(req, function(err, fields, files){
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(`<h1>Archivos recividos</h1><a href="/">regresar</a>
                        <br />
                        <br />
                        <code>
                        ${util.inspect({files : files})}
                        </code>
                        `)
                res.end()
            })
            .on('progress', function(bytesReceived, bytesExpected){
                let percentCompleted = (bytesReceived/bytesExpected)*100
                console.log(percentCompleted.toFixed(2))
            })
            .on('error', function(err){
                console.log(err)
            })
            .on('end', function(fields, files){
                let temPath= this.openedFiles[0].path,
                    fileName= this.openedFiles[0].name,
                    newLocation= './uploads/'
                fse.copy(temPath, newLocation + fileName, function(err){
                    return (err) ? console.log(err) : console.log('el archivo se subio correctamente') 
                })
                
            })
        return
    }
}
http.listen(80)
console.log('el servidor esta coprriendo en el puerto 80')