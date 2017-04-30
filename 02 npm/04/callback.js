'use strict'
var fs= require('fs'),
    file= 'nombres.txt',
    newFile= 'nombres-callback.txt'
fs.access(file,fs.F_OK, function(err){
    if(err){
        console.log('no existe')
    }else{
        console.log('existe')
        fs.readFile(file, function(err,data){
            if(err){
                console.log('el archivo no se pudo leer')
            }else{
                console.log('el archivo se ha leido exitosamente')
                fs.writeFile(newFile, data, function(err){
                    return (err) ? console.log('el archivo no se pudo copiar'):console.log('el archivo se puedo copiar')
                })
            }
        })
    }
})