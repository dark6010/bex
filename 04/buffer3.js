'use strict'
var fs= require('fs'),
    readStream= fs.createReadStream('assets/nombres.txt'),
    writeStream= fs.createWriteStream('assets/nombres_copy.txt')
readStream
    .pipe(writeStream)
readStream    
    .on('data', function(chunk){
    console.log('he leido ', chunk.length, 'caracteres')
})
    .on('end', function(){
    console.log('he terminado de leer el archivo ')
})