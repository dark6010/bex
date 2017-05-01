'use strict'
var fs= require('fs'),
    Q= require('q'),
    file= 'nombres.txt',
    newFile= 'nombres-q.txt'
function existFile(file){
    let defer = Q.defer()
    fs.access(file,fs.F_OK, function(err){
        return (err) ? defer.reject(new Error('el archivo no existe')) : defer.resolve(true)
    })
    return defer.promise
}
function readFile(file){
    let defer= Q.defer()
    console.log('el archivo existe')
    fs.readFile(file, function(err,data){
        return (err) ? defer.reject( new Error('el archivo no se pudo leer')) : defer.resolve(data)
    })
    return defer.promise
}
function writeFile(file, data){
    let defer= Q.defer()
    console.log('el archivo se a leido existosamente')
    fs.writeFile(file, data, function(err){
        return (err) ? defer.reject(new Error('el archivo no se pudo copiar')) : defer.resolve('el archivo de copi con exito')
    })
    return defer.promise
}
existFile(file)
    .then(function(){ return readFile(file)})
    .then(function(dataPromise){return writeFile(newFile, dataPromise)})
    .then(function(dataPromise){return console.log(dataPromise)})
    .fail(function(err){return console.log(err.message)})